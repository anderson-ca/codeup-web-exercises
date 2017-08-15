"use strict";

// Don't change the next two lines!
// These creates two variables for you:
//     one with the colors of the rainbow
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'gray'];
var color = colors[Math.floor(Math.random()*colors.length)];

var favorite = 'gray'; // TODO: change this to your favorite color from the list

// TODO: Create a block of if/else statements to check for every color except indigo and violet.

if (color === "red") {
    console.log('red is the color of lava');
} else if (color === "orange") {
    document.write('red is the color of lava');
} else if (color === "yellow") {
    console.log('yellow is the color of the sun');
} else if (color === "green") {
    console.log('green is the color of grass');
} else if (color === "blue") {
    console.log('blue is the color of the ocean');
} else if (color === "gray") {
    console.log('gray is the color of metal');
} else {
    console.log('I do not know anything by that color.');
}

// TODO: When a color is encountered log a message that tells the color, and an object of that color.
//       Example: Blue is the color of the sky.

// TODO: Have a final else that will catch indigo and violet.
// TODO: In the else, log: I do not know anything by that color.

// TODO: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.

(favorite === color)?console.log("That's my favorite color"):console.log("That's not my favorite color");



/********************************************************************/
/********************************************************************/
/********************************************************************/




var cameron = 180;

var ryan = 250;

var ryanTotal =  ryan - (ryan /10);

var george = 320;

var georgeTotal =  george - (george /10);

var costumer = ryan;


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



/********************************************************************/
/********************************************************************/
/********************************************************************/

var coinToss = Math.floor(Math.random() * 2) + 1;


(coinToss === 1)?console.log("Buy car"):console.log("Buy house");


/********************************************************************/
/********************************************************************/
/********************************************************************/

var luckyNumer = Math.floor(Math.random() * 6) + 1;


switch (luckyNumer) {
    case 0:
        console.log("no discount");
    break;
    case 1:
        console.log("10%")
    break;
    case 2:
        console.log("25%")
        break;
    case 3:
        console.log("30%")
        break;
    case 4:
        console.log("50%")
        break;
    case 5:
        console.log("all free")
        break;
    case 6:
        console.log("$60 receipt")
        break;
}


/********************************************************************/
/********************************************************************/
/********************************************************************/

var confirmation = confirm("would you like to enter a number?")

if (confirmation) {
    var userNum = prompt("enter a number");
}


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
    lert("the number is negative");
} else if (userNum % 2 !== 0 && userNum >= 0) {
    alert("the number odd");
    alert(userNum + " plus 100 is " + (parseInt(userNum) + 100));
    alert("the number is positive");
}
























