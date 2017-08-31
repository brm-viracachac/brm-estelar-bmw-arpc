<?php 
require_once('db/requires.php');

if(isset($_POST['accion'])){
	$accion = $_POST['accion'];
}


if($accion == 'insertar_usuario'){
	$usuario = new Usuarios();

	$usuario->placa = $_REQUEST['placa'];
	$usuario->nombre = $_REQUEST['nombre'];
	$usuario->cedula = $_REQUEST['cedula'];
	$usuario->email = $_REQUEST['email'];
	$usuario->idLinea = $_REQUEST['linea'];
	$usuario->idModelo = $_REQUEST['modelo'];
	$usuario->idDepto = $_REQUEST['departamento'];
	$usuario->idCiudad = $_REQUEST['ciudad'];
	$usuario->destino = $_REQUEST['destino'];
	$usuario->hotel = $_REQUEST['hotel'];

	$usuario->insertar();

	echo "<script>alert('Datos insertados correctamente.');
		</script>";

	
}else if ($accion == 'cargar_ciudad') { 
	$departamento = $_POST['departamento'];
	$ciudad = new Ciudades();
	$datosCiudad = $ciudad->getCiudadDepartamento($departamento);
	//printVar($datosCiudad);
	
	
	foreach($datosCiudad as $info){
?>
	<option value="<?php echo $info->idCiudad; ?>"> <?php echo $info->nombre; ?> </option>
<?php
	}
	
}



?>