const display = {
    value: document.querySelector('.displayScreen'),
    append: function(string) {
        this.value.innerText += string;
    },
    update: function(string) {
        this.value.innerText = string;
    }
}
let num1 = {
    value: undefined,
    active: true,
    setValue: function(num) {
        this.value = num;
    },
    setActive: function() {
        if (this.active === true) {
            this.active = false;
        } else {
            this.active = true;
        }
    }
}

let num2 = {
    value: undefined,
    active: false,
    setValue: function(num) {
        this.value = num;
    },
    setActive: function() {
        if (this.active === true) {
            this.active = false;
        } else {
            this.active = true;
        }
    }
}

let operator = {
    value: undefined,
    setValue: function(string) {
        this.value = string;
    },
    isPresent: function(string) {
        switch (string) {
            case (string.includes('+')):
                return true;
            case (string.includes('-')):
                return true;
            case (string.includes('*')):
                return true;
            case (string.includes('/')):
                return true;
            default:
                return false;
        }
    }
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
    return x / y;
}

const operate = (x, y, operator) => {
    let firstNum = parseInt(x);
    let secondNum = parseInt(y);
    let result = undefined;
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
    display.update(result.toString());
}

let numPad = Array.from(document.querySelectorAll('.number'));

numPad.map(button => {
    button.addEventListener('click', e => {
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
    });
});

let operatorKeys = Array.from(document.querySelectorAll('.operator'));

operatorKeys.map(button => {
    button.addEventListener('click', e => {
        num2.setActive();
        num1.setActive();
        operator.setValue(e.target.innerText);
    });
});

let eqKeys = Array.from(document.querySelectorAll('.equation'));

eqKeys.map(button => {
    button.addEventListener('click', e => {
        display.append(e.target.innerText);
    });
});

let operateBtn = document.querySelector('.operate');
operateBtn.addEventListener('click', () => {
    operate(num1.value, num2.value, operator.value);
});