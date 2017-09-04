<?php  

class Lineas
{ 
	function getLinea(){
		$lineaVerDBO = DB_DataObject::Factory('Linea');

		//$ingredienteDBO->orderBy("id ASC");
		$lineaVerDBO->find();

		$lineas = array();
		$contador = 0;

		while($lineaVerDBO->fetch()){
			$lineas[$contador]->idLinea = $lineaVerDBO->idLinea;
			$lineas[$contador]->nombre = $lineaVerDBO->nombre;
			$contador++;
		}
		$lineaVerDBO->fetch();
		return($lineas);

	}

}
?>