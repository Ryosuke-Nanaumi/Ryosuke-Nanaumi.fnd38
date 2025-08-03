// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import * as validate from "../src/validation";

describe("validation", () => {
    describe("userProfile", () => {
        it("validate age", () => {
            expect(() => {
                validate.validateUserProfile({ age: 0, weight: 50, height: 150, sex: "male", activityLevel: "high" });
            }).toThrow("正しい年齢を入力してください。(1歳以上130歳以下)");
        });
        it("validate weight", () => {
            expect(() => {
                validate.validateUserProfile({ age: 15, weight: 0, height: 150, sex: "male", activityLevel: "high" });
            }).toThrow("正しい体重を入力してください。(1kg以上300kg以下)");
        });
        it("validate height", () => {
            expect(() => {
                validate.validateUserProfile({ age: 15, weight: 50, height: 25, sex: "male", activityLevel: "high" });
            }).toThrow("正しい身長を入力してください。(30cm以上250cm以下)");
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
    describe("target", () => {
        it("validate targetWidth", () => {
            expect(() => {
                validate.validateTarget({ currentWeight: 50, targetWeightValue: 301, targetDateValue: 100 });
            }).toThrow("正しい目標体重を入力してください。(1kg以上300kg以下の範囲で、現在の体重より少ない目標体重を指定してください。)");
        });
        it("validate targetWidth when more than currentWeight", () => {
            expect(() => {
                validate.validateTarget({ currentWeight: 50, targetWeightValue: 50, targetDateValue: 100 });
            }).toThrow("現在の体重より少ない目標体重を設定してください。");
        });
        it("validate targetDateValue", () => {
            expect(() => {
                validate.validateTarget({ currentWeight: 50, targetWeightValue: 40, targetDateValue: -1 });
            }).toThrow("正しい目標日を設定してください。(1以上)");
        });
    });
});