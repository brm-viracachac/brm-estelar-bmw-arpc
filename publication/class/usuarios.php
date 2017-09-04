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
		$usuarioDBO->destino = strtoupper(utf8_decode($this->destino));
		$usuarioDBO->hotel = utf8_decode($this->hotel);
		$usuarioDBO->placa = strtoupper($this->placa);

		$usuarioDBO->insert();
		$usuarioDBO->free();

		return(true);
	}

	function getUsuario(){
		$usuarioDBO = DB_DataObject::Factory('Usuario');
		$usuarioDBO->find();

	
		$usuario = array();
		$contador = 0;

		while($usuarioDBO->fetch()){
			$linea = $usuarioDBO->getLink('idLinea','linea','idLinea');
			$modelo = $usuarioDBO->getLink('idModelo','modelo','idModelo');
			$departamento = $usuarioDBO->getLink('idDepto','departamento','idDepto');
			$ciudad = $usuarioDBO->getLink('idCiudad','ciudad','idCiudad');

			$usuario[$contador]->placa = $usuarioDBO->placa;
			$usuario[$contador]->nombre = $usuarioDBO->nombre;
			$usuario[$contador]->cedula = $usuarioDBO->cedula;
			$usuario[$contador]->email = $usuarioDBO->email;
			$usuario[$contador]->nombreLinea = $linea->nombre;
			$usuario[$contador]->nombreModelo = $modelo->nombre;
			$usuario[$contador]->nombreDepto = $departamento->nombre;
			$usuario[$contador]->nombreCiudad = $ciudad->nombre;
			$usuario[$contador]->destino = $usuarioDBO->destino;
			$usuario[$contador]->hotel = $usuarioDBO->hotel;
			$usuario[$contador]->fecha = $usuarioDBO->fecha;


			$contador++;
		}
		$usuarioDBO->fetch();
		
		return($usuario);

	}

}
?>