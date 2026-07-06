const display = document.getElementById("user-input");
const buttons = document.querySelectorAll(".cals-keys button");

let input = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        // AC
        if (value === "AC") {
            input = "";
            display.textContent = "0";
            return;
        }

        // DEL
        if (value === "DEL") {
            input = input.slice(0, -1);
            display.textContent = input || "0";
            return;
        }

        // =
        if (value === "=") {
            try {
                const result = Function('"use strict"; return (' + input + ')')();
                input = result.toString();
                display.textContent = input;
            } catch {
                display.textContent = "Error";
                input = "";
            }
            return;
        }

        // Prevent multiple leading zeros
        if (input === "0" && value === "0") {
            return;
        }

        // Replace starting 0 with a number
        if (input === "0" && /[1-9]/.test(value)) {
            input = value;
        } else {
            input += value;
        }

        display.textContent = input;
    });
});