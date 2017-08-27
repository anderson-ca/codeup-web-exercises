"use strict";

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// RANDOM COLOR EXERCISE ///////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////

//////////////////////////// ARRAY OF COLORS.
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'gray'];

/////////////////////////// VARIABLE COLOR WITH RANDOM NUMBER ASSIGNED TO IT.
var color = colors[Math.floor(Math.random() * colors.length)];

var favorite = 'gray'; //// ASSIGNED MY FAVORITE COLOR TO VARIABLE FAVORITE.

////////////////////////// BLOCK OF IF-ELSE STATEMENTS TO CHECK EVERY COLOR EXCEPT INDIGO AND VIOLET.
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

//////////////////////// TERNARY OPERATOR CONSOLE LOGGING WHATEVER COLOR IS CURRENTLY ASSIGNED TO FAVORITE.
(favorite === color) ? console.log("That's my favorite color") : console.log("That's not my favorite color");

























