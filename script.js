const display = document.querySelector('.display');
const decimal = document.querySelector('#dot');
const numberButtons = document.querySelectorAll('.numbers');
const operatorButtons = document.querySelectorAll('.operator');
const clear = document.querySelector('#clear');
const allClear = document.querySelector('#all-clear');
const equal = document.querySelector("#equal");

const add = (num1, num2) => parseFloat(num1 + num2);
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
let result;
let prevNumber="";
let nextNumber ="";
let currentOperator ="";
let equalClicked= false;

numberButtons.forEach(button => {
    button.addEventListener("click", (e)=>{
        const number = e.target.value;
        
        if (equalClicked === true){
        prevNumber = number;
        display.innerText = prevNumber;
        nextNumber ="";
        currentOperator ="";
        equalClicked = false;
        return;
    } 
    
    if(currentOperator === ""){
        prevNumber += number;
        display.innerText = prevNumber;
    }else{
        nextNumber += number;
        display.innerText = nextNumber;
    }        
    });
});

operatorButtons.forEach( operatorBtn =>{
    operatorBtn.addEventListener("click", (e) =>{
        let opButtonClicked = e.target.value;
        if (nextNumber !== ""){
            operate(opButtonClicked,prevNumber,nextNumber);
        }else if (nextNumber === "") {
            currentOperator = opButtonClicked;
            console.log(currentOperator);
        }
        equalClicked =false;
    })
});

equal.addEventListener("click",(e) =>{
   if(prevNumber !== "" && currentOperator !== "" && nextNumber !== ""){
    result = operate(currentOperator,prevNumber,nextNumber);
    display.innerText = result;
    prevNumber = result;
    nextNumber ="";
    currentOperator ="";
    equalClicked =true;
   } 

});



