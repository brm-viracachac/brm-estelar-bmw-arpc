"use strict";jQuery(document).ready(function(a){var e=jQuery("#form-validar-placa"),t=jQuery("#form-actualizar-datos"),i=["Tu placa no fue recibida","Tu placa fue recibida exitosamente"],r=["Tus datos no fueron actualizados","Tus datos fueron actualizados"],o=function(e){console.log("entre a la funcion"),console.log(e),a("."+e).hide("1500",function(){a(this).addClass("ocultar-seccion"),a("#"+e).removeClass("seccion-oculta"),a(".logo-estatico").attr("class","logo-estatico").addClass(e),a(".puerta-metalica-izq").addClass("animated bounceInRight"),a(".puerta-metalica-dere, .moto-bmw, .humo-bmw").addClass("animated bounceInLeft"),location.href="#"+e})};a(".boton-validar-placa").click(function(){if(a(".form.alertas-placas").addClass("active"),a(".form.alertas-placas p span").html(i[0]),e.valid()){var t=a(this).attr("data-vinculo");o(t)}}),a(".boton-actualizar-datos").click(function(){if(a(".form.alertas-actualizar").addClass("active"),a(".form.alertas-actualizar p span").html(r[0]),t.valid()){var e=a(this).attr("data-vinculo");o(e)}}),jQuery.validator.addMethod("letras",function(a,e){return this.optional(e)||/^[a-z" "ñÑáéíóúÁÉÍÓÚüÜ]+$/i.test(a)}),jQuery.validator.addMethod("placa",function(a,e){return this.optional(e)||/^([A-Z])([A-Z])([A-Z])([0-9])([0-9])([A-Z])$/i.test(a)}),jQuery.validator.addMethod("email",function(a,e){return this.optional(e)||/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9_])+\.)+([a-zA-Z0-9]{2,4})+$/.test(a)}),jQuery("input[type='checkbox']").click(function(a){jQuery(this).is(":checked")&&jQuery(this).next("label").removeClass("sin-check")});var c=function(e,t){"checkbox"==t.attr("type")?(t.next("label").addClass("sin-check"),a(".form.alertas-actualizar p span").html("Completa todos los campos.")):e.insertAfter(t)};e.validate({errorElement:"div",errorClass:"msn-place",rules:{placa:{required:!0,placa:!0,minlength:5}},messages:{placa:{required:"Indica la placa de tu moto",placa:"Ingresa una placa v&aacute;lida",minlength:"M&iacute;nimo cinco caracteres"}}}),t.validate({errorElement:"div",errorClass:"msn-place",rules:{nombre:{required:!0,letras:!0},cedula:{required:!0,digits:!0,minlength:6,maxlength:12},email:{required:!0,email:!0},linea:{required:!0},modelo:{required:!0},departamento:{required:!0},ciudad:{required:!0},autorizacion:{required:!0},aceptar:{required:!0},declaro:{required:!0}},messages:{nombre:{required:"Indica tu nombre",letras:"Solo texto"},cedula:{required:"Indica tu n&uacute;mero de c&eacute;dula",digits:"solo se acepta n&uacute;meros",minlength:"M&iacute;nimo seis n&uacute;meros",maxlength:"M&aacute;ximo doce n&uacute;meros"},email:{required:"Indica tu correo",email:"Ingresa un correo v&aacute;lido"},linea:{required:"Elige una l&iacute;nea"},modelo:{required:"Elige un modelo"},departamento:{required:"Indica tu departamento"},ciudad:{required:"Indica tu ciudad"},autorizacion:{required:"Autoriza el tratamiento de datos"},aceptar:{required:"Acepta los t&eacute;minos y condiciones"},declaro:{required:"Declara que haz le&iacute;do la p&oacute;litica de tratamiento de datos"}},errorPlacement:c}),a(".btn-nav").click(function(){var e=a(this).attr("data-vinculo");console.log("hola vinculo "+e),o(e)}),a("#selecccionarciudad").change(function(){var e=a(this).val();a(".destinos-slider").removeClass("active"),""!=e?a("#"+e).addClass("active"):a(".destinos-slider").removeClass("active")})});