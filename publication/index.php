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

$smarty->display('index.html');



?>