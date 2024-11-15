var fOperand;
var sOperand;
var operator = "";
var length;
var length2;
var isEqualsPressed = false;
const numPadButtons = document.querySelectorAll(".numpad-button");
const clearButton = document.querySelector(".clear-button");
const display = document.querySelector(".screen-content");
const numbersButtons = document.querySelectorAll("#number");
const operatorButtons = document.querySelectorAll("#operator");
const equalsButton = document.querySelector("#equals");
const decimalButton = document.querySelector("#decimal");
const buffer1 = [];
const buffer2 = [];
var isDecimal = false;
var isNegativeBuff1 = false;
var isNegativeBuff2 = false;

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
            return add(x,y);

        case "-":
            return subtract(x,y);

        case "x":
            return multiply(x,y);

        case "/":
            return divide(x,y);    
    }
}

decimalButton.addEventListener("click", function(e){
    if(!isDecimal){
        if(operator === "" && isEqualsPressed === false){
            if(buffer1.length < 1){
                buffer1.push(0);
            }
            if(buffer1[0] === "-"){
                buffer1.push(0);
            }
            
            buffer1.push(decimalButton.textContent);
            display.textContent = buffer1.toString().replace(/,/g,"");
        }
        if(operator === "" && isEqualsPressed === true){
            length = buffer1.length;
            for (var i = 0; i < length; i++){
                buffer1.shift();  
            }
            buffer1.push(0);
            buffer1.push(decimalButton.textContent);
            display.textContent = buffer1.toString().replace(/,/g,"");
            isEqualsPressed = false;
        }
        if(operator !== ""){
            if(buffer2.length < 1){
                buffer2.push(0);
            }
            if(buffer2[0] === "-"){
                buffer2.push(0);
            }
            buffer2.push(decimalButton.textContent);
            display.textContent = buffer2.toString().replace(/,/g,"");
        }
        isDecimal = true;
    }
})

equalsButton.addEventListener("click", function(e){
    length = buffer1.length;
    length2 = buffer2.length;
    fOperand = Number(buffer1.toString().replace(/,/g,""));
    sOperand = Number(buffer2.toString().replace(/,/g,""));

    for (var i = 0; i < length; i++){
        buffer1.shift();  
    }     
    if(buffer2.length < 1 && operator === "" ){
        buffer1.push(fOperand);
        console.log(isNegativeBuff1);
        console.log(isNegativeBuff2);

    }
    if((isNegativeBuff2 === true || buffer2.length < 1) && operator !== ""){
        console.log(buffer1)
        buffer1.push(operate(operator,fOperand,fOperand));
    }
    if(buffer2.length >= 1){
        buffer1.push(operate(operator,fOperand,sOperand));
    }
    for (var i = 0; i <= length2; i++){
        buffer2.shift();  
    }
    display.textContent = buffer1.toString();
    operatorButtons.forEach((button) => button.setAttribute("style", "background-color: darkgrey"));
    operator = "";
    isEqualsPressed = true;
    isDecimal = false;
    isNegativeBuff1 = false;
    isNegativeBuff2 = false;

})

operatorButtons.forEach((button) => button.addEventListener("click", function(e){
    console.log(buffer1[0])
    if(button.textContent === "-" && isNegativeBuff1 === false && operator === "" && (buffer1.length === 0 || (buffer1[0] === 0 && buffer1.length ==1))){
        buffer1.pop();
        buffer1.push(button.textContent);
        isNegativeBuff1 = true;
        console.log("check");
        console.log(buffer1)
    }
    if(isNegativeBuff1 === true && operator === "" && buffer1.length > 1){
        isNegativeBuff1 = false;
    }
    if(button.textContent === "-" && isNegativeBuff2 === false && operator !== "" && (buffer2.length === 0 || (buffer2[0]) === 0)){
        buffer2.pop();
        buffer2.push(button.textContent);
        isNegativeBuff2 = true;
    }
    if(isNegativeBuff2 === true && operator !== "" && buffer2.length > 1){
        isNegativeBuff2 = false;
    }

    if(operator !== "" && buffer2.length === 0){
        operator = button.textContent;
    }
    if(operator !== "" && buffer2.length > 0 && isNegativeBuff2 === false){
        length = buffer1.length;
        length2 = buffer2.length;
        fOperand = Number(buffer1.toString().replace(/,/g,""));
        sOperand = Number(buffer2.toString().replace(/,/g,""));
    
        for (var i = 0; i < length; i++){
            buffer1.shift();  
        }
        console.log(operate(operator,fOperand,sOperand))
        buffer1.push(operate(operator,fOperand,sOperand));
        for (var i = 0; i < length2; i++){
            buffer2.shift();  
        }
            display.textContent = buffer1.toString();
            operator = button.textContent;
            isNegativeBuff2 = false;
            operatorButtons.forEach((button) => button.setAttribute("style", "background-color: darkgrey"))

    }
    if(operator === "" && isNegativeBuff1 === false){
    operator = button.textContent;
    }
    isDecimal = false;
    
    operatorButtons.forEach((button) => button.setAttribute("style", "background-color: darkgrey"))
    button.setAttribute("style", "background-color: darkgreen");
}))



numbersButtons.forEach((button) => button.addEventListener("click", function(e){
    
    if(operator === "" && isEqualsPressed === false){
        if(Number(buffer1[0]) === 0 && buffer1.length === 1){
            buffer1.pop();
        }
        if(buffer1.length >= 9){
            console.log("full");
        }
        else{
            buffer1.push(button.textContent);
        }
        display.textContent = buffer1.toString().replace(/,/g,"");
    }

    if(operator === "" && isEqualsPressed === true){
        length = buffer1.length;
        for (var i = 0; i < length; i++){
            buffer1.shift();  
        }
        buffer1.push(button.textContent);
        display.textContent = buffer1.toString().replace(/,/g,"");
        isEqualsPressed = false;
    }

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

clearButton.addEventListener("click", function(e){
    length = buffer1.length;
    buffer1.push(0)
    for (var i = 0; i < length; i++){
        buffer1.shift();  
    }
    length2 = buffer2.length;
    for (var i = 0; i < length; i++){
        buffer2.shift();  
    }
    operator = "";
    display.textContent = buffer1.toString();
    isDecimal = false;
    isNegativeBuff1 = false;
    isNegativeBuff2 = false;
    isEqualsPressed = false;
    operatorButtons.forEach((button) => button.setAttribute("style", "background-color: darkgrey"))

})



