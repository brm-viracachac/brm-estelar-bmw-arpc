<?php  

class Usuarios
{ 
	function insertar(){
		$usuarioDBO = DB_DataObject::Factory('Usuario');

		$usuarioDBO->nombre = strtoupper(utf8_decode($this->nombre));
		$usuarioDBO->cedula = $this->cedula;
		$usuarioDBO->email = strtoupper($this->email);
		$usuarioDBO->idLinea = $this->idLinea;
		$usuarioDBO->idModelo = $this->idModelo;
		$usuarioDBO->idDepto = $this->idDepto;
		$usuarioDBO->idCiudad = $this->idCiudad;
		$usuarioDBO->destino = utf8_decode($this->destino);
		$usuarioDBO->hotel = utf8_decode($this->hotel);
		$usuarioDBO->placa = strtoupper($this->placa);

		$usuarioDBO->insert();
		$usuarioDBO->free();

		return(true);
	}

}
?>