(function () {
    "use strict";
    ////////////////////////////////////////////////////////////////////////////////
    //////////////////////// GENERATING THE GOOGLE MAP. ////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    //SET UP MAP OPTIONS.
    var mapOptions = {

        // SET THE ZOOM LEVEL.
        zoom: 19,

        // THIS OBJECT SETS UP THE CENTER OF THE MAP.
        place: {
            lat: 29.426791,
            lng: -98.489602
        }

    };

    // RENDER THE MAP
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);


    ////////////////////////////////////////////////////////////////////////////////
    //////////////////////// SETTING UP THE GEOCODER. //////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    // ADDRESS VARIABLE.
    var address = "515 S Congress Ave #101, Austin, TX 78704";

    // NEW INSTANCE OF THE GEO CODER OBJ.( INITIALIZING GEO CODER OBJECT )
    var geocoder = new google.maps.Geocoder();

    // GEOCODE THE ADDRESS VARIABLE.
    geocoder.geocode({"address": address}, function (results, status) {

        // CHECK FOR SUCCESSFUL RESULT.
        if (status === google.maps.GeocoderStatus.OK) {

            // RE-CENTER THE MAP OVER THE ADDRESS VARIABLE.
            map.setCenter(results[0].geometry.location);

        } else {


            alert("Geocoding was not successful - STATUS: " + status)

        }

        ////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////// ADDING A MARKER. ///////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////

        var foodPlace = {
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng()
        };

        var marker = new google.maps.Marker({
            position: foodPlace,
            map: map
        });

    });

    ////////////////////////////////////////////////////////////////////////////////
    /////////////////////////// ADDING AN INFO WINDOW. /////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    // Create a new infoWindow object with content
    var infowindow = new google.maps.InfoWindow({
        content: "The best tacos"
    });

    // Open the window using our map and marker
    infowindow.open(map, marker)

})();
