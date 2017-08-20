(function () {
    "use strict";
/////////////////////////////////////////////////
////// ITERATION THROUGH ARRAYS CHALLENGE ///////
/////////////////////////////////////////////////

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
    var names = ["Rick", "Morty", "Beth", "Jerry"];
    // TODO: Create a log statement that will log the number of elements in the names array.
    console.log(names.length);
    // TODO: Create log statements that will print each of the names array elements individually.
    names.forEach(function (e, i, a) {
        console.log(e);
        console.log(i);
        console.log(a);
    })
})();