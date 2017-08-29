"use strict";







/////////////////////////////// VARIABLE DECLARATIONS.
var container = document.getElementById("display");

var container2 = document.getElementById("display2");

var container3 = document.getElementById("display3");

var numb;

var empty = "";

////////////////////////////// LOGICAL OPERATION DISPLAYING NUMBERS AND OPERATORS.
function toScreen(numb) {
    if (numb === "+" || numb === "-" || numb === "*" || numb === "/") {
        container2.value = numb;
    } else if (container2.value !== empty) {
        container3.value += numb;
    } else {
        container.value += numb;
    }

////////////////////////////// CLEAR EVERYTHING.
    if (numb === 'c') {
        container.value = '';
        container2.value = '';
        container3.value = '';
    }
}

///////////////////////////// DISPLAY FINAL RESULT.
function equalTo() {
    numb = container.value;
    numb = eval(numb + container2.value + container3.value);
    container.value = numb;
    container3.value = '';
    container2.value = '';
}



