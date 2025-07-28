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
    });
});