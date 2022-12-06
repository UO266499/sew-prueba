class GeoLocalizacion{
    constructor (){
        navigator.geolocation.getCurrentPosition(this.verPosicion.bind(this));
    }

    verPosicion(posicion){
        this.longitud         = posicion.coords.longitude; 
        this.latitud          = posicion.coords.latitude;  
        this.altitud          = posicion.coords.altitude; 
        this.precision        = posicion.coords.accuracy;
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

}
var geo = new GeoLocalizacion();



