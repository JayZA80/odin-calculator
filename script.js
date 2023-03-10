let result = undefined;

const display = {
    element: document.querySelector('.displayScreen'),
    append: function(string) {
        this.element.innerText += string;
    },
    update: function(string) {
        this.element.innerText = string;
    }
}
let num1 = {
    value: undefined,
    active: true,
    setValue: function(num) {
        this.value = num;
    }
}

let num2 = {
    value: undefined,
    active: false,
    setValue: function(num) {
        this.value = num;
    }
}

let operator = {
    value: undefined,
    setValue: function(string) {
        this.value = string;
    },
    isPresent: false 
}

const add = (x, y) => {
    return x + y;
}

const subtract = (x, y) => {
    return x - y;
}

const multiply = (x, y) => {
    return x * y;
}

const divide = (x, y) => {
    if (x === 0 || y === 0) {
        alert('You can\'t divide by 0 you silly!');
        clear();
    } else {
        return x / y;
    }
}

const operate = (x, y, operator) => {
    if (x !== undefined && y !== undefined && operator !== undefined) {
        let firstNum = parseInt(x);
        let secondNum = parseInt(y);
        switch (operator) {
            case '+':
                result = add(firstNum, secondNum);
                break;
            case '-':
                result = subtract(firstNum, secondNum);
                break;
            case '*':
                result = multiply(firstNum, secondNum);
                break;
            case '/':
                result = divide(firstNum, secondNum);
                break;
            default:
                result = console.log('Something went wrong with calculating...');
        }
        if (result !== undefined) {
            display.update(result.toString());
        } else {
            display.update('');
        }
    }
}

const clear = () => {
    num1.value = undefined;
    num2.value = undefined;
    result = undefined;
    operator.value = undefined;
    num1.active = true;
    num2.active = false;
    operator.isPresent = false;
    display.update('');
}

let numPad = Array.from(document.querySelectorAll('.number'));

numPad.map(button => {
    button.addEventListener('click', e => {
        if (result !== undefined) {
            clear();
        }
        if (num2.active === true) {
            if (num2.value === undefined) {
                num2.setValue(e.target.innerText);
            } else {
                num2.value += e.target.innerText;
            }
        } else {
            if (num1.value === undefined) {
                num1.setValue(e.target.innerText);
            } else {
                num1.value += e.target.innerText;
            }
        }
        display.append(e.target.innerText);
    });
});

let operatorKeys = Array.from(document.querySelectorAll('.operator'));

operatorKeys.map(button => {
    button.addEventListener('click', e => {
        if (operator.isPresent === false) {
            if (num1.value !== undefined) {
                if (result !== undefined) {
                    num1.value = result;
                    num2.value = undefined;
                    result = undefined;
                }
                num2.active = true;
                num1.active = false;
                operator.setValue(e.target.innerText);
                display.append(e.target.innerText)
                operator.isPresent = true;
            }
        }
    });
});

let operateBtn = document.querySelector('.operate');
operateBtn.addEventListener('click', () => {
    operate(num1.value, num2.value, operator.value);
    operator.isPresent = false;
});

document.getElementById('clear').addEventListener('click', clear);