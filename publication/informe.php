<?php
require("db/requires.php");
date_default_timezone_set('America/Bogota');

//if (isset($verify) && $verify == "Clr-C0r-".date('d')) {
	$General = new Usuarios;
	$datos = $General->getUsuario();
	$fecha = date('Y-m-d H:i:s');
	
	$excel_obj = new ExportExcel($fecha."-personas registradas.xls");
	// Setting the values of the headers and data of the excel file
	// and these values comes from the other file which file shows the data
	$excelHeader = array(
		"Placa",
		"Nombre",
		utf8_decode("Cédula"),
		"Email",
		"Linea",
		"Modelo",
		"Departamento",
		"Ciudad",
		"Destino",
		"Hotel",
		"Fecha"
		);
	
	if($datos){
		$excelValues = array();
		for( $i=0; $i < count($datos); $i++){
			$excelValues[$i][]= $datos[$i]->placa;
			$excelValues[$i][]= $datos[$i]->nombre;
			$excelValues[$i][] = $datos[$i]->cedula;
			$excelValues[$i][] = $datos[$i]->email;
			$excelValues[$i][] = $datos[$i]->nombreLinea;
			$excelValues[$i][] = $datos[$i]->nombreModelo;
			$excelValues[$i][] = $datos[$i]->nombreDepto;
			$excelValues[$i][] = $datos[$i]->nombreCiudad;
			$excelValues[$i][] = $datos[$i]->destino;
			$excelValues[$i][] = $datos[$i]->hotel;
			$excelValues[$i][] = $datos[$i]->fecha;
			
				
		}
		$excel_obj->setHeadersAndValues($excelHeader, $excelValues);
		// Now generate the excel file with the data and headers set
		$excel_obj->GenerateExcelFile();
	}
//}