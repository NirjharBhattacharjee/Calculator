const display = document.querySelector('.display');
const decimal = document.querySelector('#dot');
const numberButtons = document.querySelectorAll('.numbers');
const operatorButtons = document.querySelectorAll('.operator');
const clear = document.querySelector('#clear');
const allClear = document.querySelector('#all-clear');
const equal = document.querySelector("#equal");
const squareRoot = document.querySelector('#sqrt');

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1 / num2;
const power = (num1,num2) => num1 ** num2; 
const sqRoot =(num1) => Math.sqrt(num1);


// this function operates with 2 operands 
function operate(operator, operand1, operand2){
    let number1 =  Number(operand1);
    let number2 = Number(operand2);

    if (operator === '+') {
        return add(number1,number2);
    }
    else if (operator === '-') {
        return subtract(number1,number2 );
    } 
    else if (operator === '*') {
        return multiply(number1,number2);
    }
    else if(operator ==='/'){
        return division(number1,number2);
    }
    else if(operator ==='^'){
        return power(number1,number2);
    }
}
let result="";
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
    prevNumber = String(result);
    console.log(`result is ${typeof(prevNumber)}`);
    console.log(prevNumber);
    nextNumber ="";
    currentOperator ="";
    equalClicked =true;
   } 
});

allClear.addEventListener("click", (e) =>{
    prevNumber ="";
    nextNumber = "";
    currentOperator ="";
    equalClicked = false;
    display.innerText = "";
});

squareRoot.addEventListener("click",(e) =>{
    if(prevNumber !==""){
        result = sqRoot(prevNumber);
        prevNumber = String(result);
        display.innerText = result;
    }
});
clear.addEventListener("click",(e) =>{
    console.log("clicked")
    if(currentOperator ==="" ){
        console.log(typeof(prevNumber));
        prevNumber = prevNumber.slice(0,-1);
        display.innerText = prevNumber;
    }else if (currentOperator !=="") {
        console.log(nextNumber);
        nextNumber = nextNumber.slice(0,-1);
        display.innerText = nextNumber;
    }
});

const decimalExistPrev = prevNumber.includes(".");
const decimalExistNext = nextNumber.includes(".");

decimal.addEventListener("click",(e)=>{
    
    if(decimalExistPrev === false && currentOperator ===""){
        console.log("clicked")
        prevNumber = prevNumber + ".";
        console.log(prevNumber);
        display.innerText = prevNumber;
    }else if(decimalExistNext === false && currentOperator !==""){
        nextNumber = nextNumber +".";
        display.innerText = nextNumber;
    }
});