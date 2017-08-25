
jQuery(document).ready(($) =>{
	$('.navbar-toggle').click(function() {
		$('.container-items, .overlay-items').addClass('active');
	});
	$('.glyphicon-arrow-left, .overlay-items').click(function() {
		$('.container-items, .overlay-items').removeClass('active');
});
	$('#btn-play').click(function() {
	$('.padding-imagen').removeClass('padding-imagen');
	$('.envevisto').removeClass('hidden').html('<iframe width="500" height="500" src="https://www.youtube.com/embed/LhcT_Lf3hVQ?rel=0&autoplay=1" frameborder="0" allowfullscreen="" class="embed-responsive-item"></iframe>');
	$(this).hide();
	$('.visualvideo').hide();
});
	/// muestra mensaje de enviado
	var mensaje = ['no fue enviado', 'fue enviado exitosamente']
	$('.btn-submit').click(function() {
		$('.form.alertas').addClass('active');
		$('.form.alertas p span').html(mensaje[0])
});
		const $form = jQuery('#form');
	//Ubicacion de mensaje de error//
	// const errorPlacement = (error, element)=>{
	// 	error.insertAfter(element.parent())
	// };
	//metodo para aceptar texto con espacios y caracteres especiales
	jQuery.validator.addMethod('letras', function(val, el){
		return this.optional(el) || /^[a-z" "ñÑáéíóúÁÉÍÓÚ,.;]+$/i.test(val);
	});


	$form.validate({
		errorElement: 'div',
		errorClass: 'msn-place',

		rules: {
		  nombre: 			{required:true,letras:true},
		  email: 			{required:true,	email:true},
		  numero: 			{ required:true, digits:true, minlegth:7},
		  mensaje: 			{ required:true },
		  aceptar: 			{ required:true }

		},
	messages: {
		  nombre: {
		  	required:'Indica un nombre',
		  	letras:'solo se acepta texto'
		  },
		  email: {
		  	required:'Indica un corre electr&oacute;nico',
		  	email:'formato inv&aacute;lido'
		  },
		  numero:{
		  	required:'Indica un n&uacute;mero',
		  	digits:'solo se acepta n&uacute;meros',
		  	minlegth: 'M&iacutenimo siete n&uacute;meros'
		  },
		  mensaje:{
		  	required:'Escribe un mensaje'
		  },
		  aceptar:{
		  	required:'Acepta los t&eacute;rminos',
		  }

		}
		// errorPlacement
	});
});
