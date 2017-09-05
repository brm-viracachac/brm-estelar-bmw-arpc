<?php 
require_once('db/requires.php');

if(isset($_POST['accion'])){
	$accion = $_POST['accion'];
}


if($accion == 'insertar_usuario'){
	$limpiar = new CleanDoor();

	$placa = $limpiar->allClean($_REQUEST['placa']);
	$nombre = $limpiar->allClean($_REQUEST['nombre']);
	$cedula = $limpiar->allClean($_REQUEST['cedula']);
	$email = $limpiar->allClean($_REQUEST['email']);
	$linea = $limpiar->allClean($_REQUEST['linea']);
	$modelo = $limpiar->allClean($_REQUEST['modelo']);
	$departamento = $limpiar->allClean($_REQUEST['departamento']);
	$ciudad = $limpiar->allClean($_REQUEST['ciudad']);
	$destino = $limpiar->allClean($_REQUEST['destino']);
	$hotel = $limpiar->allClean($_REQUEST['hotel']);

	$usuario = new Usuarios();
	$usuario->placa = $placa;
	$usuario->nombre = $nombre;
	$usuario->cedula = $cedula;
	$usuario->email = $email;
	$usuario->idLinea = $linea;
	$usuario->idModelo = $modelo;
	$usuario->idDepto = $departamento;
	$usuario->idCiudad = $ciudad;
	$usuario->destino = $destino;
	$usuario->hotel = $hotel;

	$usuario->insertar();

	// echo "<script>alert('Datos insertados correctamente.');
	//	</script>";

	
}else if ($accion == 'cargar_ciudad') { 
	$departamento = $_POST['departamento'];
	$ciudad = new Ciudades();
	$datosCiudad = $ciudad->getCiudadDepartamento($departamento);
	echo json_encode($datosCiudad);
}



?>