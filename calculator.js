
document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.calc-buttons button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const action = button.getAttribute('data-operation');
            const number = button.getAttribute('data-number');

            if (action) {
                handleOperation(action);
            } else if (number !== null) {
                handleNumber(number);
            }
        });
    });

    function handleNumber(number) {
        if (display.value === '0' || display.value === 'Error') {
            display.value = number;
        } else {
            display.value += number;
        }
    }

    function handleOperation(action) {
        switch (action) {
            case 'clear':
                display.value = '0';
                break;
            case '=':
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = 'Error';
                }
                break;
            default:
                if (display.value !== 'Error') {
                    display.value += action;
                }
                break;
        }
    }
});
