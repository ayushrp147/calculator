// function add(number1, number2) {
//     return number1 + number2;
// }
// function subtract(number1, number2) {
//     return number1 - number2;
// }
// function multiply(number1, number2) {
//     return number1 * number2;
// }
// function divide(number1, number2) {
//     return number1 / number2;
// }
// let firstNumber, secondNumber, operator;
// function operate(firstNumber, operator, secondNumber) {
//     switch (operator) {
//         case '+':
//             return add(firstNumber, secondNumber);
//         case '-':
//             return subtract(firstNumber, secondNumber);
//         case '*':
//             return multiply(firstNumber, secondNumber);
//         case '/':
//             return divide(firstNumber, secondNumber);
//     }
// }
// let resultDisplayed = false;
// const numbers = document.querySelectorAll(".number");
// let display = document.querySelector(".display")
// const numbersArray = Array.from(numbers);
// numbersArray.forEach((number) => {
//     number.addEventListener("click", () => {
//         const value = number.textContent;
//         if (resultDisplayed) {
//             display.textContent = value;
//             resultDisplayed = false;
//         }
//         else {
//             if (display.textContent === "0") {
//                 display.textContent = value;
//             }
//             else {
//                 display.textContent += value;
//             }
//         }
//     });
// });
// const operatorButton = document.querySelectorAll(".operator")
// const operatorArray = Array.from(operatorButton);
// operatorArray.forEach((op) => {
//     op.addEventListener("click", () => {
//         if (firstNumber && operator && !resultDisplayed) {
//             secondNumber = parseInt(display.textContent);
//             console.log(secondNumber);
//             const result=operate(firstNumber,operator,secondNumber);
//             display.textContent=result;
//             firstNumber=result.toString();
//             // secondNumber="";
//             resultDisplayed=false;
//         }
//         else{
//             firstNumber=+display.textContent;
//             console.log(typeof firstNumber);
//             operator = op.textContent;
//             console.log(`operator ${operator}: ${typeof operator}`);
//             console.log(operator)
//             display.textContent = "0";
//         }
//     });
// });
// const equal = document.querySelector(".equal");
// equal.addEventListener("click", () => {
//     if (firstNumber && operator) {
//         secondNumber = +display.textContent;
//         console.log(typeof secondNumber);
//         const finalValue = operate(firstNumber, operator, secondNumber);
//         firstNumber = finalValue;
//         display.textContent = finalValue.toString();
//         console.log(finalValue);
//         // secondNumber = "";
//         // operator = "";
//         resultDisplayed = true;
//     }
// });
function add(number1, number2) {
    console.log(`Add: ${number1} + ${number2} = ${number1 + number2}`);
    return number1 + number2;
}
function subtract(number1, number2) {
    console.log(`Subtract: ${number1} - ${number2} = ${number1 - number2}`);
    return number1 - number2;
}
function multiply(number1, number2) {
    console.log(`Multiply: ${number1} * ${number2} = ${number1 * number2}`);
    return number1 * number2;
}
function divide(number1, number2) {
    if (number2 === 0) {
        console.error("Cannot divide by zero");
        return NaN;
    }
    console.log(`Divide: ${number1} / ${number2} = ${number1 / number2}`);
    return number1 / number2;
}

let firstNumber = null;
let secondNumber = null;
let operator = null;
let resultDisplayed = false;

function operate(firstNumber, operator, secondNumber) {
    switch (operator) {
        case '+':
            return add(firstNumber, secondNumber);
        case '-':
            return subtract(firstNumber, secondNumber);
        case '*':
            return multiply(firstNumber, secondNumber);
        case '/':
            return divide(firstNumber, secondNumber);
        default:
            console.error("Unknown operator");
            return NaN;
    }
}

const numbers = document.querySelectorAll(".number");
let display = document.querySelector(".display");
const operators = document.querySelectorAll(".operator");

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        const value = number.textContent;
        if (resultDisplayed) {
            display.textContent = value;
            resultDisplayed = false;
        } else {
            if (display.textContent === "0") {
                display.textContent = value;
            } else {
                display.textContent += value;
            }
        }
    });
});

operators.forEach((op) => {
    op.addEventListener("click", () => {
        if (firstNumber !== null && operator && !resultDisplayed) {
            console.log(display.textContent);
            secondNumber = parseFloat(display.textContent);
            console.log(`Operator Click: firstNumber=${firstNumber}, operator=${operator}, secondNumber=${secondNumber}`);
            const result = operate(firstNumber, operator, secondNumber);
            display.textContent = result;
            firstNumber = result;
            operator = op.textContent;
            resultDisplayed = true;
        } else {
            console.log(display.textContent);
            firstNumber = parseFloat(display.textContent);
            operator = op.textContent;
            display.textContent = "0";
            console.log(`Set First Number and Operator: firstNumber=${firstNumber}, operator=${operator}`);
        }
    });
});

const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
    if (firstNumber !== null && operator) {
        secondNumber = parseFloat(display.textContent);
        console.log(`Equal Click: firstNumber=${firstNumber}, operator=${operator}, secondNumber=${secondNumber}`);
        const finalValue = operate(firstNumber, operator, secondNumber);
        display.textContent = finalValue;
        firstNumber = parseFloat(finalValue);
        secondNumber = null;
        operator = null;
        resultDisplayed = true;
    }
});
const clear=document.querySelector(".clear");
clear.addEventListener("click",()=>{
    location.reload();
});

