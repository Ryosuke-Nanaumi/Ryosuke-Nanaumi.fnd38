import { describe, it, beforeEach, expect } from "vitest";
import { calculateMetabolism } from "../src/calculation";

// @vitest-environment jsdom
describe("calculate", () => {
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