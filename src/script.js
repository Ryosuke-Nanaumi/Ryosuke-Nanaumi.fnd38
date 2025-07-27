'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// test sample
export function add(a, b) {
    return a + b;
}

export function setupScreenToggle() {
    const startBtn = document.querySelector(".start-button");
    const measurementBtn = document.querySelector(".measurement-button");
    const startDisplay = document.querySelector("#start-screen");
    const inputInformationScreen1 = document.getElementById("input-information-screen-1");
    const inputInformationScreen2 = document.getElementById("input-information-screen-2");

    startBtn?.addEventListener("click", () => {
        startDisplay.style.display = "none";
        inputInformationScreen1.style.display = "block";
    });

    measurementBtn?.addEventListener("click", () => {
        inputInformationScreen1.style.display = "none";
        inputInformationScreen2.style.display = "block";
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupScreenToggle();
});

// setupScreenToggle();