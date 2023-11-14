//mapas de visitanos.html
function iniciarMapSR(){
    var coord = {lat:-34.5828004 ,lng: -68.42681};
    var map = new google.maps.Map(document.getElementById('mapSR'),{
      zoom: 15,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}

