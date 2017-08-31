<?php  

class Departamentos
{ 

	function getDepartamento(){
		$DepartamentoVerDBO = DB_DataObject::Factory('Departamento');

		//$ingredienteDBO->orderBy("id ASC");
		$DepartamentoVerDBO->find();

		$Departamentos = array();
		$contador = 0;

		while($DepartamentoVerDBO->fetch()){
			$Departamentos[$contador]->idDepto = $DepartamentoVerDBO->idDepto;
			$Departamentos[$contador]->nombre = utf8_encode($DepartamentoVerDBO->nombre);
			$contador++;
		}
		$DepartamentoVerDBO->fetch();
		return($Departamentos);

	}

}
?>