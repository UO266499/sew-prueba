class GeoLocalizacion{
    constructor (){
        navigator.geolocation.getCurrentPosition(this.verPosicion.bind(this));
    }

    verPosicion(posicion){
        this.longitud         = posicion.coords.longitude; 
        this.latitud          = posicion.coords.latitude;  
        this.altitud          = posicion.coords.altitude; 
        this.precision        = posicion.coords.accuracy;
        this.checkParametros();
    }

    getLongitud(){
        return this.longitud;
    }

    getLatitud(){
        return this.latitud;
    }

    getAltitud(){
        return this.altitud;
    }
    
    getPrecision(){
        return this.precision;
    }

    verCoordenadas(){

        $("p").remove();

        var lon  = $("<p></p>").text(("Longitud: "+ this.getLongitud() +" grados")); 
        var lat  = $("<p></p>").text(("Latitud: "+ this.getLatitud() +" grados"));
        var alt  = $("<p></p>").text(("Altitud: "+ this.getAltitud() +" metros"));
        var prec = $("<p></p>").text(("Precisión: "+ this.getPrecision() +" metros"));

        $("button").after(prec);
        $("button").after(alt);
        $("button").after(lon);
        $("button").after(lat);
        $("button").hide();
    }
    
    checkParametros(){
        if (this.longitud === null || this.longitud === undefined){
            this.longitud = "Desconocidos los";
        }
        if (this.latitud === null || this.latitud === undefined){
            this.latitud = "Desconocidos los";
        }
        if (this.altitud === null || this.altitud === undefined){
            this.altitud = "Desconocidos los";
        }
        if (this.getPrecision() === null){
            this.precision = "Desconocidos los";
        }
    }

}
var geo = new GeoLocalizacion();



