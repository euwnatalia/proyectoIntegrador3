//mapas de visitanos.html
function iniciarMap(){
    var coord = {lat:-31.3549249 ,lng: -64.3731489};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
