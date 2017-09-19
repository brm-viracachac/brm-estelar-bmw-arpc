<?php  

class Modelos
{ 

	function getModelo(){
		$ModeloVerDBO = DB_DataObject::Factory('Modelo');

		//$ingredienteDBO->orderBy("id ASC");
		$ModeloVerDBO->find();

		$Modelos = array();
		$contador = 0;

		while($ModeloVerDBO->fetch()){
			$Modelos[$contador]->idModelo = $ModeloVerDBO->idModelo;
			$Modelos[$contador]->nombre = $ModeloVerDBO->nombre;
			$contador++;
		}
		$ModeloVerDBO->fetch();
		return($Modelos);

	}

	function getModeloCodigo($id){
		$ModeloVerDBO = DB_DataObject::Factory('Modelo');
		$ModeloVerDBO->selectAdd('nombre');
		$ModeloVerDBO->idModelo = $id;
		//$ingredienteDBO->orderBy("id ASC");
		$ModeloVerDBO->find();


		while($ModeloVerDBO->fetch()){
			$nombre = $ModeloVerDBO->nombre;
		}
		return($nombre);

	}

}
?>