//Keywords
let demo = 'variable';
const fijo = 'const';

//arrow functions

demo = ()=>{

	for(let x = 0; x < 5; x++){
		console.log(x);
	}

};
// navegacion items
jQuery(document).ready(function($) {
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
	$('.btn-nav').click(function() {
		var vinculo = $(this).attr('data-link');
		var ruta = "http://localhost:3000/index.html#";
		console.log(vinculo);
		// location.href = ruta + vinculo;
		$('.'+vinculo).hide('500', function(){
			$('.logo-estatico').attr('class', 'logo-estatico').addClass(vinculo);
			//$('.logo').toggleClass(vinculo);
		});
	});
	$('.desplegar-info').click(function() {
		$('.from-actualizar-datos, .columna-form1, .columna-form2, .boton-actualizar-datos').addClass('active');
		$(this).addClass('unactive')
		/* Act on the event */
	});
});