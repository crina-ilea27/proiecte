const display= document.querySelector(".c1 output");
const btns= document.querySelectorAll(".c1 button");

let expression, operand;
let isNewOperation = false;
document.addEventListener("DOMContentLoaded", resetValues);

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(btn.matches("[data-number]")){
           appendNumber(btn.textContent);
        } else
        if(btn.matches("[data-operator]")){
            setOperator(btn.textContent);
        } else
        if(btn.matches("[data-equals]")){
            expression.operandTwo !== "" && calculate();
        } else
        if(btn.matches("[data-clear]")){
            clearDisplay();
        }

    });
});
 function clearDisplay() {
    resetValues();
    updateDispaly("0");
 }

function updateDispaly(text) {
   const output = text.toString();
   if(output.startsWith(".")) {
    display.textContent = "0" + text;
   } else if (output.includes(".")) {
    const [integer, decimal] = output.split(".");
    display.textContent = `${formatNumber(integer)}.${decimal}`;
    } else {
        display.textContent = formatNumber(output);
    }
}

function formatNumber(number) {
    return Number(number).toLocaleString("en", {
        maximumFractionDigits: 10,
    })
}

function appendNumber(number){
    if(number === "." && expression[operand].includes(".") ) return;
    
    if(isNewOperation) {
      expression[operand] = number;
      isNewOperation = false;
    } else {
        expression[operand]+=number;
    }
    
    updateDispaly(expression[operand]);
}

function setOperator(operator) {
   if(expression.operandTwo){
    calculate();
   }
   expression.operator = operator;
   operand = "operandTwo";
}

function calculate() {
    const operandOne = Number(expression.operandOne);
    const operandTwo = Number(expression.operandTwo);

    let computation;

    switch(expression.operator) {
     case '+':
        computation = operandOne + operandTwo;
        break;
     case '-':
        computation = operandOne - operandTwo;
        break;
     case '*':
        computation = operandOne * operandTwo;
         break;
     case '÷':
        computation = operandOne / operandTwo;
        break;
    default:
        break;
    }

     updateDispaly(computation);
     resetValues();
    expression.operandOne = computation.toString();
     isNewOperation = true;
}

  function resetValues() {
    expression = {
        operator: null,
        operandOne: '',
        operandTwo: ''
    }
     operand= "operandOne";
  }