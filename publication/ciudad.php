<?php 
require_once('db/requires.php');

if ($_POST['departamento']) { 
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