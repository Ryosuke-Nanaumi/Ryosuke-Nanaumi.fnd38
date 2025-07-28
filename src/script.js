'use strict'
// 1行目に記載している 'use strict' は削除しないでください

import { calculateMetabolism } from "./calculation.js";
import { validateUserProfile } from "./validation.js";
// test sample
export function add(a, b) {
    return a + b;
}

export function setupScreenToggle() {
    const startBtn = document.querySelector(".start-button");
    console.log(startBtn);
    const measurementBtn = document.querySelector(".measurement-button");
    const startDisplay = document.querySelector("#start-screen");
    const inputInformationScreen1 = document.getElementById("input-information-screen-1");
    const inputInformationScreen2 = document.getElementById("input-information-screen-2");

    const resultElement = document.createElement("div");
    resultElement.id = "metabolismResult";
    inputInformationScreen1.appendChild(resultElement);

    startBtn?.addEventListener("click", () => {
        startDisplay.style.display = "none";
        inputInformationScreen1.style.display = "block";
    });

    measurementBtn?.addEventListener("click", () => {
        const userProfile = {
            age: parseInt(document.querySelector("#age").value),
            weight: parseFloat(document.querySelector("#weight").value),
            height: parseFloat(document.querySelector("#height").value),
            sex: document.querySelector("#sexSelect").value
        }

        try {
            validateUserProfile(userProfile);
            const result = calculateMetabolism(userProfile);
            resultElement.textContent = result;
        } catch (e) {
            alert(e.message);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupScreenToggle();
});

// setupScreenToggle();