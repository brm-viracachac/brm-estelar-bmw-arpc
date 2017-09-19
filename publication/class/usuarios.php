<?php  

class Usuarios
{ 
	function insertar(){
		$usuarioDBO = DB_DataObject::Factory('Usuario');

		$usuarioDBO->nombre = utf8_decode($this->nombre);
		$usuarioDBO->cedula = $this->cedula;
		$usuarioDBO->email = $this->email;
		$usuarioDBO->idLinea = $this->idLinea;
		$usuarioDBO->idModelo = $this->idModelo;
		$usuarioDBO->idDepto = $this->idDepto;
		$usuarioDBO->idCiudad = $this->idCiudad;
		$usuarioDBO->placa = strtoupper($this->placa);

		$usuarioDBO->insert();
		$usuarioDBO->free();

		return(true);
	}

	function getUsuario(){
		$usuarioDBO = DB_DataObject::Factory('HotelUsuario');
		$usuarioDBO->find();

	
		$usuario = array();
		$contador = 0;

		while($usuarioDBO->fetch()){
			$usu = $usuarioDBO->getLink('idUsuario','Usuario','idUsuario');

			$usuario[$contador]->placa = $usu->placa;
			$usuario[$contador]->nombre = $usu->nombre;
			$usuario[$contador]->cedula = $usu->cedula;
			$usuario[$contador]->email = $usu->email;
			
			/* Trae el nombre de la linea */
			$linea = new Lineas();
			$nom_linea = $linea->getLineaCodigo($usu->idLinea);
			$usuario[$contador]->nombreLinea = $nom_linea;

			/* Trae el nombre del modelo */
			$modelo = new Modelos();
			$nom_modelo = $modelo->getModeloCodigo($usu->idModelo);
			$usuario[$contador]->nombreModelo = $nom_modelo;

			/* Trae el nombre del departamento */
			$departamento = new Departamentos();
			$nom_depto = $departamento->getDeparCodigo($usu->idDepto);
			$usuario[$contador]->nombreDepto = $nom_depto;
			
			/* Trae el nombre de la ciudad */
			$ciudad = new Ciudades();
			$nom_ciudad = $ciudad->getCiudadCodigo($usu->idCiudad);
			$usuario[$contador]->nombreCiudad = $nom_ciudad;

			$usuario[$contador]->destino = $usuarioDBO->destino;
			$usuario[$contador]->hotel = $usuarioDBO->hotel;
			$usuario[$contador]->fecha = $usu->fecha;

			$contador++;
		}
		$usuarioDBO->fetch();
		
		return($usuario);

	}

	function verificarPlaca($placa){
		$usuarioDBO = DB_DataObject::Factory('Usuario');
		$usuarioDBO->placa  = $placa;
		
		$total = $usuarioDBO->count();
		return($total);
	}

	function idRegistro($placa){
		$usuarioDBO = DB_DataObject::Factory('Usuario');
		$usuarioDBO->selectAdd('idUsuario');
		$usuarioDBO->placa  = $placa;
		$usuarioDBO->find();
		while($usuarioDBO->fetch()){
			$id = $usuarioDBO->idUsuario;
		}
		return($id);
	}

}
?>