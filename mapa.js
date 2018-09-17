
function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(44.736623,21.405770),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
