<?php  

class HotelUsuario
{ 
	function insertar(){
		$hotelUsuarioDBO = DB_DataObject::Factory('HotelUsuario');

		$hotelUsuarioDBO->idUsuario = $this->idUsuario;
		$hotelUsuarioDBO->destino = strtoupper($this->destino);
		$hotelUsuarioDBO->hotel = $this->hotel;

		$hotelUsuarioDBO->insert();
		$hotelUsuarioDBO->free();

		return(true);
	}

	function getDatos($id){
		$usuarioDBO = DB_DataObject::Factory('HotelUsuario');
		$usuarioDBO->selectAdd('destino');
		$usuarioDBO->idUsuario = $id;
		$usuarioDBO->find();
		$destino = array();
		$contador = 0;
		while($usuarioDBO->fetch()){
			$destino[$contador] = $usuarioDBO->destino;
			$contador ++;
		}
		return($destino);
	}

}

?>