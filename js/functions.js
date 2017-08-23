//////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// FUNCTION EXERCISE ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

"use strict";
// Don't modify the following line, it generates a random number     between 1 and
// 100 and stores it in a variable named random
var random = Math.floor((Math.random() * 100) + 1);

(function () {
    ///////////////////// SAY HELLO FUNCTION.
    function sayHello(name) {
        return "Hello, " + name;
    }

    ////////////////////// CALLING FUNCTION AND ASSIGNING TO A VARIABLE.
    var myName = "Anderson";
    var helloMessage = sayHello(myName);

    console.log(helloMessage);

    /////////////////////// IS ODD FUNCTION.
    var random = Math.floor((Math.random() * 100) + 1);

    function isOdd(number) {
        var log = (number % 2 !== 0) ? "The number " + number + " is odd" : "The number " + number + " is not odd";
        return log;
    }

    ///////////////////////// CALLING IS ODD FUNCTION.

    console.log(isOdd(random));

    //////////////////////// TIP CALCULATING FUNCTION.
    function calculateTip(tip, bill) {
        var total = (bill * tip) / 100;

        return total;
    }

    /////////////////////// ASK FOR CHECK FUNCTION.
    function askForCheck() {
        var billTotal = prompt("Enter bill total");

        var tipTotal = prompt("Enter the percentage you wish to tip");

        var checkout = calculateTip(tipTotal, billTotal);

        console.log("Your total is $" + billTotal + " and you should tip $" + checkout + " in order to tip %" + tipTotal + " of the total amount");
    }

    /////////////////////// CALLING THE ASK FOR CHECK FUNCTION.
    var leavingThisJoint = askForCheck();

})();
