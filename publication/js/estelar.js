"use strict";var demo="variable",fijo="const";demo=function(){for(var o=0;o<5;o++)console.log(o)},jQuery(document).ready(function(o){o(".items-destinos").slick({slide:".item-destino",infinite:!0,slidesToShow:4,slidesToScroll:4,arrows:!0,appendArrows:o(".botones"),prevArrow:'<button class="prev" type="button">anterior</button>',nextArrow:'<button class="next" type="button">siguiente</button>',responsive:[{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:2}}]}),o(".btn-nav").click(function(){var t=o(this).attr("data-link");console.log(t),o("."+t).hide("500",function(){o(".logo-estatico").attr("class","logo-estatico").addClass(t)})}),o(".desplegar-info").click(function(){o(".from-actualizar-datos, .columna-form1, .columna-form2, .boton-actualizar-datos").addClass("active"),o(this).addClass("unactive")})});