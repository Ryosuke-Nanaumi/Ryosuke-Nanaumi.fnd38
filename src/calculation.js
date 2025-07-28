/**
 *@param {Object} userProfile age, weight, height, sexを持つオブジェクト
 *@returns {number} 算出した計算結果
 */
export function calculateMetabolism(userProfile) {
    const { age, weight, height, sex } = userProfile;
    if (age <= 0 || weight <= 0 || height <= 0) throw new Error();

    const sexConstant = sex === "male" ? 0.5473 : 0.5473 * 2;

    return (
        (0.1238 + (0.0481 * weight) + (0.0234 * height) - (0.0138 * age) - sexConstant)
    ) * 1000 / 4.186;
}