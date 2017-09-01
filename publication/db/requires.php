<?php
global $prefijo;

error_reporting(0);

require_once("./".$prefijo."db/DBO.php");
require_once("./".$prefijo."Smarty/libs/Smarty.class.php");
require_once("./".$prefijo."db/db.linea.php");
require_once("./".$prefijo."db/db.modelo.php");
require_once("./".$prefijo."db/db.departamento.php");
require_once("./".$prefijo."db/db.ciudad.php");
require_once("./".$prefijo."db/db.usuario.php");

require_once("./".$prefijo."class/lineas.php");
require_once("./".$prefijo."class/modelos.php");
require_once("./".$prefijo."class/departamentos.php");
require_once("./".$prefijo."class/ciudades.php");
require_once("./".$prefijo."class/usuarios.php");

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