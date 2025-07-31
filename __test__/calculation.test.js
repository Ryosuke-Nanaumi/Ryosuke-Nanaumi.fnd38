import { describe, it, beforeEach, expect } from "vitest";
import { calculateMetabolism, calculateTdee, calculateTarget } from "../src/calculation";

// @vitest-environment jsdom
describe("calculate", () => {
    describe("metabolism", () => {
        it("metabolism returns calculated answer", () => {
            const result = calculateMetabolism({
                age: 25,
                weight: 70,
                height: 170,
                sex: "male",
            });
            expect(result).toBeCloseTo(1571, 0);
        });
        it("throw Error when age, weight and height less than 0", () => {
            expect(() => {
                calculateMetabolism({
                    age: 0,
                    weight: 70,
                    height: 170,
                    sex: "male",
                })
            }).toThrow();
        });
    });
    describe("tdee", () => {
        it("calculateTdee returns calculated answer", () => {
            const result = calculateTdee(1571.1, "middle");
            expect(result).toBeCloseTo(2749, 0);
        });
    });
    describe("target", () => {
        it("calculateTarget returns calculated answer", () => {
            const result = calculateTarget(1571.1, {currentWeight: 80, targetWeightValue: 70, targetDateValue: 50});
            expect(result).toBeCloseTo(131, 0);
        });
    });
});