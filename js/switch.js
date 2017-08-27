"use strict";

//////////////////////////// ARRAY OF COLORS.
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

/////////////////////////// VARIABLE COLOR WITH RANDOM NUMBER ASSIGNED TO IT.
var color = colors[Math.floor(Math.random() * colors.length)];

/////////////////////////// SWITCH STATEMENT COVERING COLORS.
switch (color) {

    case "red":

        console.log("red is the color of blood");

        break;

    case "orange":

        console.log("orange is the color of oranges");

        break;

    case "yellow":

        console.log("yellow is the color of the sun");

        break;

    case "green":

        console.log("green is the color of grass");

        break;

    case "blue":

        console.log("blue is the color of the sky");

        break;

    default:

        console.log("I do not know anything by that color.");

}

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// DISCOUNT EXERCISE ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

//////////////////////////// VARIABLES USED.
var cameron = 180;

var ryan = 250;

var ryanTotal = ryan - (ryan / 10);

var george = 320;

var georgeTotal = george - (george / 10);

var costumer = ryan;

//////////////////////////// SWITCH OPERATION.
switch (costumer) {

    case cameron:

        console.log("Mr. Cameron, your total is " + cameron);

        break;

    case ryan:

        console.log("Mr. Ryan, your total is " + ryanTotal);

        break;

    case george:

        console.log("Mr. George, your total is " + georgeTotal);

        break;

    default:

        console.log('no value');
}

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// COIN TOSS EXERCISE //////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

///////////////////// VARIABLE COIN TOSS WITH RANDOM NUMBER ASSIGNED TO IT.
var coinToss = Math.floor(Math.random() * 2) + 1;

var decision;

///////////////////// TERNARY OPERATION WITH ONE ALTERNATIVE.
(coinToss === 1) ? decision = "Buy car" : decision = "Buy house";

console.log(decision);

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// LUCKY NUMBER EXERCISE ///////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

///////////////////// VARIABLE LUCK NUMBER WITH RANDOM NUMBER ASSIGNED TO IT.
var luckyNumer = Math.floor(Math.random() * 6) + 1;

///////////////////// SWITCH STATEMENT FOR EACH CASE SCENARIO.
switch (luckyNumer) {

    case 0:

        console.log("no discount");

        break;

    case 1:

        console.log("10%");

        break;

    case 2:

        console.log("25%");

        break;

    case 3:

        console.log("30%");

        break;

    case 4:

        console.log("50%");

        break;

    case 5:

        console.log("all free");

        break;

    case 6:

        console.log("$60 receipt");

        break;
}

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////// NUMBER OPERATION EXERCISE ///////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

//////////////////////// USER CONFIRMATION TO START OPERATION.
var confirmation = confirm("would you like to enter a number?");

/////////////////////// LOGICAL STATEMENT FOR EACH CASE SCENARIO.
if (confirmation) {

    var userNum = prompt("enter a number"); ////////// USER INPUT USED IN LOGICAL OPERATION INSIDE ARGUMENT AREA.

    if (userNum % 2 === 0 && userNum >= 0) {

        alert("the number is even");

        alert(userNum + " plus 100 is " + (parseInt(userNum) + 100));

        alert("the number is positive");

    } else if (userNum % 2 === 0 && userNum < 0) {

        alert("the number is even");

        alert(userNum + " plus 100 is " + (parseInt(userNum) + 100));

        alert("the number is negative");

    } else if (userNum % 2 !== 0 && userNum < 0) {

        alert("the number is odd");

        alert(userNum + " plus 100 is " + (parseInt(userNum) + 100));

        alert("the number is negative");

    } else if (userNum % 2 !== 0 && userNum >= 0) {

        alert("the number odd");

        alert(userNum + " plus 100 is " + (parseInt(userNum) + 100));

        alert("the number is positive");

    } else {

        alert("This is not a number.");
    }

} else {

    alert("Have a nice day!");
}


