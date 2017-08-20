"use strict";
//////////////////////////////////////////////////////////////////////
///////////// SWITCH STATEMENT SOLUTION TO CHALLENGE /////////////////
//////////////////////////////////////////////////////////////////////

var cameron = 180;

var ryan = 250;

var ryanTotal = ryan - (ryan / 10);

var george = 320;

var georgeTotal = george - (george / 10);

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
























