class Mostrar{
    constructor(){

    }

    leerArchivo(files){
        $("h2").remove();
        $("p").remove();
        var lista = [];
        var residencia = [];
        var archivo = files[0];
        
        var opciones = {
            zoom: 5,
            center: {lat: 16, lng: 36},
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        
        

        var map = new google.maps.Map(document.getElementsByTagName("section")[0], opciones);

        var reader = new FileReader();
        
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

                var marker = new google.maps.Marker({
                    position: {
                      lat: lista[counter++],
                      lng: lista[counter++]
                    },
                    map: map,
                    title: residencia[index],
                  });
                  counter++;
            }
        }
        reader.readAsText(archivo);

        
    }
    

}
var mostrar = new Mostrar();
