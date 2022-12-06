var petroleo = new Object;
    petroleo.apiKey= "nk6p65r3nerns38e7017cq5f7y447ifg8clo4ofz7x35tf0513w77by715pg";
    petroleo.baseURL= "https://commodities-api.com/api/latest?access_key=";
    petroleo.moneda = "EUR";
    petroleo.error = "No se pudo obtener la información";
    petroleo.precioBase = 85;
    petroleo.calcularCambio = function(){
        petroleo.url = petroleo.baseURL + petroleo.apiKey+"&base="+ petroleo.moneda+"&symbols=BRENTOIL";
        $.ajax({
            dataType: "json",
            url: petroleo.url,
            method: 'GET',
            success: function(data){
                console.log(data.data);
                $("input").val(Math.round(1/data.data.rates.BRENTOIL * 100)/100 + "€");
            },
            error:function(){
                document.write(petroleo.error);    
            }
        });
    }