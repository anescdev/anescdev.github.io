function comprobar(arg1, arg2){
		if(isNaN(arg1) || isNaN(arg2)) {
			return false;
		} else {
			return true;
		}
	}

$(document).ready(function() {
	$("#quitModal").click(function() {
		$(".modal").fadeOut(200);
		$("#inputOne").val("");
		$("#inputTwo").val("")
	});
	var campoFr;
	var campoSc;
	$("#btnSum").click(function() {
		campoFr = ($("#inputOne").val());
		campoSc = ($("#inputTwo").val());
		if (comprobar(campoFr, campoSc) == false) {
			$("#resultadoText").html("Solo se permite números");
			$(".modal").fadeIn(200);
		}	else if (!(parseInt(campoFr) || parseInt(campoSc))) {
			$("#resultadoText").html("Nos has metido ningun campo");
			$(".modal").fadeIn(200);
		} else {
			var resultado = parseInt(campoFr) + parseInt(campoSc);
			$("#resultadoText").html("El resultado de " + campoFr + " + " + campoSc + " es " + resultado);
			$(".modal").fadeIn(200);
		}
	});
	$("#btnSub").click(function() {
		campoFr = ($("#inputOne").val());
		campoSc = ($("#inputTwo").val());
		if (comprobar(campoFr, campoSc) == false) {
			$("#resultadoText").html("Solo se permite números");
			$(".modal").fadeIn(200);
		}	else if (!(parseInt(campoFr) || parseInt(campoSc))) {
			$("#resultadoText").html("Nos has metido ningun campo");
			$(".modal").fadeIn(200);
		} else {
			var resultado = parseInt(campoFr) - parseInt(campoSc);
			$("#resultadoText").html("El resultado de " + campoFr + " - " + campoSc + " es " + resultado);
			$(".modal").fadeIn(200);
		}
	});
	$("#btnMul").click(function() {
		campoFr = ($("#inputOne").val());
		campoSc = ($("#inputTwo").val());
		if (comprobar(campoFr, campoSc) == false) {
			$("#resultadoText").html("Solo se permite números");
			$(".modal").fadeIn(200);
		} else if (!(parseInt(campoFr) || parseInt(campoSc))) {
			$("#resultadoText").html("Nos has metido ningun campo");
			$(".modal").fadeIn(200);
		} else {
			var resultado = parseInt(campoFr) * parseInt(campoSc);
			$("#resultadoText").html("El resultado de " + campoFr + " x " + campoSc + " es " + resultado);
			$(".modal").fadeIn(200);
		}
	});
	$("#btnDiv").click(function() {
		campoFr = ($("#inputOne").val());
		campoSc = ($("#inputTwo").val());
		if (comprobar(campoFr, campoSc) == false) {
			$("#resultadoText").html("Solo se permite números");
			$(".modal").fadeIn(200);
		}	else {
			if (parseInt(campoSc) == 0) {
				$("#resultadoText").html("No puedes dividir entre 0");
				$(".modal").fadeIn(200);
			}else if (!(parseInt(campoFr) || parseInt(campoSc))) {
				$("#resultadoText").html("Nos has metido ningun campo");
				$(".modal").fadeIn(200);
			} else{
				var resultado = parseInt(campoFr) / parseInt(campoSc);
				$("#resultadoText").html("El resultado de " + campoFr + " entre " + campoSc + " es " + resultado);
				$(".modal").fadeIn(200);
			}
		}
	});
});