function iniciarMapVDU(){
    var coord = {lat:-33.6509764 ,lng: -69.1584396};
    var map = new google.maps.Map(document.getElementById('mapVDU'),{
      zoom: 15,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
