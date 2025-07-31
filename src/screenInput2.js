// import { calculateTarget } from "./calculation";

// todo
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
        // const result = calculateTarget()
    });
}