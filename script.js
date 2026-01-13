// Basic math functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return Math.round(a / b * 1000) / 1000;
}

// Call correct math function based on operator
function operate(numA, numB, op) {
    switch (op) {
        case "+":
            return add(parseInt(numA), parseInt(numB));
        case "-":
            return subtract(parseInt(numA), parseInt(numB));
        case "*":
            return multiply(parseInt(numA), parseInt(numB));
        case "/":
            if (parseInt(numB) === 0) {
                return "ERROR";
            }

            return divide(parseInt(numA), parseInt(numB));
        default:
            return "ERROR";
    }
}

// Define variables
let numberA = "";
let numberB = "";
let operator = "";

// Get DOM elements
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");
const display = document.querySelector("#display");

// Press clear button
clearButton.addEventListener("click", () => {
    numberA = "";
    numberB = "";
    operator = "";
    display.innerHTML = "";
});

// Press number buttons
numberButtons.forEach((button) => button.addEventListener("click", (e) => {
    if (operator === "") {
        numberA += e.target.innerHTML;
        display.innerHTML = numberA;
    } else {
        numberB += e.target.innerHTML;
        display.innerHTML = `${numberA} ${operator} ${numberB}`;
    }
}));

// Press operator buttons
operatorButtons.forEach((button) => button.addEventListener("click", (e) => {
    operator = e.target.innerHTML;
    display.innerHTML = `${numberA} ${operator}`;
}));

// Press equals button
equalsButton.addEventListener("click", () => {
    display.innerHTML = operate(numberA, numberB, operator);
    numberA = "";
    numberB = "";
    operator = "";
});
