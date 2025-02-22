let display = document.getElementById("display");
let currentInput = "";
let operator = "";
let firstOperand = "";
let secondOperand = "";

function updateDisplay(value) {
    display.value = value;
}

function handleButtonClick(value) {
    if (value >= "0" && value <= "9") {
        currentInput += value;
        updateDisplay(currentInput);
    } else if (value === ".") {
        if (!currentInput.includes(".")) {
            currentInput += value;
            updateDisplay(currentInput);
        }
    } else if (value === "C") {
        currentInput = "";
        firstOperand = "";
        secondOperand = "";
        operator = "";
        updateDisplay("0");
    } else if (value === "=") {
        if (firstOperand && operator && currentInput) {
            secondOperand = currentInput;
            currentInput = calculate(firstOperand, operator, secondOperand);
            firstOperand = "";
            secondOperand = "";
            operator = "";
            updateDisplay(currentInput);
        }
    } else {
        if (firstOperand === "") {
            firstOperand = currentInput;
        } else if (secondOperand === "") {
            secondOperand = currentInput;
        }
        operator = value;
        currentInput = "";
    }
}

function calculate(first, operator, second) {
    first = parseFloat(first);
    second = parseFloat(second);
    switch (operator) {
        case "+":
            return first + second;
        case "-":
            return first - second;
        case "*":
            return first * second;
        case "/":
            return second !== 0 ? first / second : "Error";
        default:
            return "Error";
    }
}

document.querySelectorAll(".button").forEach(button => {
    button.addEventListener("click", (event) => {
        handleButtonClick(event.target.innerText);
    });
});
