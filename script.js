const display = document.querySelector('.display');
const decimal = document.querySelector('#dot');
const numberButtons = document.querySelectorAll('.numbers');
const operatorButtons = document.querySelectorAll('operator');
const clear = document.querySelector('#clear');
const allClear = document.querySelector('#all-clear');

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1 / num2;


// this function operates with 2 operands 
function operate(operator, operand1, operand2){
    if (operator === '+') {
        return add(operand1,operand2);
    }
    else if (operator === '-') {
        return subtract(operand1,operand2 );
    } 
    else if (operator === '*') {
        return multiply(operand1,operand2);
    }
    else if(operator ==='/'){
        return division(operand1,operand2)
    }
}

let prevNumber="";

numberButtons.forEach(button => {
    button.addEventListener("click", (e)=>{
        const number = e.target.value;
        prevNumber += number;
        display.innerText = prevNumber;        
    });
});



    



