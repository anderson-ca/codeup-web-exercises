////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// EXERCISE DEMONSTRATING OBJECTS //////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
(function () {
    "use strict";

    /**
     *
     * Create person object, store it in a variable named person
     */
        ////////////////////////////////////////
    var person = {};

    /**
     *
     * Create firstName and lastName properties in your person object, and
     * assign your name to them
     */
    ////////////////////////////////////////
    person.firstName = "Anderson";
    person.lastName = "Cardoso";

    /**
     *
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * person.sayHello() // returns "Hello from Rick Sanchez!"
     */
    ////////////////////////////////////////
    person.sayHello = function () {
        console.log("Hello from " + person.firstName + " " + person.lastName);
    };
    ////////////////////////////////////////
    var greeting = person.sayHello();
    ////////////////////////////////////////
    console.log(greeting);
    /**
     *
     * HEB has an offer for the shoppers that buy products amounting to more
     * than $200. Write a JS program, using conditionals, that logs to the
     * browser, how much does Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.

     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
        //////////////////////////////////////////////////////////////////////
        /////////////////////// AN ARRAY OF OBJECTS //////////////////////////
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


    // log out the books array
    console.log(books);
    /////////////////////////////////////////////
    books.forEach(function (book, index) {
        console.log("Book #" + (index + 1));
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
        console.log("---");
    })

})();