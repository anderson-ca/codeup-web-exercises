////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// EXERCISE DEMONSTRATING ARRAY MANIPULATION ////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
(function () {
    "use strict";

    // TODO: Create an array holding the names of the eight planets in our solar system.
    var planets = ["Terra", "Mars", "Pluto", "Jupiter", "Uranus", "Mercury", "Venus", "Saturn"];

    // function for logging the planets array
    function logPlanets() {
        console.log("Here is the list of planets:");
        console.log(planets);
        console.log("---- ---- ---- ----");
    }

    logPlanets();

    console.log('Adding "The Sun" to the beginning of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    ///////////////////////////
    planets.unshift("Sun");
    logPlanets();

    console.log('Adding "Pluto" to the end of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    ///////////////////////////
    planets.push("Pluto");
    logPlanets();

    console.log('Removing "The Sun" from the beginning of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    ///////////////////////////
    planets.shift();
    logPlanets();

    console.log('Removing "Pluto" from the end of the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    //////////////////////////
    planets.pop();
    logPlanets();

    console.log('Finding and logging the index of "Earth" in the planets array.');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    /////////////////////////
    var indexTerra = planets.indexOf("Terra");
    console.log(indexTerra);

    console.log('Using splice to remove the planet after "Earth".');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    /////////////////////////
    planets.splice(indexTerra + 1, 1);
    logPlanets();

    console.log('Using splice to add back the planet after "Earth".');
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    /////////////////////////
    planets.splice(indexTerra + 1, 0, "Mars");
    logPlanets();

    console.log("Reversing the order of the planets array.");
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
    planets.reverse();
    logPlanets();

    console.log("Sorting the planets array.");
    // TODO: Read the console.log() statement above. Write code to perform the step it describes.
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