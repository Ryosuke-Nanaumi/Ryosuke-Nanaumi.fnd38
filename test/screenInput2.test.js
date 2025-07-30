// @vitest-environment jsdom
import { describe, it, beforeEach, expect, vi } from "vitest";
import { setupInputScreen2 } from "../src/screenInput2";
import { calculateTarget } from "../src/calculation";

const initialHTML = `
<section id="input-information-screen-2">
    <h2>目標を設定しましょう</h2>
    <form class="user-information-form-2" id="informationForm2">
      <label>目標体重<input type="number" id="targetWeight" value="50" required ></label>
      <label>達成までの日数<input type="number" id="targetDate" value="100"></label>
      <label>週の運動可能回数<input type="number" id="possibleActiveDate" value"2"></label>
    </form>
    <button class="create-button" id="createButton">目標プランを作成する</button>
  </section>
`

vi.mock("../src/caluculation", () => {
    calculateTarget: vi.fn(() => {
        return {
            dailyCalorieCut: 240,
            weekleyWorkoutPlan: ["月曜日: ランニング"],
            recomendFood: ["野菜"],
            warning: "急激な減量は避けましょう。"
        }
    });
})

describe("setupInputScreen2", () => {
    beforeEach(() => {
        document.body.innerHTML = initialHTML;
        setupInputScreen2();
    });
    it("show content", () => {
        expect(document.querySelector("#targetWeight").display).not.toBe("none");
        expect(document.querySelector("#targetDate").display).not.toBe("none");
        expect(document.querySelector("#possibleActiveDate").display).not.toBe("none");
        expect(document.querySelector("#createButton").display).not.toBe("none");
    });
    it("create and display plan when createButton tapped", () => {
        document.querySelector("#createButton").click();

        expect(calculateTarget).toHaveBeenCalled();

        
    })
})