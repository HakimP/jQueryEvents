$(document).ready(function(){
   //$(document).keypress(operaEvento);
   $(document).keydown(operaEvento);
   //$(document).keyup(operaEvento);

   setInterval(changeColorOut, 3000);
   setInterval(changeColorIn, 7000);
});
 
function changeColorOut(){
    $( "#idAtardecer1" ).fadeOut(4000);
    $( "#idAtardecer2" ).fadeIn(4000);
}

function changeColorIn(){
    $( "#idAtardecer1" ).fadeIn(4000);
    $( "#idAtardecer2" ).fadeOut(4000);
}


function operaEvento(evento){
   console.log("=" + evento.which);
   /*
   * animate 2 Parametros primero todos los cambios al css y 2 velocidad de movimiento o de cambio
   */
   if(evento.which == 39) {
   		//mover izquierda
   		$( "#block" ).animate({
		    left: "+=10px"
		});
   } else if(evento.which == 38) {
   		//mover arriba
   		$( "#block" ).animate({
		    top: "-=10px"
		});
   } else if(evento.which == 40) {
   		//mover abajo
   		$( "#block" ).animate({
		    top: "+=10px"
		});
   } else if(evento.which == 37) {
   		//mover derecha
   		$( "#block" ).animate({
		    left: "-=10px"
		});
   }
}

/* Inicia las funciones para mover item*/