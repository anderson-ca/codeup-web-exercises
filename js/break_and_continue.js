"use strict";
//////////////////////////////////////////////////////////////////////
///////////////// EXAMPLE OF CONTINUE USAGE  /////////////////////////
//////////////////////////////////////////////////////////////////////


////////////////////////// PROMPT USER FOR INFORMATION. ASSIGN INFO TO VARIABLE.
var userNum = prompt("enter an odd number between 1 and 50");

///////////////////////// USE LOOP TO CHECK VALIDITY OF THE INPUT.
while (userNum % 2 === 0) {

    userNum = prompt("enter an odd number between 1 and 50");

}

console.log("Number to skip is: " + userNum);

///////////////////////// FOR LOOP USE.
for (var i = 0; i <= 50; i++) {

    if (i % 2 === 0 || i === parseInt(userNum)) {

        continue;

    } else {

        console.log("here is and odd number: " + i)
    }
}

