var myCenter = new google.maps.LatLng(28.9489, -81.3403);

function initialize() {
    var mapProp = {
        center: myCenter,
        zoom: 14,
        scrollwheel: false,
        draggable: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    var marker = new google.maps.Marker({
        position: myCenter,
    });

    marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);