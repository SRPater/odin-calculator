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

function operate(numA, numB, op) {
    switch (op) {
        case "+":
            console.log(add(numA, numB));
            break;
        case "-":
            console.log(subtract(numA, numB));
            break;
        case "*":
            console.log(multiply(numA, numB));
            break;
        case "/":
            console.log(divide(numA, numB));
            break;
        default:
            console.log("Invalid operator.");
    }
}

let numberA;
let numberB;
let operator;

operate(2, 3, "+");
operate(2, 3, "-");
operate(2, 3, "*");
operate(2, 3, "/");
operate(2, 3, "a");
operate(2, 3, 4);
