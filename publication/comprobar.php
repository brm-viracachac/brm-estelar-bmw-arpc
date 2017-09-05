<?php

require_once('db/requires.php');
$placa = $_GET['placa'];
$usuario = new Usuarios();
$existe = $usuario->verificarPlaca($placa);
if($existe != '0'){
	echo "false";
}else{
	echo "true";
}

?>
