// @vitest-environment jsdom
import { describe, it, beforeEach, expect, vi } from "vitest";
import { screenInput2HTML } from "./fixtures/initialHTML";
import { setupInputScreen2 } from "../src/screenInput2";
import { sharedState } from "../src/sharedState.js";
import { validateTarget } from "../src/validation.js";

vi.mock("../src/calculation.js", () => ({
    calculateTarget: vi.fn(() => 1500),
}));

vi.mock("../src/validation.js", () => ({
    validateTarget: vi.fn(),
}));


describe("setupInputScreen2", () => {
    beforeEach(() => {
        document.body.innerHTML = screenInput2HTML;
        sharedState.userProfile = {
            age: 25,
            weight: 70,
            height: 170,
            sex: "male",
            activityLevel: "middle",
        };
        sharedState.bmr = 1400;
        sharedState.tdee = 2000;

        setupInputScreen2();
    });
    it("show content", () => {
        expect(document.querySelector("#targetWeight").display).not.toBe("none");
        expect(document.querySelector("#targetDate").display).not.toBe("none");
        expect(document.querySelector("#createButton").display).not.toBe("none");
    });
    it("create and display plan when createButton tapped", () => {
        const createButton = document.querySelector("#createButton")
        expect(createButton.disabled).toBe(true);

        ["targetWeight", "targetDate"].forEach(id => {
            document.getElementById(id).dispatchEvent(new Event("input"));
        });

        expect(createButton.disabled).toBe(false);

        createButton.click();

        expect(document.querySelector("#calorieAdvice").textContent).toBe("あなたの1日の目標摂取カロリーは1500kcalです。健康的なダイエット計画です。")
    })
})