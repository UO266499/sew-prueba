let map;

function initMap() {
  map = new google.maps.Map(document.getElementsByTagName("section")[0], {
    center: { lat: 43.5549531, lng: -5.9216461 },
    zoom: 15,
  });
  new google.maps.Marker({position:{ lat: 43.5549531, lng: -5.9216461 },map:map});
}

window.initMap = initMap;
