$(document).ready(function(){

    

   $(".btn-reservar").click(function(){
        var placa = $("#placa").val();
        var nombre = $("#nombre").val();
        var cedula = $("#cedula").val();
        var email = $("#email").val();
        var linea = $("#linea").val();
        var modelo = $("#modelo").val();
        var departamento = $("#departamento").val();
        var ciudad = $("#ciudad").val();
        var destino = $("#selecccionarciudad").val();
        var hotel = $(this).data("hotel");
        //var hotel = "Hotel Calle 100";
        $.post("usuario.php", {placa: placa, nombre: nombre, cedula: cedula, email: email,linea: linea,modelo: modelo, departamento: departamento,
                            ciudad: ciudad, destino: destino, hotel: hotel, accion: "insertar_usuario" }, function(data) {
                location.reload();
            });
    });

   $("#departamento").change(function() {
        $("#departamento option:selected").each(function() {
            departamento = $(this).val();
            $.post("usuario.php", {departamento: departamento, accion: "cargar_ciudad"}, function(data) {
                var options = '';
                var content = JSON.parse(data);
                if(content == ''){
                    options = '<option value="">SELECCIONE</option>';
                }else{
                    for (var i = 0; i < content.length; i++) {
                        options += '<option value="' + content[i]['idCiudad'] + '">' + content[i]['nombre'] + '</option>';
                    }
                }
                $("#ciudad").html(options);
            });
        });
    });

});