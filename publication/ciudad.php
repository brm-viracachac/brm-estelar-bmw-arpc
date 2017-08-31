<?php 
require_once('db/requires.php');

if ($_POST['departamento']) {
	$departamento = $_POST['departamento'];
	$ciudad = new Ciudades();
	$datosCiudad = $ciudad->getCiudadDepartamento($departamento);


	foreach ($datosCiudad as $valor) {
?>
		<option value="<?php echo $valor['idCiudad'] ?>"> <?php echo $valor['nombre']; ?></option>
<?php
	}
}
?>