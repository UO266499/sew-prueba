$(document).ready(function(){
    $("button").click(function(){
        var sel = $(this).text().split(" ");

        switch(sel[0]){
            case("Ocultar"):
                $(sel[1]).hide();
                break;
            case("Modificar"):
                let nuevo = prompt("Introducir nuevo texto", "Hola");
                $(sel[1]).text(nuevo);
                break;
            case("Mostrar"):
                $(sel[1]).show();
                break;
            case("Añadir"):
                let add = prompt("Introducir nuevo texto", "Hola");
                $(sel[1]).append(add+".");
                break;
            case("Eliminar"):
                $(sel[1]).remove();
                $("button:contains("+sel[1]+")").remove();
                break;
            default:
                alert("Caso no encontrado");
        }
    });
});

$("*", document.body).each(function() {
    var tagPadre = $(this).parent().get(0).tagName;
    $("article").append(document.createTextNode( "Etiqueta padre: <"  + tagPadre + "> elemento : <" + $(this).get(0).tagName +"> valor: " + $(this).get(0)));
});
