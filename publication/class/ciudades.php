<?php  

class Ciudades
{ 
/*
	function getCiudad(){
		$CiudadVerDBO = DB_DataObject::Factory('Ciudad');

		//$ingredienteDBO->orderBy("id ASC");
		$CiudadVerDBO->find();

		$Ciudades = array();
		$contador = 0;

		while($CiudadVerDBO->fetch()){
			$Ciudades[$contador]->idCiudad = $CiudadVerDBO->idCiudad;
			$Ciudades[$contador]->nombre = utf8_encode($CiudadVerDBO->nombre);
			$contador++;
		}
		$CiudadVerDBO->fetch();
		return($Ciudades);

	}
*/
	function getCiudadDepartamento($depto){
		$CiudadVerDBO = DB_DataObject::Factory('Ciudad');

		$CiudadVerDBO->whereAdd("idDepto = '$depto'");
		//$CiudadVerDBO->get('2');

		$Ciudades = array();
		$contador = 0;

		$CiudadVerDBO->find();

		while($CiudadVerDBO->fetch()){
			$Ciudades[$contador]->idCiudad = $CiudadVerDBO->idCiudad;
			$Ciudades[$contador]->nombre = utf8_encode($CiudadVerDBO->nombre);
			$contador++;
		}
		$CiudadVerDBO->fetch();
		
		return($Ciudades);
	}

}
?>