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
import { describe, it, beforeEach, expect } from "vitest";
import { setupScreenToggle } from "../src/script";

const initialHTML = `
<section id="start-screen"><button class="start-button">はじめる</button></section>
<section id="input-information-screen-1" style="display: none;"><button class="measurement-button">はじめる</button></section>
<section id="input-information-screen-2" style="display: none;"></section>
`
describe("screenSwitch", () => {
  beforeEach(() => {
    document.body.innerHTML = initialHTML;
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
  
  it("show input-information-screen-2 when measurement-button clicked", () => {
    document.querySelector(".start-button").click();
    document.querySelector(".measurement-button").click();
    expect(document.getElementById("start-screen").style.display).toBe("none");
    expect(document.getElementById("input-information-screen-1").style.display).toBe("none");
    expect(document.getElementById("input-information-screen-2").style.display).not.toBe("none");
  });
});