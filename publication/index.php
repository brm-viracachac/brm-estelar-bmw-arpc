<?php
require_once('db/requires.php');

/* Carga información tabla de lineas. */
$lineas = new Lineas();
$datosLineas = $lineas->getLinea();
$smarty->assign("linea",$datosLineas);
/* Carga información tabla de modelos. */
$modelos = new Modelos();
$datosModelos = $modelos->getModelo();
$smarty->assign("modelo",$datosModelos);
/* Carga información tabla de departamentos.*/
$departamentos = new Departamentos();
$datosDepartamentos = $departamentos->getDepartamento();
$smarty->assign("departamento",$datosDepartamentos);

if ($_POST['departamento']) {
	$departamento = $_POST['departamento'];
	$ciudad = new Ciudades();
	$datosCiudad = $ciudad->getCiudadDepartamento($departamento);
	printVar($datosCiudad);
	$smarty->assign("ciudad",$datosCiudad);

}	


$smarty->display('index.html');



?>