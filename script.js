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