$(document).ready(function() {

/*contador 140 caract. con keydown*/
    $(function(){
    var longitud_max = 140;
    var chars_actuales = $("#comentarios").val().length;

    $("#contador").html(longitud_max + " caracteres restantes");

    $("#comentarios").keydown(function(){
        var chars_nuevos = longitud_max - $("#comentarios").val().length;
/*Cuenta regresiva -charact. restantes*/
        $("#contador").html(chars_nuevos + " caracteres restantes");
/*Cuenta regresiva de 50 a 10 char. restantes lo vuelve rojo*/
        if(chars_nuevos <= 50 && chars_nuevos > 10){
            $("#contador").css("color","#FF0000");
        }
/*Cuenta regresiva de 10 a 0 char. restantes lo vuelve azul*/
        else if(chars_nuevos <= 10 && chars_nuevos > 0){
            $("#contador").css("color","#0000FF");
        }
/*De lo contrario quedan char. color negro*/
        else{
            $("#contador").css("color","#000");
        }

        if(chars_nuevos <= 0){
            $("#comentarios").keypress(function(){
                var texto = $("#comentarios").val().substr(0,24);
                $("#comentarios").val(texto);
            });
        }
    });
});
});
