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

function botonAddStudent(){
    var nombre = campoNoVacio("¿Cual es tu nombre?");
    var porcentajeTecnico = campoNoVacio("¿Cual es tu porcentaje tecnico?");
    var porcentajeEmocional = campoNoVacio("¿Cual es tu porcentaje socio-emocional?");

    var Estudiante = new Student(nombre,porcentajeTecnico,porcentajeEmocional);
}

function imprimir(){
    var divArr = document.getElementById("  ");
    divArr.innerHTML = " ";
    Estudiante.forEach(function(value){
   divArr.innerHTML += "Nombre: " + value.nombre + "Porcentaje Técnico: " + value.porcentajeTecnico + "Porcentaje HSE: " + value.porcentajeEmocional + "Estado:" + value.status;
    });
}

function Student(nombre,porcentajeTecnico,porcentajeEmocional){
    this.nombre = nombre;
    this.porcentajeTecnico = porcentajeTecnico;
    this.porcentajeEmocional = porcentajeEmocional;
    this.status = "active";
}
