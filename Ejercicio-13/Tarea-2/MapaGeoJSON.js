class Mostrar{
    constructor(){

    }

    leerArchivo(files){
        $("h2").remove();
        $("p").remove();
        var lista = [];
        var residencia = [];
        var archivo = files[0];
        var medialat = 0;
        var medialon = 0;
        var counter = 0;
        var reader = new FileReader();
        
        reader.onload = function (evento) {
            var result = reader.result;
            var json = JSON.parse(result);
            var feat = json.features;
            counter = feat.length;
            
            for (let index = 0; index < feat.length; index++) {
                var coords = feat[index].geometry.coordinates;                ;
                var nombre = feat[index].properties.name;
                
                console.log(Number(coords[0]));
                console.log(Number(coords[1]))
                lista.push(Number(coords[0]));
                lista.push(Number(coords[1]));
                residencia.push(nombre);

                medialat += coords[0];
                medialon += coords[1];
            }
            medialat = medialat / counter;
            medialon = medialon / counter;

            var opciones = {
                zoom: 3,
                center: {lat: medialat, lng: medialon},
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
    
            var map = new google.maps.Map(document.getElementsByTagName("section")[0], opciones);
         
            var cont = 0;
            for (let index = 0; index < residencia.length; index++) {
                
                
                var marker = new google.maps.Marker({
                    position: {
                      lat: lista[cont++],
                      lng: lista[cont++]
                    },
                    map: map,
                    title: residencia[index],
                  });
            }
        }
        reader.readAsText(archivo);

    }
    

}
var mostrar = new Mostrar();
