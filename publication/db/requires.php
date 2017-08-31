<?php
global $prefijo;

error_reporting(0);

function printVar( $variable, $title = "" ){
$var = print_r( $variable, true );
echo "<pre style='background-color:#dddd00; border: dashed thin #000000;'><strong>[$title]</strong> $var</pre>";
}


require_once("db/DBO.php");
//require_once("db/conexion.php");
require_once("Smarty/libs/Smarty.class.php");
require_once("db/db.linea.php");
require_once("db/db.modelo.php");
require_once("db/db.departamento.php");

require_once("db/db.ciudad.php");

require_once("class/lineas.php");
require_once("class/modelos.php");
require_once("class/departamentos.php");

require_once("class/ciudades.php");
require_once("ciudad.php");


$smarty = new Smarty();


//$smarty->display('./index.html');
/*
$smarty->compile_check = true;
$smarty->left_delimiter = '{#';
$smarty->right_delimiter = '#}';

//Ruta absoluta de las imagenes
//$smarty->assign("rutaImagenes","http://72.34.50.144/~colom25/");
$smarty->assign("rutaImagenes","http://www.colombina.com/");
*/

?>