var arr = [];
function campoNoVacio(mensaje){
  //Solicita mediante un prompt con el mensaje hasta que no sea vacío
  //Retorna el valor ingresado en el prompt
  var salida = "";
  do { 

    salida = prompt(mensaje);
  
  }
  
  while (salida == "");
  return salida;
}

function pedirDatos(){
  //Función principal
  //llamar id boton con button.addEventListener
 	var nombre = campoNoVacio("Ingrese nombre de estudiante");
  	var techSkills = campoNoVacio("Ingrese el porcentaje técnico de  estudiante");
  	var tlifeSkills = campoNoVacio("Ingrese life points estudiante");
  	var status = campoNoVacio("¿Ingrese status de estudiante");
  }