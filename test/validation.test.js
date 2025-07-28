// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { validateUserProfile } from "../src/validation";

describe("validation", () => {
    it("validate age", () => {
        expect(() => {
            validateUserProfile({ age: 0, weight: 50, height: 150, sex: "male" });
        }).toThrow("正しい年齢を入力してください。");
    });
    it("validate weight", () => {
        expect(() => {
            validateUserProfile({ age: 15, weight: 0, height: 150, sex: "male" });
        }).toThrow("正しい体重を入力してください。");
    });
    it("validate height", () => {
        expect(() => {
            validateUserProfile({ age: 15, weight: 50, height: 25, sex: "male" });
        }).toThrow("正しい身長を入力してください。");
    });
    it("validate sex", () => {
        expect(() => {
            validateUserProfile({ age: 15, weight: 50, height: 150, sex: "foo" });
        }).toThrow("正しい性別を入力してください。");
    });
});