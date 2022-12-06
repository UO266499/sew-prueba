let map;

function initMap() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(verPosicion.bind(this));
  }
}

function verPosicion(posicion){
  var latitud = posicion.coords.latitude;
  var longitud = posicion.coords.longitude;
  map = new google.maps.Map(document.getElementsByTagName("section")[0], {
    center: { lat: latitud, lng: longitud },
    zoom: 15,
  });
  
  new google.maps.Marker({
    position: {
      lat: latitud,
      lng: longitud
    },
    map: map
  });
  
}


window.initMap = initMap;