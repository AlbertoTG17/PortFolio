
$(document).ready(
		
        function () {            //este codigo se ejecuta despues de cargar la pagina
        	
        	$("h4").click(aparecer);
        	$("h4").mouseenter(seleccionar);
        	$("h4").mouseleave(limpiarFlecha);
        	$(window).resize(cambioResolucion);
        	
        }
);


function cambioResolucion() {
	var ventana_ancho = $(window).width();
	var ventana_alto = $(window).height();
	console.log("Width: " + ventana_ancho);
	console.log("Heigth: " + ventana_alto);
}

var ultimaCapaVista = "capa_1";	//en esta variable se va a almacenar a ultima capa que se selecciono para nonearla cuando apararezca la siguiente
var ultimoTituloPulsado = "_1";

function aparecer() {
	
	var idPulsado = $(this).attr('id');
	console.log("Has pulsado " + idPulsado);	
	var capaSeleccionada = "capa" + idPulsado;	// = capa + _1 = capa_1
	
	if (ultimaCapaVista == capaSeleccionada) {
		console.log("pulsada la misma capa que esta activa");
		return;
	}

	limpiarCapa();	

	ultimaCapaVista = capaSeleccionada;	//para borarla en el proximo click
	ultimoTituloPulsado = idPulsado;
	//$("#" + capaSeleccionada).css("opacity","0");
	//$("#" + capaSeleccionada).css("display","block");	//NO HACE FALTA, YA LO HACE FADEIN
	
	$("#" + capaSeleccionada).fadeIn(2500);
	$("#" + idPulsado).css("font-weight" , "bold");
	

}

function limpiarCapa() {
	
	$("#" + ultimaCapaVista).css("display","none");
	$("#" + ultimoTituloPulsado).css("font-weight" , "normal");
		
}



var ultimoTituloSeleccionado = "flecha_1";

function seleccionar(){
	
	var idPulsado = $(this).attr('id');
	console.log("Estas sobre " + idPulsado);
	var tituloSeleccionado = "flecha" + idPulsado;
	
	if (ultimoTituloSeleccionado == tituloSeleccionado) {
		console.log("pulsada la misma flecha que esta activa");
	}	
	
	ultimoTituloSeleccionado = tituloSeleccionado;
	
	$("#" + tituloSeleccionado).css("display","inline-block");
	
}

function limpiarFlecha() {
	
	$("#" + ultimoTituloSeleccionado).css("display","none");
		
}