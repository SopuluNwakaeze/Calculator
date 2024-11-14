var fOperand;
var sOperand;
var operator = "";
var length;
var length2;
const numPadButtons = document.querySelectorAll(".numpad-button");
const clearButton = document.querySelector(".clear-button");
const display = document.querySelector(".screen-content");
const numbersButtons = document.querySelectorAll("#number");
const operatorButtons = document.querySelectorAll("#operator");
const equalsButton = document.querySelector("#equals");
const decimalButton = document.querySelector("#decimal");
const buffer1 = [];
const buffer2 = [];


function add(x,y){
    return x + y;
}

function subtract(x,y){
    console.log("hello")
    console.log(x)
    console.log(y)

    return x - y;
}

function multiply(x,y){
    return x * y;
}

function divide(x,y){
    return x / y;
}

function operate(operator, x, y){
    switch (operator){
        case "+":
            return add(x,y);

        case "-":
            return subtract(x,y);

        case "x":
            return multiply(x,y);

        case "/":
            return divide(x,y);    
    }
}
console.log(operate("-",2,3))

equalsButton.addEventListener("click", function(e){
    length = buffer1.length;
    length2 = buffer2.length;
    fOperand = Number(buffer1.toString().replace(/,/g,""));
    sOperand = Number(buffer2.toString().replace(/,/g,""));
    console.log(fOperand)
    console.log(sOperand)
    console.log(operator)


    for (var i = 0; i < length; i++){
        buffer1.shift();  
    }
    console.log(operate(operator,fOperand,sOperand))
    buffer1.push(operate(operator,fOperand,sOperand));
    for (var i = 0; i < length2; i++){
        buffer2.shift();  
    }
        display.textContent = buffer1.toString();
        console.log("hello")
})

operatorButtons.forEach((button) => button.addEventListener("click", function(e){
    operator = button.textContent;
}))

numbersButtons.forEach((button) => button.addEventListener("click", function(e){
    if(operator === ""){
        if(Number(buffer1[0]) === 0){
            buffer1.pop();
        }
        if(buffer1.length >= 9){
            console.log("full");
        }
        else{
            buffer1.push(button.textContent);
        }
        display.textContent = buffer1.toString().replace(/,/g,"");
        console.log(buffer1);
    }
    // display.textContent = buffer1.toString().replace(/,/,"");

    if(operator !== ""){
        if(buffer2.length >= 9){
            console.log("full");
        }
        else{
            buffer2.push(button.textContent);
        }
        display.textContent = Number(buffer2.toString().replace(/,/g,""));
    }
}))

// numPadButtons.forEach((button) => button.addEventListener("click",function(e){  
//     buffer1.push(button.textContent);
//     display.textContent = buffer1.toString();

// }))

clearButton.addEventListener("click", function(e){
    length = buffer1.length;
    buffer1.push(0)
    for (var i = 0; i < length; i++){
        buffer1.shift();  
    }
        display.textContent = buffer1.toString();
})



