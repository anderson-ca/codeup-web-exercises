(function () {
    "use strict";

    //////////////////////////////// CREATE A CIRCLE OBJECT
    var circle = {

        radius: 3, // RADIUS ATTRIBUTE.

        /////////////////////////// METHOD USED TO CALCULATE AREA.
        getArea: function () {

            var pi = Math.PI;

            var area = pi * Math.pow(this.radius, 2);

            return area;
        },

        ////////////////////////// METHOD USED TO ROUND VALUES.
        logInfo: function (doRounding) {

            if (doRounding) {

                console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.ceil(this.getArea()));

            } else {

                console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea());

            }

        }
    };

    // CONSOLE LOG THE OUTPUT OF THE METHOD CALL.
    var areaOut = circle.getArea();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    circle.radius = 5;

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
})();