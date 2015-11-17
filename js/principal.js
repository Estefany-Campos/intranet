// sessionStorage.setItem("nombre", "JUAN GONZÁLEZ");
// sessionStorage.setItem("rut", "18.723.775-K");
// sessionStorage.setItem("carrera", "DISEÑO GRÁFICO P.");
// sessionStorage.setItem("nivel", "SECCIÓN 1 / NIVEL VI");
// sessionStorage.setItem("direccion", "LOS LEONES 23");
// sessionStorage.setItem("comuna", "SANTIAGO");
// sessionStorage.setItem("numero-e", "9 2003076");

$(document).ready(function(){

	var img = new Image();                
	img.src = localStorage.theImage;

	// setTimeout(function(){ 
	// 	alert(img); 
		$(".img-perfil").html(img);
	// }, 3000);
	

    $("#file-input").change(function(evt){
    	 readURL(this);
    });



	$("#login").click(function(){
		location.replace("menu.html")
	});

	$("#form-contact").submit(function(){
		localStorage.setItem("carrera", $("#carrera").val());
		localStorage.setItem("contacto", $("#contacto").val());
		localStorage.setItem("mensaje", $("#mensaje").val());
	});

	// $("#form-perfil")submit(function(){
	// 	sessionStorage.setItem("nombre", $("#nombre-perfil").val());
	// 	sessionStorage.setItem("rut", $("#rut-perfil").val());
	// 	sessionStorage.setItem("carrera", $("#carrera-perfil").val());
	// 	sessionStorage.setItem("seccion", $("#seccion").val());
	// 	sessionStorage.setItem("nivel", $("#nivel").val());
	// 	sessionStorage.setItem("direccion", $("#direccion").val());
	// 	sessionStorage.setItem("comuna", $("#comuna").val());
	// 	sessionStorage.setItem("numero-e", $("#numero-e").val());
	// });

	$(".enviar").click(function(){
		localStorage.setItem("nombre", $("#nombre-perfil").val());
		localStorage.setItem("rut", $("#rut-perfil").val());
		localStorage.setItem("carrera", $("#carrera-perfil").val());
		localStorage.setItem("seccion", $("#seccion").val());
		localStorage.setItem("nivel", $("#nivel").val());
		localStorage.setItem("direccion", $("#direccion").val());
		localStorage.setItem("comuna", $("#comuna").val());
		localStorage.setItem("numero-e", $("#numero-e").val());
	});





    $(".carrera-selec").html(localStorage.getItem('carrera'));
    $(".contacto-selec").html(localStorage.getItem('contacto'));
    $(".mensaje-selec").html(localStorage.getItem('mensaje'));

    $(".nombre-selec").html(localStorage.getItem('nombre'));
    $(".rut-selec").html(localStorage.getItem('rut'));
    $(".carrera-selec").html(localStorage.getItem('carrera'));
    $(".nivel-selec").html(localStorage.getItem('nivel'));
    $(".seccion-selec").html(localStorage.getItem('seccion'));
    $(".direccion-selec").html(localStorage.getItem('direccion'));
    $(".comuna-selec").html(localStorage.getItem('comuna'));
    $(".numero-e-selec").html(localStorage.getItem('numero-e'));

});



function editarPerfil(){
	// alert("llega");
}

function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
        	var img = new Image();
        	img.src = reader.result;
            $('.img-perfil').attr('src', e.target.result);
            localStorage.theImage = reader.result; //stores the image to localStorage
            $(".img-perfil").html(img);
        }

        reader.readAsDataURL(input.files[0]);

    }
}
