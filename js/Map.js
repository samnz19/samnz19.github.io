var map;

$(document).ready(function () {
    var ajax_call = function () {
        // $.ajax({
        //     type: "GET",
        //     //crossDomain: true,
        //     //I like how you have created and consumed an API in one project.
        //     url: "http://api.open-notify.org/iss-now.json",
        //     success: function (data) {
        //         console.log(data.Latitude, data.Longitude);
        //         addMarker(data.Latitude, data.Longitude);
        //     },
        //     error: function () {
        //         console.log("Error");
        //     }
        // });
     $.getJSON('http://api.open-notify.org/iss-now.json?callback=?', function(data) {
        var lat = data['iss_position']['latitude'];
        var lon = data['iss_position']['longitude'];
        addMarker(lat, lon);
    });
 }
    //Loooooove this
    setInterval(ajax_call, 5000);
    
});

function initialize() {

    var mapOptions = {
        center: new google.maps.LatLng(0, 0),
        zoom: 2,
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.BOTTOM_LEFT
        },
        panControl: true,
        scaleControl: true,
        streetViewControl: true,
        rotateControl: true,
        overviewMapControl: true,
        overviewMapControlOptions: {
            opened: true
        }

    };
    map = new google.maps.Map(document.getElementById("mapDiv"), mapOptions);
    addButtons(map);
 
}

function addButtons(map) {
    document.getElementById('btnTerrain').addEventListener('click', function () {
        map.setMapTypeId(google.maps.MapTypeId.TERRAIN);
    });
    document.getElementById('btnRoadmap').addEventListener('click', function () {
        map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
    });
    document.getElementById('btnSatellite').addEventListener('click', function () {
        map.setMapTypeId(google.maps.MapTypeId.SATELLITE);
    });
    document.getElementById('btnHybrid').addEventListener('click', function () {
        map.setMapTypeId(google.maps.MapTypeId.HYBRID);
    });
}
google.maps.event.addDomListener(window, "load", initialize);

function addMarker(lat, long) {
    var myLatlng = new google.maps.LatLng(lat, long);

    var image = 'Img/delete-small.gif';
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: image
});
    marker.setMap(map);
}
