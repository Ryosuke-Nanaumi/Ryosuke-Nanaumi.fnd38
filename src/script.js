'use strict'
// 1行目に記載している 'use strict' は削除しないでください

import { calculateMetabolism, calculateTdee } from "./calculation.js";
import { validateUserProfile } from "./validation.js";
import { setupInputScreen2 } from "./screenInput2.js";
import { sharedState } from "./sharedState.js";
// test sample
export function add(a, b) {
    return a + b;
}

export function setupScreenToggle() {
    const startBtn = document.querySelector(".start-button");
    const measurementBtn = document.querySelector(".measurement-button");
    const nextButton = document.querySelector("#nextButton");
    const startDisplay = document.querySelector("#start-screen");
    const inputInformationScreen1 = document.getElementById("input-information-screen-1");
    const inputInformationScreen2 = document.getElementById("input-information-screen-2");

    const ageInput = document.querySelector("#age")
    const weightInput = document.querySelector("#weight")
    const heightInput = document.querySelector("#height")
    const sexSelectInput = document.querySelector("#sexSelect")
    const activitySelectInput = document.querySelector("#activitySelect")

    measurementBtn.disabled = true;
    
    startBtn?.addEventListener("click", () => {
        startDisplay.style.display = "none";
        inputInformationScreen1.style.display = "flex";
    });

    [ageInput, weightInput, heightInput, sexSelectInput, activitySelectInput].forEach(input => {
        input.addEventListener("input", checkInputs);
        input.addEventListener("change", checkInputs);
    });

    measurementBtn?.addEventListener("click", () => {
        const userProfile = {
            age: parseInt(document.querySelector("#age").value),
            weight: parseFloat(document.querySelector("#weight").value),
            height: parseFloat(document.querySelector("#height").value),
            sex: document.querySelector("#sexSelect").value,
            activityLevel: document.querySelector("#activitySelect").value,
        }

        try {
            const divBmr = document.querySelector("#metabolismResult");
            const divTdee = document.querySelector("#tdeeResult");
            validateUserProfile(userProfile);
            sharedState.userProfile = userProfile;
            const bmr = calculateMetabolism(userProfile);
            divBmr.textContent = `あなたの基礎代謝は${bmr}kcalです。`;
            sharedState.bmr = bmr;
            const tdee = calculateTdee(bmr, userProfile.activityLevel);
            divTdee.textContent = `あなたの総消費カロリーは${tdee}kcalです。`;

            sharedState.tdee = tdee;
            document.querySelector("#nextButton").style.display = "block";
        } catch (e) {
            alert(e.message);
        }
    });

    nextButton?.addEventListener("click", () => {
        inputInformationScreen1.style.display = "none";
        inputInformationScreen2.style.display = "flex";
        setupInputScreen2();
    })

    function checkInputs() {
        const isFilled = (
            ageInput.value.trim() !== "" &&
            weightInput.value.trim() !== "" &&
            heightInput.value.trim() !== "" &&
            sexSelectInput.value.trim() !== "" &&
            activitySelectInput.value.trim() !== ""
        );
        measurementBtn.disabled = !isFilled;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setupScreenToggle();
});