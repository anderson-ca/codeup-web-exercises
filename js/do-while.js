"use strict";


var allCones = Math.floor(Math.random() * (100 - 50) + 50);
var cones;



do {

    cones = Math.floor(Math.random() * 5) + 1;

    allCones = allCones - cones;

    if (allCones === 0) {

        console.log("cannot sell you " + cones + " cones, I only have " + allCones);
        break;

    } else if (allCones < 0) {

        console.log("cannot sell you " + cones + " cones, I don't have any left.");
        break;

    } else {

        console.log(allCones + " cones sold.");
    }

} while (allCones >= 0);

console.log("yay! sold them all");


