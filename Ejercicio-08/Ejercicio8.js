var met = new Object();
    met.apikey = "727c660ef8c103988af4f1a03eebdf3c";
    met.unidades = "&units=metric";
    met.idioma = "&lang=es";
    met.error = "<h2>¡problemas! No puedo obtener información de <a href='http://openweathermap.org'>OpenWeatherMap</a></h2>";
    met.cargarDatos = function(ciudad){
        met.url = "http://api.openweathermap.org/data/2.5/weather?q=" + ciudad + met.unidades + met.idioma + "&APPID=" + met.apikey;
    
        $.ajax({
            dataType: "json",
            url: met.url,
            method: 'GET',
            success: function(data){
                met.datos = data;
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
        
       document.getElementsByTagName("main")[0].innerHTML+= "<article>"+
       '<img src="http://openweathermap.org/img/wn/'+ met.datos.weather[0].icon+'@2x.png" alt="icono que muestra el tiempo actual">'+
       "<p>País: " + met.datos.sys.country + "</p>"+
       "<p>Latitud: " + met.datos.coord.lat + " º</p>"+
       "<p>Longitud: " + met.datos.coord.lon + " º</p>"+
       "<p>Temperatura: " + met.datos.main.temp + " ºC</p>"+
       "<p>Temperatura máxima: " + met.datos.main.temp_max + " ºC</p>"+
       "<p>Temperatura mínima: " + met.datos.main.temp_min + " ºC</p>"+
       "<p>Presión: " + met.datos.main.pressure + " ml</p>"+
       "<p>Humedad: " + met.datos.main.humidity + "%</p>"+ 
       "<p>Amanece a las: " + new Date(met.datos.sys.sunrise *1000).toLocaleTimeString() + "</p>"+ 
       "<p>Oscurece a las: " + new Date(met.datos.sys.sunset *1000).toLocaleTimeString() + "</p>"+ 
       "<p>Dirección del viento: " + met.datos.wind.deg + "  grados</p>"+
       "<p>Velocidad del viento: " + met.datos.wind.speed + " m/s</p>"+
       "<p>Hora de la medida: " + new Date(met.datos.dt *1000).toLocaleTimeString() + "</p>"+
       "<p>Fecha de la medida: " + new Date(met.datos.dt *1000).toLocaleDateString() + "</p>"+
       "<p>Descripción: " + met.datos.weather[0].description + "</p>"+
       "<p>Visibilidad: " + met.datos.visibility + " m</p>"+
       "<p>Nubosidad: " + met.datos.clouds.all + " %</p>"+
        "</article>";
        
    };