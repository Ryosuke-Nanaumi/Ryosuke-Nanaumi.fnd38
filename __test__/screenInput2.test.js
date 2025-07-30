// @vitest-environment jsdom
import { describe, it, beforeEach, expect, vi } from "vitest";
import { setupInputScreen2 } from "../src/screenInput2";
import { calculateTarget } from "../src/calculation";
import { screenInput2HTML } from "./fixtures/initialHTML";

vi.mock("../src/calculation.js", () => ({
    calculateTarget: vi.fn(() => ({
        dailyCalorieCut: 240,
        weekleyWorkoutPlan: ["月曜日: ランニング"],
        recomendFood: ["野菜"],
        warning: "急激な減量は避けましょう。"
    }))
}));


describe("setupInputScreen2", () => {
    beforeEach(() => {
        document.body.innerHTML = screenInput2HTML;
        setupInputScreen2();
    });
    it("show content", () => {
        expect(document.querySelector("#targetWeight").display).not.toBe("none");
        expect(document.querySelector("#targetDate").display).not.toBe("none");
        expect(document.querySelector("#possibleActiveDate").display).not.toBe("none");
        expect(document.querySelector("#createButton").display).not.toBe("none");
    });
    it("create and display plan when createButton tapped", () => {
        const createButton = document.querySelector("#createButton")
        expect(createButton.disabled).toBe(true);

        ["targetWeight", "targetDate", "possibleActiveDate"].forEach(id => {
            document.getElementById(id).dispatchEvent(new Event("input"));
        });

        expect(createButton.disabled).toBe(false);

        createButton.click();

        // expect(calculateTarget).toHaveBeenCalled();
        // expect(calculateTarget).toHaveBeenCalled();
    })
})