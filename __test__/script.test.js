
// testのテンプレート
{
  // import { describe, it, expect, beforeAll, afterAll } from 'vitest';

  // describe('数値のテスト', () => {

  //   beforeAll(() => {
  //     // すべてのテストケースの前に実行される処理
  //     console.log('テスト開始前の初期化');
  //   });

  //   afterAll(() => {
  //     // すべてのテストケースの後に実行される処理
  //     console.log('テスト完了後の後片付け');
  //   });

  //   it('数値の等価性テスト', () => {
  //     expect(2 + 2).toBe(4);
  //   });

  //   it('数値の不等価性テスト', () => {
  //     expect(2 + 2).not.toBe(5);
  //   });

  // });

  // テストサンプル
  // import { add } from '../src/script';

  // describe('add 関数のテスト', () => {
  //   it('1 + 2 は 3', () => {
  //     expect(add(1, 2)).toBe(3);
  //   });

  //   it('0 + 0 は 0', () => {
  //     expect(add(0, 0)).toBe(0);
  //   });
  // });
}

// @vitest-environment jsdom
import { describe, it, beforeEach, expect, vi } from "vitest";
import { setupScreenToggle } from "../src/script";
import { fullScreenFlowHTML } from "../__test__/fixtures/initialHTML"

vi.mock("../src/calculation", () => ({
  calculateMetabolism: vi.fn(() => 1234),
  calculateTdee: vi.fn(() => 2000),
}))

describe("screenSwitch", () => {
  beforeEach(() => {
    document.body.innerHTML = fullScreenFlowHTML;
    setupScreenToggle();
  });
  it("shows only the start-screen initially", () => {
    expect(document.getElementById("start-screen").style.display).not.toBe("none");
    expect(document.getElementById("input-information-screen-1").style.display).toBe("none");
    expect(document.getElementById("input-information-screen-2").style.display).toBe("none");
  });

  it("show input-information-screen-1 when start-button clicked", () => {
    document.querySelector(".start-button").click();
    expect(document.getElementById("start-screen").style.display).toBe("none");
    expect(document.getElementById("input-information-screen-1").style.display).not.toBe("none");
    expect(document.getElementById("input-information-screen-2").style.display).toBe("none");
  });

  it("show result and nextButton when measurement-button clicked", () => {
    document.querySelector(".start-button").click();

    expect(document.querySelector(".measurement-button").disabled).toBe(true);

    ["age", "weight", "height"].forEach(id => {
      document.getElementById(id).dispatchEvent(new Event("input"));
    });
    document.getElementById("sexSelect").dispatchEvent(new Event("change"));
    document.getElementById("activitySelect").dispatchEvent(new Event("change"));

    expect(document.querySelector(".measurement-button").disabled).toBe(false);
    document.querySelector(".measurement-button").click();
    expect(document.getElementById("start-screen").style.display).toBe("none");
    expect(document.getElementById("input-information-screen-1").style.display).not.toBe("none");
    expect(document.getElementById("nextButton").style.display).not.toBe("none");
    expect(document.getElementById("input-information-screen-2").style.display).toBe("none");

    const bmrResult = document.querySelector("#metabolismResult").textContent;
    expect(bmrResult).not.toBeNull();
    expect(bmrResult).toBe("あなたの基礎代謝は1234kcalです。");
    
    const tdeeResult = document.querySelector("#tdeeResult").textContent;
    expect(tdeeResult).not.toBeNull();
    expect(tdeeResult).toBe("あなたの総消費カロリーは2000kcalです。");
  });
  
  it("show input-information-screen-2 when nextButton tapped", () => {
    document.querySelector(".start-button").click();

    ["age", "weight", "height"].forEach(id => {
      document.getElementById(id).dispatchEvent(new Event("input"));
    });
    document.getElementById("sexSelect").dispatchEvent(new Event("change"));

    document.querySelector(".measurement-button").click();
    document.querySelector("#nextButton").click();


    expect(document.getElementById("input-information-screen-1").style.display).toBe("none");
    expect(document.getElementById("input-information-screen-2").style.display).not.toBe("none");
  });
});