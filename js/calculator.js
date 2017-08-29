"use strict";

var box = document.getElementById("display");
var x;

function toScreen(x) {
    box.value += x;
    if (x === 'c') {
        box.value = '';
    }
}

function equalTo() {
    x = box.value;
    x = eval(x);
    box.value = x;
}









