(function () {
    "use strict";
/////////////////////////////////////////////////
////// ITERATION THROUGH ARRAYS CHALLENGE ///////
/////////////////////////////////////////////////

    ////////////////////////////// CREATED ARRAY WITH FOUR NAMES.
    var names = ["Rick", "Morty", "Beth", "Jerry"];

    // CONSOLE LOGGING THE LENGTH OR NUMBER OF ELEMENTS IN MY ARRAY.
    console.log(names.length);

    // CREATE FUNCTION LOGGING EACH ELEMENT IN MY ARRAY.
    names.forEach(function (e, i, a) {

        console.log(e); // REPRESENTS ELEMENT.

        console.log(i); // REPRESENTS THE INDEX NUMBER OF AN ELEMENT.

        console.log(a); // REPRESENTS THE ARRAY ITSELF.

    })
})();