function add(number1, number2) {
    return number1 + number2;
}
function subtract(number1, number2) {
    return number1 - number2;
}
function multiply(number1, number2) {
    return number1 * number2;
}
function divide(number1, number2) {
    if (number2 === 0) {
        return NaN;
    }
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
            secondNumber = parseFloat(display.textContent);
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
        }
    });
});

const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
    if (firstNumber !== null && operator) {
        secondNumber = parseFloat(display.textContent);
        const finalValue = operate(firstNumber, operator, secondNumber);
        display.textContent = finalValue.toFixed(2);
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
//Backspace for deleting a single character
window.addEventListener("keydown",checkKeyPressed,false);
function checkKeyPressed(e){
    if(e.keyCode===8){
        let text=display.textContent;
        text=text.slice(0,text.length-1);
        display.textContent=text;
    }
}
//Checks for no entering of more than 1 decimal point
const dot=document.querySelector(".dot");
dot.addEventListener("click",() =>{
    let text=display.textContent;
    if(text.split("").includes(".")){
        removeEventListener("click");
    }
    else{
    text+=".";
    display.textContent=text;
    }
});