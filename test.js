class Calculator {
    constructor() {
        this.result = 0;
    }

    add(num) {
        this.result += num;
    }

    subtract(num) {
        this.result -= num;
    }

    multiply(num) {
        this.result *= num;
    }

    divide(num) {
        if (num === 0) {
            console.log("Cannot divide by zero.");
            return;
        }
        this.result /= num;
    }

    clear() {
        this.result = 0;
    }

    getResult() {
        return this.result;
    }
}

// Example usage:
const calc = new Calculator();

calc.add(5);
console.log(calc.getResult()); // 5

calc.subtract(2);
console.log(calc.getResult()); // 3

calc.multiply(10);
console.log(calc.getResult()); // 30

calc.divide(5);
console.log(calc.getResult()); // 6

calc.clear();
console.log(calc.getResult()); // 0