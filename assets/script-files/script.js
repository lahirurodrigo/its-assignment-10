let currentOperand = '';
let previousOperand = '';
let operation = undefined;

const display = document.getElementById('display');

function appendNumber(number) {
    if (number === '0' && currentOperand === '0') return;
    if (currentOperand.includes('.') && number === '.') return;
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
}

function updateDisplay() {
    display.value = currentOperand;
}

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
    updateDisplay();
}

function chooseOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        compute();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
}

function compute() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentOperand = result;
    operation = undefined;
    previousOperand = '';
    updateDisplay();
}