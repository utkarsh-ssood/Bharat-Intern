document.addEventListener("DOMContentLoaded", function () {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const convertButton = document.getElementById("convert");

    convertButton.addEventListener("click", function () {
        const celsiusValue = parseFloat(celsiusInput.value);
        const fahrenheitValue = parseFloat(fahrenheitInput.value);

        if (!isNaN(celsiusValue)) {
            const fahrenheitResult = (celsiusValue * 9 / 5) + 32;
            fahrenheitInput.value = fahrenheitResult.toFixed(2);
        } else if (!isNaN(fahrenheitValue)) {
            const celsiusResult = (fahrenheitValue - 32) * 5 / 9;
            celsiusInput.value = celsiusResult.toFixed(2);
        } else {
            alert("Please enter a valid temperature value.");
        }
    });
});
