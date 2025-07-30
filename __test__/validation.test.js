// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import * as validate from "../src/validation";

describe("validation", () => {
    describe("userProfile", () => {
        it("validate age", () => {
            expect(() => {
                validate.validateUserProfile({ age: 0, weight: 50, height: 150, sex: "male", activityLevel: "high" });
            }).toThrow("正しい年齢を入力してください。");
        });
        it("validate weight", () => {
            expect(() => {
                validate.validateUserProfile({ age: 15, weight: 0, height: 150, sex: "male", activityLevel: "high" });
            }).toThrow("正しい体重を入力してください。");
        });
        it("validate height", () => {
            expect(() => {
                validate.validateUserProfile({ age: 15, weight: 50, height: 25, sex: "male", activityLevel: "high" });
            }).toThrow("正しい身長を入力してください。");
        });
        it("validate sex", () => {
            expect(() => {
                validate.validateUserProfile({ age: 15, weight: 50, height: 150, sex: "foo", activityLevel: "high" });
            }).toThrow("正しい性別を入力してください。");
        });
        it("validate activity", () => {
            expect(() => {
                validate.validateUserProfile({ age: 15, weight: 50, height: 150, sex: "male", activityLevel: "foo" });
            }).toThrow("正しい活動レベルを入力してください。");
        });
    });
});