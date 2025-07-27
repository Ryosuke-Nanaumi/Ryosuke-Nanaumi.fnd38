// testのテンプレート
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

import { describe, it, expect } from 'vitest';

