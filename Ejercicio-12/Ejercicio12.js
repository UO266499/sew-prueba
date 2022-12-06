class Leer{
    constructor(){
    }

    leerArchivo(files){
        var file = files[0];
        var fileType = file.type;
        if (fileType.match("text/xml")){
            this.mostrar(file);
        }else if (fileType.match("text/plain")){
            this.mostrar(file);
        } else if (fileType.match(/json.*/)){
            this.mostrar(file);
        } else{
           this.mostrarPropiedadesOtroArchivo(file);
        }
    }


    mostrar(file){
        this.mostrarPropiedades(file);
        this.escribirArchivo(file);
    }

    escribirArchivo(file){
        var reader = new FileReader();
        var archivo;
        reader.onload = function () {
            archivo = reader.result;
            var value = $("<pre></pre>").text(archivo);
            $("p").last().after(value);
        }      
        reader.readAsText(file);
    }

    mostrarPropiedades(file) 
    { 
        $("pre").remove();
        $("p").remove();
        var nombre = $("<p></p>").text("Nombre: " + file.name);
        var tamaño = $("<p></p>").text("Tamaño: " + file.size + " bytes"); 
        var tipo = $("<p></p>").text("Tipo: " + file.type);
        var ultima  = $("<p></p>").text("Fecha de la última modificación: " + file.lastModifiedDate);
        var contenido =$("<p></p>").text("Contenido:");
        
        $("input").after(contenido);
        $("input").after(ultima);
        $("input").after(tipo);
        $("input").after(tamaño);
        $("input").after(nombre);
    };

    mostrarPropiedadesOtroArchivo(file){
        $("pre").remove();
        $("p").remove();
        var nombre = $("<p></p>").text("Nombre: " + file.name);
        var tamaño = $("<p></p>").text("Tamaño: " + file.size + " bytes"); 
        var tipo = $("<p></p>").text("Tipo: " + file.type);
        var ultima  = $("<p></p>").text("Fecha de la última modificación: " + file.lastModifiedDate);
        
        $("input").after(ultima);
        $("input").after(tipo);
        $("input").after(tamaño);
        $("input").after(nombre);
    }

}
var leer = new Leer();