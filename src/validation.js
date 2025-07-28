const MIN_AGE = 1;
const MAX_AGE = 130;

const MIN_WEIGHT = 1;
const MAX_WEIGHT = 300;

const MIN_HEIGHT = 30;
const MAX_HEIGHT = 250;

/** 
 * 入力値が有効かどうか確認し、無効ならエラーを例外を投げる
 *@param {Object} userProfile - { age, weight, height, sex }
 */
export function validateUserProfile(userProfile) {
    const { age, weight, height, sex } = userProfile;

    if (!Number.isFinite(age) || age <= MIN_AGE || age > MAX_AGE) {
        throw new Error("正しい年齢を入力してください。");
    }
    if (!Number.isFinite(weight) || weight <= MIN_WEIGHT || weight > MAX_WEIGHT) {
        throw new Error("正しい体重を入力してください。");
    }
    if (!Number.isFinite(height) || height <= MIN_HEIGHT || height > MAX_HEIGHT) {
        throw new Error("正しい身長を入力してください。");
    }
    if (sex !== "male" && sex !== "female") {
        throw new Error("正しい性別を入力してください。");
    }
}