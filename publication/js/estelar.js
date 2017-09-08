'use strict';

// navegacion items
jQuery(document).ready(function ($) {
	// var element = document.getElementsByTagName('from-actualizar-datos');

	// 	if(element.scrollHeight > element.clientHeight) {
	// 	  // Overflow detected; force scroll bar
	// 	  element.style.overflow = 'scrollbar';
	// 	} else {
	// 	  // No overflow detected; prevent scroll bar
	// 	  // element.style.overflow = 'hidden';
	// }

	/// validación formulario
	var $formPlaca = jQuery('#form-validar-placa');
	var $formDatos = jQuery('#form-actualizar-datos');
	var ruta = "#";
	//var $datosYplaca = $formPlaca; 
	/// muestra si la placa y el formulario fue enviado
	var mensajePlaca = ['Tu placa no fue recibida', 'Tu placa fue recibida exitosamente'];
	var mensajeDatos = ['Tus datos no fueron actualizados', 'Tus datos fueron actualizados'];
	var animatePage = function animatePage(vinculo) {

		console.log('entre a la funcion');
		console.log(vinculo);
		//var ruta = "http://localhost:3000/index.html#";
		//$formPlaca.submit();
		/// ocultar las pantallas
		$('.' + vinculo).hide('1500', function () {
			$(this).addClass('ocultar-seccion');
			$('#' + vinculo).removeClass('seccion-oculta');
			$('.logo-estatico').attr('class', 'logo-estatico').addClass(vinculo);
			// $('.logo-estatico.llenar-formulario').addClass('fadeOut');
			$('.puerta-metalica-izq').addClass('animated bounceInRight');
			$('.puerta-metalica-dere, .moto-bmw, .humo-bmw').addClass('animated bounceInLeft');
			//$('.logo').toggleClass(vinculo);
			location.href = ruta + vinculo;
		});
		/// cierra ocultar las pantallas
	};
	/// Botones validar y actualizar
	$('.boton-validar-placa').click(function () {
		$('.form.alertas-placas').addClass('active');
		$('.form.alertas-placas p span').html(mensajePlaca[0]);
		if ($formPlaca.valid()) {
			var vinculo = $(this).attr('data-vinculo');
			animatePage(vinculo);
			/// cierra ocultar las pantallas
		}
	});
	$('.boton-actualizar-datos').click(function () {
		$('.form.alertas-actualizar').addClass('active');
		$('.form.alertas-actualizar p span').html(mensajeDatos[0]);
		if ($formDatos.valid()) {
			var vinculo = $(this).attr('data-vinculo');
			animatePage(vinculo);
		}
	});
	//Ubicacion de mensaje de error//
	// const errorPlacement = (error, element)=>{
	// 	error.insertAfter(element.parent())
	// };
	//metodo para aceptar texto con espacios y caracteres especiales
	jQuery.validator.addMethod('letras', function (val, el) {
		return this.optional(el) || /^[a-z" "ñÑáéíóúÁÉÍÓÚ,.;]+$/i.test(val);
	});
	jQuery.validator.addMethod('placa', function (val, el) {
		return this.optional(el) || /^([A-Z])([A-Z])([A-Z])([0-9])([0-9])([A-Z])$/i.test(val);
	});

	var errorPlacement = function errorPlacement(a, b) {
		if (b.attr("type") == 'checkbox') {
			a.insertAfter(b.next('label'));
		} else {
			a.insertAfter(b);
		}
	};
	/// validacion de placa
	$formPlaca.validate({
		errorElement: 'div',
		errorClass: 'msn-place',
		rules: {
			placa: { required: true, placa: true, minlength: 5 }
		},
		messages: {
			placa: {
				required: 'Indica la placa de tu moto',
				placa: 'Ingresa una placa v&aacute;lida',
				minlength: 'M&iacute;nimo cinco caracteres'
			}
			// errorPlacement
		} });
	//// validacion de formulario
	$formDatos.validate({
		errorElement: 'div',
		errorClass: 'msn-place',
		rules: {
			nombre: { required: true, letras: true },
			cedula: { required: true, digits: true, minlength: 7 },
			email: { required: true, email: true },
			linea: { required: true },
			modelo: { required: true },
			departamento: { required: true },
			ciudad: { required: true },
			autorizacion: { required: true },
			aceptar: { required: true },
			declaro: { required: true }
		},
		messages: {
			nombre: {
				required: 'Indica tu nombre',
				letras: 'Solo texto'
			},
			cedula: {
				required: 'Indica tu n&uacute;mero de c&eacute;dula',
				digits: 'solo se acepta n&uacute;meros',
				minlength: 'M&iacute;nimo siete n&uacute;meros'
			},
			email: {
				required: 'Indica tu correo',
				email: 'Ingresa un correo v&iacute;lido'
			},
			linea: {
				required: 'Elige una l&iacute;nea'
			},
			modelo: {
				required: 'Elige un modelo'
			},
			departamento: {
				required: 'Indica tu departamento'
			},
			ciudad: {
				required: 'Indica tu ciudad'
			},
			autorizacion: {
				required: 'Autoriza el tratamiento de datos'
			},
			aceptar: {
				required: 'Acepta los t&eacute;minos y condiciones'
			},
			declaro: {
				required: 'Declara que haz le&iacute;do la p&oacute;litica de tratamiento de datos'
			}
		},
		errorPlacement: errorPlacement
		// errorPlacement
	});
	/// fin validación formulario
	$('.btn-nav').click(function () {
		var vinculo = $(this).attr('data-vinculo');

		console.log('hola vinculo ' + vinculo);

		animatePage(vinculo);
	});
	//// CaMBIAR LOS HOTELES
	$("#selecccionarciudad").change(function () {
		// var str = "";
		// $("#selecccionarCiudad option:selected").each(function() {
		// str += $( this ).val();
		// console.log('si cambio a' + str )
		var destino = $(this).val();

		$('.destinos-slider').removeClass('active');
		if (destino != "") {
			$('#' + destino).addClass('active');
		} else {
			$('.destinos-slider').removeClass('active');
		}
	});
	// $( "div"+"#" ).text( str );
	// .change();
});
//# sourceMappingURL=../maps/estelar.js.map
