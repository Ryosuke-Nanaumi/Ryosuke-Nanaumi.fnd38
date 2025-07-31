import { sharedState } from "./sharedState.js";
import { calculateTarget } from "./calculation.js";
import { validateTarget } from "./validation.js";

export function setupInputScreen2() {
    const targetWeight = document.querySelector("#targetWeight");
    const targetDate = document.querySelector("#targetDate");
    const createButton = document.querySelector("#createButton");

    createButton.disabled = true;

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

            const advice = document.querySelector("#calorieAdvice");
            advice.textContent = `あなたの目標摂取カロリーは${targetCalorieIntake}kcalです。`;
        } catch(e) {
            alert(e.message);
        }
    });
}