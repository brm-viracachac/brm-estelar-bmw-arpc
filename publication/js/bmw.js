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
        var destino = $("#destino").val();
        //var hotel = $(".selecionar-hotel").text();
        alert(hotel);
    });

   $("#departamento").change(function() {
        $("#departamento option:selected").each(function() {
            departamento = $(this).val();
            $.post("index.php", {departamento: departamento}, function(data) {
                $("#ciudad").html(data);
            });
            //$("#ciudad").html("<option value='ds'>sdsdsds</option>");
        });
    });

});