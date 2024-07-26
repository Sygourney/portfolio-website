const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let displayValue = '';
let firstValue = null;
let secondValue = null;
let currentOperation = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        const operation = button.dataset.operation;
        const number = button.dataset.number;

        if (number) {
            displayValue += value;
            display.value = displayValue;
        } else if (operation) {
            switch (operation) {
                case 'clear':
                    displayValue = '';
                    firstValue = null;
                    secondValue = null;
                    currentOperation = null;
                    display.value = displayValue;
                    break;
                case '=':
                    if (firstValue !== null && currentOperation !== null) {
                        secondValue = parseFloat(displayValue);
                        const result = evaluate(firstValue, secondValue, currentOperation);
                        displayValue = result.toString();
                        display.value = displayValue;
                        firstValue = result;
                        secondValue = null;
                        currentOperation = null;
                    }
                    break;
                default:
                    if (displayValue !== '') {
                        firstValue = parseFloat(displayValue);
                        currentOperation = operation;
                        displayValue = '';
                    }
                    break;
            }
        }
    });
});

function evaluate(first, second, operation) {
    switch (operation) {
        case '+':
            return first + second;
        case '-':
            return first - second;
        case '*':
            return first * second;
        case '/':
            return first / second;
        default:
            return 0;
    }
}
