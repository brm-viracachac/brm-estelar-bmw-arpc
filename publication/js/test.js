'use strict';

//Keywords
var demo = 'variable';
var fijo = 'const';

//arrow functions

demo = function demo() {

	for (var x = 0; x < 5; x++) {
		console.log(x);
	}
};

jQuery(document).ready(function ($) {
	console.log('hola');
	$('.continuar-actividad').click(function () {
		var vinculo = $(this).attr('class');
		console.log(vinculo);
		/* Act on the event */
	});
});
//# sourceMappingURL=../maps/test.js.map
