import { sharedState } from "./sharedState.js";
import { calculateTarget } from "./calculation.js";
import { validateTarget } from "./validation.js";

export function setupInputScreen2() {
    const targetWeight = document.querySelector("#targetWeight");
    const targetDate = document.querySelector("#targetDate");
    const createButton = document.querySelector("#createButton");

    createButton.disabled = true;

    showUserMetabolismResult();

    [targetWeight, targetDate].forEach(input => {
        input.addEventListener("input", () => {
            const isFilled = (
                targetWeight.value.trim() !== "" &&
                targetDate.value.trim() !== ""
            );
            createButton.disabled = !isFilled;
        });
    });

    createButton.addEventListener("click", () => {
        try {
            const targetWeightValue = targetWeight.value;
            const targetDateValue = targetDate.value;

            const targetObject = {
                currentWeight: sharedState.userProfile.weight,
                targetWeightValue: targetWeightValue,
                targetDateValue: targetDateValue
            }
            validateTarget(targetObject);

            const targetCalorieIntake = calculateTarget(sharedState.tdee, targetObject);

            // todo
            if (targetCalorieIntake <= sharedState.bmr) {
                const advice = document.querySelector("#calorieAdvice");
                advice.textContent = "1日の目標摂取カロリーが基礎代謝を下回っています。ダイエット計画を見直してください。";
            } else {
                const advice = document.querySelector("#calorieAdvice");
                advice.textContent = `あなたの1日の目標摂取カロリーは${targetCalorieIntake}kcalです。`;
                
                const good = document.createElement("p");
                good.textContent = "健康的なダイエット計画です。"
                advice.appendChild(good);
            }
        } catch (e) {
            alert(e.message);
        }
    });
}

function showUserMetabolismResult() {
    const container = document.getElementById("metabolismList");
    const {
        userProfile,
        bmr,
        tdee,
    } = sharedState;

    container.innerHTML = `
    <ul>
      <li><strong>年齢:</strong> ${userProfile.age} 歳</li>
      <li><strong>性別:</strong> ${userProfile.sex === "male" ? "男性" : "女性"}</li>
      <li><strong>身長:</strong> ${userProfile.height} cm</li>
      <li><strong>体重:</strong> ${userProfile.weight} kg</li>
      <li><strong>活動レベル:</strong> ${getActivityLevelLabel(userProfile.activityLevel)}</li>
      <li><strong>基礎代謝 (BMR):</strong> ${bmr} kcal</li>
      <li><strong>総消費カロリー (TDEE):</strong> ${tdee} kcal</li>
    </ul>
  `;
}

function getActivityLevelLabel(level) {
    switch (level) {
        case "low":
            return "低い（運動しない）";
        case "middle":
            return "普通（少し運動する）";
        case "high":
            return "高い（運動する）";
        default:
            return "不明";
    }
}
