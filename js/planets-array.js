////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// EXERCISE DEMONSTRATING ARRAY MANIPULATION ////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
(function () {

    "use strict";

    ////////////////////////////////// CREATE AN ARRAY WITH EIGHT PLANETS IN THE SOLAR SYSTEM. ( IN ORDER  )
    var planets = ["Mercury", "Venus", "Terra", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

    ///////////////////////////////// FUNCTION LOGGING IN THE PLANETS ARRAY.
    function logPlanets() {

        console.log("Here is the list of planets:");

        console.log(planets);

        console.log("---- ---- ---- ----");

    }

    logPlanets();

    console.log('Adding "The Sun" to the beginning of the planets array.');

    ///////////////////////////
    planets.unshift("Sun");

    logPlanets();

    console.log('Adding "Pluto" to the end of the planets array.');

    ///////////////////////////
    planets.push("Pluto");

    logPlanets();

    console.log('Removing "The Sun" from the beginning of the planets array.');

    ///////////////////////////
    planets.shift();

    logPlanets();

    console.log('Removing "Pluto" from the end of the planets array.');

    //////////////////////////
    planets.pop();

    logPlanets();

    console.log('Finding and logging the index of "Earth" in the planets array.');

    /////////////////////////
    var indexTerra = planets.indexOf("Terra");

    console.log(indexTerra);

    console.log('Using splice to remove the planet after "Earth".');

    /////////////////////////
    planets.splice(indexTerra + 1, 1);

    logPlanets();

    console.log('Using splice to add back the planet after "Earth".');

    /////////////////////////
    planets.splice(indexTerra + 1, 0, "Mars");

    logPlanets();

    console.log("Reversing the order of the planets array.");

    planets.reverse();

    logPlanets();

    console.log("Sorting the planets array.");

    planets.sort();

    logPlanets();

/////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// EXERCISE DEMONSTRATING ARRAY MANIPULATION /////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////


    var test = [[1, 2], [3, 6], [4, 5], [9, 1]];


    function fundIndexWhereSumIs9(array) {

        for (var x = 0; x < test.length; x++) {

            var result = test[x][0] + test[x][1];

            if (result === 9) {

                console.log(x);

            } else {

                console.log(-1);

            }
        }
    }


    var finalTest = fundIndexWhereSumIs9(test);

    console.log(finalTest);


})();