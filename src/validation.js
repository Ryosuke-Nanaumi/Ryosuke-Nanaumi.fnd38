const MIN_AGE = 1;
const MAX_AGE = 130;

const MIN_WEIGHT = 1;
const MAX_WEIGHT = 300;

const MIN_HEIGHT = 30;
const MAX_HEIGHT = 250;

/** 
 * 入力値が有効かどうか確認し、無効ならエラーを例外を投げる
 *@param {Object} userProfile - { age, weight, height, sex, activityLevel }
 */
export function validateUserProfile(userProfile) {
    const { age, weight, height, sex, activityLevel } = userProfile;

    if (!Number.isFinite(age) || age <= MIN_AGE || age > MAX_AGE) {
        throw new Error("正しい年齢を入力してください。(1歳以上130歳以下)");
    }
    if (!Number.isFinite(weight) || weight <= MIN_WEIGHT || weight > MAX_WEIGHT) {
        throw new Error("正しい体重を入力してください。(1kg以上300kg以下)");
    }
    if (!Number.isFinite(height) || height <= MIN_HEIGHT || height > MAX_HEIGHT) {
        throw new Error("正しい身長を入力してください。(30cm以上250cm以下)");
    }
    if (sex !== "male" && sex !== "female") {
        throw new Error("正しい性別を入力してください。");
    }
    if (activityLevel !== "low" && activityLevel !== "middle" && activityLevel !== "high") {
        throw new Error("正しい活動レベルを入力してください。");
    }
}

/**
 * 目標値設定の入力値が有効かどうか確認し、無効なら例外を投げる
 * @param {Object} target - {currentWeight, targetWeightValue, targetDateValue}
 *  */
export function validateTarget(target) {
    const { currentWeight, targetWeightValue, targetDateValue } = target;
    if (!Number.isFinite(Number(targetWeightValue)) || targetWeightValue <= MIN_WEIGHT || targetWeightValue > MAX_WEIGHT) {
        throw new Error("正しい目標体重を入力してください。(1kg以上300kg以下の範囲で、現在の体重より少ない目標体重を指定してください。)");
    }
    if (currentWeight <= targetWeightValue) {
        throw new Error("現在の体重より少ない目標体重を設定してください。");
    }
    if (!Number.isFinite(Number(targetDateValue)) || targetDateValue <= 0) {
        throw new Error("正しい目標日を設定してください。(0以上)");
    }
}