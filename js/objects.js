////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////// EXERCISE DEMONSTRATING OBJECTS IN JS ////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
(function () {
    "use strict";

    //////////////////////////////// CREATED EMPTY OBJECT PERSON.
    var person = {};


    /////////////////////////////// CREATED TWO PROPERTIES ( FIRST NAME / LAST NAME ) INSIDE PERSON OBJECT.
    person.firstName = "Anderson";

    person.lastName = "Cardoso";

    ////////////////////////////// ADDED A SAY HELLO METHOD INSIDE THE PERSON OBJECT. THE METHOD USES THE TWO PREVIOUS CREATED PROPERTIES.
    person.sayHello = function () {

        console.log("Hello from " + person.firstName + " " + person.lastName);

    };

    ///////////////////////////// ASSIGNED THE RESULT OF THE PERSON OBJECT METHOD CALL TO GREETING VARIABLE.
    var greeting = person.sayHello();

    //////////////////////////// CONSOLE LOGGING GREETING VARIABLE.
    console.log(greeting);

    //////////////////////////////////////////////////////////////////////
    /////////////// AN ARRAY OF OBJECTS(SHOPPERS EXERCISE) ///////////////
    //////////////////////////////////////////////////////////////////////
    var shoppers = [

        {name: 'Cameron', amount: 180},

        {name: 'Ryan', amount: 250},

        {name: 'George', amount: 320}

    ];


    //////////////////////////////////////////////////////////////////////
    //////////////////////// FOR EACH LOOP ///////////////////////////////
    //////////////////////////////////////////////////////////////////////
    shoppers.forEach(function (shopper) {

        var discount = shopper.amount * .10;

        if (shopper.amount > 200) {

            console.log(shopper.name + ", you spent " + shopper.amount + ", your total amount after a ten percent discount is " + (shopper.amount - discount));

        } else {

            console.log(shopper.name + ", your total is " + shopper.amount);

        }
    });


    //////////////////////////////////////////////////////////////////////
    ////////////////////////// 2ND CHALLENGE /////////////////////////////
    //////////////////////////////////////////////////////////////////////

    "use strict";

    //////////////////////////// OBJECT ARRAY WITH A TITLE ATTRIBUTE AND A AUTHOR ATTRIBUTE WITH AN OBJECT INSIDE IT.
    var books = [

        {

            title: "In the Mountain of Madness",

            author: {firstName: "H.P", lastName: "Lovecraft"}

        },

        {
            title: "Foundation",

            author: {firstName: "Isac", lastName: "Azimov"}

        },

        {title: "Leviathan", author: {firstName: "Thomas", lastName: "Hobbs"}},

        {
            title: "American Gods",

            author: {firstName: "Neil", lastName: "Gaiman"}

        },

        {
            title: "1984",

            author: {firstName: "George", lastName: "Orwell"}

        }
    ];


    /////////////////////////// CONSOLE LOGGING THE BOOKS ARRAY.
    console.log(books);

    ////////////////////////// FOR EACH LOOP ITERATING THROUGH BOOKS OBJECT.
    books.forEach(function (book, index) {

        console.log("Book #" + (index + 1));

        console.log("Title: " + book.title);

        console.log("Author: " + book.author.firstName + " " + book.author.lastName);

        console.log("---");

    })

})();