sessionStorage.setItem("nombre", "JUAN GONZÁLEZ");
sessionStorage.setItem("rut", "18.723.775-K");
sessionStorage.setItem("carrera", "DISEÑO GRÁFICO P.");
sessionStorage.setItem("nivel", "SECCIÓN 1 / NIVEL VI");
sessionStorage.setItem("direccion", "LOS LEONES 23");
sessionStorage.setItem("comuna", "SANTIAGO");
sessionStorage.setItem("numero-e", "9 2003076");

$(document).ready(function(){
	$("#login").click(function(){
		location.replace("menu.html")
	});

	$("#form-contact").submit(function(){
	sessionStorage.setItem("carrera", $("#carrera").val());
	sessionStorage.setItem("contacto", $("#contacto").val());
	sessionStorage.setItem("mensaje", $("#mensaje").val());
    });

    $(".carrera-selec").html(sessionStorage.getItem('carrera'));
    $(".contacto-selec").html(sessionStorage.getItem('contacto'));
    $(".mensaje-selec").html(sessionStorage.getItem('mensaje'));

    $(".nombre-selec").html(sessionStorage.getItem('nombre'));
    $(".rut-selec").html(sessionStorage.getItem('rut'));
    $(".carrera-selec").html(sessionStorage.getItem('carrera'));
    $(".nivel-selec").html(sessionStorage.getItem('nivel'));
    $(".direccion-selec").html(sessionStorage.getItem('direccion'));
    $(".comuna-selec").html(sessionStorage.getItem('comuna'));
    $(".numero-e-selec").html(sessionStorage.getItem('numero-e'));



});

function editarPerfil(){
	// alert("llega");
}