

// navegacion items
jQuery(document).ready(function($) {

			/// validación formulario
				var $formPlaca = jQuery('#form-validar-placa');
				var $formDatos = jQuery('#form-actualizar-datos');
				var ruta = "#";
				//var $datosYplaca = $formPlaca; 
			/// muestra si la placa y el formulario fue enviado
			var mensajePlaca = ['Tu placa no fue recibida', 'Tu placa fue recibida exitosamente']
			var mensajeDatos = ['Tus datos no fueron actualizados', 'Tus datos fueron actualizados']
			function animatePage(vinculo){
					//var ruta = "http://localhost:3000/index.html#";
					//$formPlaca.submit();

					/// ocultar las pantallas
					$('.'+vinculo).hide('500', function(){

						$('.logo-estatico').attr('class', 'logo-estatico').addClass(vinculo);
						$('.puerta-metalica-izq').addClass('animated bounceInRight')
						$('.puerta-metalica-dere, .moto-bmw').addClass('animated bounceInLeft')
						//$('.logo').toggleClass(vinculo);
						location.href = ruta + vinculo;
					});
					/// cierra ocultar las pantallas
			}
			/// Botones validar y actualizar
			$('.boton-validar-placa').click(function() {
				$('.form.alertas-placas').addClass('active');
				$('.form.alertas-placas p span').html(mensajePlaca[0]);
				if($formPlaca.valid()){
					var vinculo = $(this).attr('data-link');
					animatePage(vinculo);
					/// cierra ocultar las pantallas
				}
				
			});
			$('.boton-actualizar-datos').click(function() {
				$('.form.alertas-actualizar').addClass('active');
				$('.form.alertas-actualizar p span').html(mensajeDatos[0])
				if($formDatos.valid()){
					var vinculo = $(this).attr('data-link');
					animatePage(vinculo);
					
				}
			});
			//Ubicacion de mensaje de error//
			// const errorPlacement = (error, element)=>{
			// 	error.insertAfter(element.parent())
			// };
			//metodo para aceptar texto con espacios y caracteres especiales
			jQuery.validator.addMethod('letras', function(val, el){
				return this.optional(el) || /^[a-z" "ñÑáéíóúÁÉÍÓÚ,.;]+$/i.test(val);
			});
			jQuery.validator.addMethod('placa', function(val, el){
				return this.optional(el) || /^([A-Z])([A-Z])([A-Z])([0-9])([0-9])([A-Z])$/i.test(val);
			});

			/// validacion de placa
			$formPlaca.validate({
				errorElement: 'div',
				errorClass: 'msn-place',
				rules: {
					placa: {required:true,placa:true}
				},
				messages: {
					placa: {
						required:'Indica la placa de tu moto',
						placa:'Ingresa una placa v&aacute;lida'
					  }
				}
				// errorPlacement
			});
			//// validacion de formulario
			$formDatos.validate({
				errorElement: 'div',
				errorClass: 'msn-place',
				rules: {
					nombre: 		{required:true,letras:true},
					cedula: 		{required:true, digits:true, minlength:7},
					linea: 			{required:true},
					modelo: 		{required:true},
					ciudad: 		{required:true},
					autorizacion: 	{required:true},
					aceptar: 		{required:true},
					declaro: 		{required:true}
				},
			messages: {
				nombre: {
					required:'Indica tu nombre',
					letras:'Solo letras'
				  },
				cedula:{
					required:'Indica tu n&uacute;mero de c&eacute;dula',
					digits:'solo se acepta n&uacute;meros',
					minlength: 'M&iacute;nimo siete n&uacute;meros'
				  },
				linea: {
					required:'Elige una l&iacute;nea'
				  },
				modelo:{
					required:'Elige un modelo'
				  },
				ciudad:{
				  	required:'Indica tu ciudad'
				  },
				autorizacion:{
				  	required:'Autoriza el tratamiento de datos'
				  },
				aceptar:{
				  	required:'Acepta los t&eacute;minos y condiciones'
				  },
				declaro:{
				  	required:'Declara que haz le&iacute;do la p&oacute;litica de tratamiento de datos'
				  }
				}
				// errorPlacement
			});
		/// fin validación formulario


	$('.items-destinos').slick({
		slide:".item-destino",
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: true,
		appendArrows:$(".botones"),
		prevArrow: '<button class="prev" type="button">anterior</button>',
		nextArrow: '<button class="next" type="button">siguiente</button>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3

				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2

				}
			}
  		]
	});
	$('.item-destino').hover(  function() {
		$(this).find('.btn-reservar, .overlay-reserva').addClass('active');
	}, function() {
		$(this).find('.btn-reservar.active, .overlay-reserva.active').removeClass('active');
	});

	$('.btn-nav').click(function() {
		var vinculo = $(this).attr('data-link');
		animatePage(vinculo);

	});

	$('.desplegar-info').click(function() {
		$('.from-actualizar-datos, .columna-form1, .columna-form2, .boton-actualizar-datos').addClass('active');
		$(this).addClass('unactive')
		/* Act on the event */
	});
});