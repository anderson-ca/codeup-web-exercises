"use strict";


var allCones = Math.floor(Math.random() * (100 - 50) + 50);
var cones;



do {

    cones = Math.floor(Math.random() * 5) + 1;

    allCones = allCones - cones;

    if (allCones < 0) {
        break
    } else {

        console.log(allCones);
    }

} while (allCones >= 0);

console.log("yay! sold them all");


