class Mostrar{
    constructor(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.verPosicion.bind(this));
          }
          this.miLat = 0;
          this.miLon = 0;
    }

    entrarCompleta() {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
        } 
      }
    
    salirCompleta(){
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }
    }

    verPosicion(posicion){
        this.miLat = Number(posicion.coords.latitude);
        this.miLon = Number(posicion.coords.longitude);
    }

    calcularDistancia(lat, lon){
        const R = 6371e3; // metres
        const φ1 = lat * Math.PI/180; // φ, λ in radians
        const φ2 = this.miLat * Math.PI/180;
        const Δφ = (this.miLat-lat) * Math.PI/180;
        const Δλ = (this.miLon-lon) * Math.PI/180;

        const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ/2) * Math.sin(Δλ/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        const d = R * c/1000; // in metres
        return Math.round(d);
    }
    
    leerArchivo(files){
        var lista = [];
        var residencia = [];
        var archivo = files[0];
        
        var opciones = {
            zoom: 5,
            center: {lat: 16, lng: 36},
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        
        

        var map = new google.maps.Map(document.getElementsByTagName("article")[0], opciones);

        var reader = new FileReader();
        var _this = this;
        reader.onload = function (evento) {
            var result = reader.result;
            $('name',result).each(function (index){
                residencia.push($( this ).text());
            });
            $('coordinates',result).each(function (index){
                var numeros = $( this ).text().split(",");
                lista.push(Number(numeros[0]));
                lista.push(Number(numeros[1]));
                lista.push(Number(numeros[2]));
            });

            var counter = 0;
            for (let index = 0; index < residencia.length; index++) {

                var lati = lista[counter++];
                var longi = lista[counter++];
                var marker = new google.maps.Marker({
                    position: {
                      lat: lati,
                      lng: longi
                    },
                    map: map,
                    title: residencia[index] + " a " + _this.calcularDistancia(lati, longi) + " km.",
                  });
                  counter++;
            }

            var marker = new google.maps.Marker({
                position: {
                  lat: Number(_this.miLat),
                  lng: Number(_this.miLon)
                },
                map: map,
                title: "Ubicación actual",
              });
        }
        reader.readAsText(archivo);

    }

}
var mostrar = new Mostrar();
