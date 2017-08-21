////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////// EXERCISE DEMONSTRATING THE USE OF SPLIT AND JOIN ////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    // TODO: Convert planetsString to an array, save it to planetsArray.
    planetsArray = planetsString.split("|");

    console.log(planetsArray);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    planetsArray.join("<br>");
    //       Why might this be useful?
    console.log(planetsArray);
    // Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.
    var bonus = ["<ul>",
                        "<li>", "Mercury", "</li>",
                        "<li>", "Venus", "</li>",
                        "<li>", "Earth", "</li>",
                        "<li>", "Mars", "</li>",
                        "<li>", "Jupiter", "</li>",
                        "<li>", "Saturn", "</li>",
                        "<li>", "Uranus", "</li>",
                        "<li>", "Neptune", "</li>",
                "</ul>"];

    console.log(bonus);
})();