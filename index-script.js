var fOperand;
var sOperand;
var operator;

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
