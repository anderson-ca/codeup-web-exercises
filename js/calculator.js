"use strict";




/////////////////////////////////////////////////////////////////
////////////////// CALCULATOR FUNCTIONALITY /////////////////////
/////////////////////////////////////////////////////////////////

//////////////////////////////////////////////// CLEAR BUTTON

var clear = document.getElementById("c");





//////////////////////////////////////////////// BUTTONS WITH NUMBERS.
var test = document.getElementById("test");

var button1 = document.getElementById("1");

var button2 = document.getElementById("2");

var button3 = document.getElementById("3");

var button4 = document.getElementById("4");

var button5 = document.getElementById("5");

var button6 = document.getElementById("6");

var button7 = document.getElementById("7");

var button8 = document.getElementById("8");

var button9 = document.getElementById("9");

var button0 = document.getElementById("0");



////////////////////////////////////////////////// CLEAR EVERYTHING.
clear.addEventListener("click", function () {
    test.innerText = "";
});




///////////////////////////////////////////////// NUMBER BUTTON EVENTS.
button1.addEventListener("click", function () {
    test.innerText += "1";
});

button2.addEventListener("click", function () {
    test.innerText += "2";
});

button3.addEventListener("click", function () {
    test.innerText += "3";
});

button4.addEventListener("click", function () {
    test.innerText += "4";
});

button5.addEventListener("click", function () {
    test.innerText += "5";
});

button6.addEventListener("click", function () {
    test.innerText += "6";
});

button7.addEventListener("click", function () {
    test.innerText += "7";
});

button8.addEventListener("click", function () {
    test.innerText += "8";
});

button9.addEventListener("click", function () {
    test.innerText += "9";
});

button0.addEventListener("click", function () {
    test.innerText += "0";
});






















