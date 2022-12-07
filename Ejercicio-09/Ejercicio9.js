var met = new Object();
    met.apikey = "727c660ef8c103988af4f1a03eebdf3c";
    met.unidades = "&units=metric";
    met.idioma = "&lang=es";
    met.error = "<h2>¡problemas! No puedo obtener información de <a href='http://openweathermap.org'>OpenWeatherMap</a></h2>";
    met.cargarDatos = function(ciudad){
        met.url = "https://api.openweathermap.org/data/2.5/weather?q=" + ciudad+"&mode=xml" + met.unidades + met.idioma + "&APPID=" + met.apikey;
    
        $.ajax({
            dataType: "xml",
            url: met.url,
            method: 'GET',
            success: function(data){
                met.datos = data;
                console.log(met.datos)
                met.verDatos();
            },
            error:function(){
                document.write(met.error);    
            }
        });
    }

    met.verDatos = function(){
        var articles = document.getElementsByTagName('article');

        if (articles !== undefined){
            $(document.getElementsByTagName('article')[0]).remove(); 
        }
        var amanecer              = $('sun',met.datos).attr("rise");
        var minutosZonaHoraria    = new Date().getTimezoneOffset() * 60 * 1000;
        var amanecerMiliSeg1970   = Date.parse(amanecer);
            amanecerMiliSeg1970  -= minutosZonaHoraria;
        var amanecerLocal         = (new Date(amanecerMiliSeg1970)).toLocaleTimeString("es-ES");
        var oscurecer             = $('sun',met.datos).attr("set");          
        var oscurecerMiliSeg1970  = Date.parse(oscurecer);
            oscurecerMiliSeg1970  -= minutosZonaHoraria;
        var oscurecerLocal        = (new Date(oscurecerMiliSeg1970)).toLocaleTimeString("es-ES");
        var horaMedida            = $('lastupdate',met.datos).attr("value");
        var horaMedidaMiliSeg1970 = Date.parse(horaMedida);
            horaMedidaMiliSeg1970 -= minutosZonaHoraria;
        var horaMedidaLocal       = (new Date(horaMedidaMiliSeg1970)).toLocaleTimeString("es-ES");
        var fechaMedidaLocal      = (new Date(horaMedidaMiliSeg1970)).toLocaleDateString("es-ES");
       document.getElementsByTagName("main")[0].innerHTML+= "<article>"+
       '<img src="https://openweathermap.org/img/wn/'+ $('weather',met.datos).attr("icon")+'@2x.png" alt="icono que muestra el tiempo actual">'+
       "<p>País: " + $('country',met.datos).text() + "</p>"+
       "<p>Latitud: " + $('coord',met.datos).attr("lat") + " º</p>"+
       "<p>Longitud: " + $('coord',met.datos).attr("lon") + " º</p>"+
       "<p>Temperatura: " + $('temperature',met.datos).attr("value") + " ºC</p>"+
       "<p>Temperatura máxima: " + $('temperature',met.datos).attr("max") + " ºC</p>"+
       "<p>Temperatura mínima: " + $('temperature',met.datos).attr("min") + " ºC</p>"+
       "<p>Presión: " + $('pressure',met.datos).attr("value") + " ml</p>"+
       "<p>Humedad: " + $('humidity',met.datos).attr("value") + "%</p>"+ 
       "<p>Amanece a las: " + amanecerLocal + "</p>"+ 
       "<p>Oscurece a las: " + oscurecerLocal + "</p>"+ 
       "<p>Dirección del viento: " + $('direction',met.datos).attr("value") + "  grados</p>"+
       "<p>Velocidad del viento: " + $('speed',met.datos).attr("value") + " m/s</p>"+
       "<p>Hora de la medida: " + horaMedidaLocal + "</p>"+
       "<p>Fecha de la medida: " + fechaMedidaLocal + "</p>"+
       "<p>Descripción: " + $('weather',met.datos).attr("value") + "</p>"+
       "<p>Visibilidad: " + $('visibility',met.datos).attr("value") + " m</p>"+
       "<p>Nubosidad: " + $('clouds',met.datos).attr("value") + " %</p>"+
        "</article>";
        
    };