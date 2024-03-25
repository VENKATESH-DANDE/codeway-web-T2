let display = document.getElementById('display');
let operand1 = '';
let operand2 = '';
let operator = '';

function appendToDisplay(value) {
    if (value === '+' || value === '-' || value === '*' || value === '/') {
        if (operand1 === '') {
            operand1 = display.textContent;
            operator = value;
            display.textContent += value;
        }
    } else {
        display.textContent += value;
    }
}

function clearDisplay() {
    display.textContent = '0';
    operand1 = '';
    operand2 = '';
    operator = '';
}

function calculate() {
    if (operand1 !== '' && operator !== '') {
        operand2 = display.textContent.slice(operand1.length + 1);
        operand1 = parseFloat(operand1);
        operand2 = parseFloat(operand2);
        switch (operator) {
            case '+':
                display.textContent = operand1 + operand2;
                break;
            case '-':
                display.textContent = operand1 - operand2;
                break;
            case '*':
                display.textContent = operand1 * operand2;
                break;
            case '/':
                if (operand2 !== 0) {
                    display.textContent = operand1 / operand2;
                } else {
                    display.textContent = 'Error';
                }
                break;
            default:
                display.textContent = 'Error';
        }
        operand1 = '';
        operand2 = '';
        operator = '';
    }
}
