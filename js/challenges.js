"use strict";
/////////////////////////////////////////////////////////////////
/////////////// BREAKING CHOCOLATE FUNCTION /////////////////////
/////////////////////////////////////////////////////////////////


var breakChocolate = function (n, m) {
    if (n === 0 || m === 0) {
        return 0;
    } else {
        var result = (n * m) - 1;
        return result;
    }
};


//////////////////////////////////////////////////////////////////
///////////////////// FIZZBUZZ FUNCTION  //////////////////////////
//////////////////////////////////////////////////////////////////


var n = 15;

function fizzBuzzFunc(n) {

    for (var i = 1; i <= n; i++) {
        var change = i.toString();
        switch (true) {
            case (change % 3 === 0 && change % 5 !== 0):
                console.log("Fizz");
                break;
            case (change % 5 === 0 && change % 3 !== 0):
                console.log("Buzz");
                break;
            case (change % 3 === 0 && change % 5 === 0):
                console.log("FizzBuzz");
                break;
            default:
                console.log(change);
        }
    }
}


//////////////////////////////////////////////////////////////////
///////////////////// RECURSIVE FUNCTION  ////////////////////////
//////////////////////////////////////////////////////////////////


function sumDigits(number) {
    if (number.toString().length === 1) {
        return number;
    } else {
        var list = number.toString().split("");
        var sum = 0;
        for (var i = 0; i < list.length; i++) {
            sum = sum += parseInt(list[i]);
        }
        return sum;
    }
}


//////////////////////////////////////////////////////////////////
////////////////////// REVERSING STRINGS /////////////////////////
//////////////////////////////////////////////////////////////////


var user = prompt('please enter your full name');


function reverseStr(string) {
    var newList = string.split('');
    var newList = newList.reverse();
    var newList = newList.join('');

    return newList
}

alert(reverseStr(user));




