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
    switch (operator) {
        case (operator === '+'):
            add(firstNum, secondNum);
            break;
        case (operator === '-'):
            subtract(firstNum, secondNum);
            break;
        case (operator === '*'):
            multiply(firstNum, secondNum);
            break;
        case (operator === '/'):
            divide(firstNum, secondNum);
            break;
        default:
            console.log('Something went wrong with calculating...');
    }
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