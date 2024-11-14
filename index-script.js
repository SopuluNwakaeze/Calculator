var fOperand;
var sOperand;
var operator;
var length;
const numPadButtons = document.querySelectorAll(".numpad-button")
const clearButton = document.querySelector(".clear-button")
const display = document.querySelector(".screen-content")
const buffer1 = [];
const buffer2 = [];


function add(x,y){
    return x + y;
}

function subtract(x,y){
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
            add(x,y);
            break;

        case "-":
            subtract(x,y);
            break;

        case "x":
            multiply(x,y);
            break;

        case "/":
            divide(x,y);
            break;     
    }
}

numPadButtons.forEach((button) => button.addEventListener("click",function(e){  
    buffer1.push(button.textContent);
    display.textContent = buffer1.toString();
    console.log("length on button press:" + buffer1.length);
}))

clearButton.addEventListener("click", function(e){
    length = buffer1.length;
    buffer1.push(0)
    console.log("length after clear press:" + buffer1.length)
    for (var i = 0; i < length; i++){
        console.log(buffer1.shift());  
        console.log("length after" + i + "shift" + buffer1.length)

    }
    
    console.log(buffer1.toString());
    // buffer1.push(0);
    display.textContent = buffer1.toString();
})



