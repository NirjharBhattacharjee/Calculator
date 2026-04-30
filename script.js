const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.numbers');


const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1 / num2;

numberButtons.forEach( numberButton => {
    numberButton.addEventListener("click", (e) => {
    let numValue = e.target.value;
    display.textContent = numValue;
    console.log(numValue);
    });
});