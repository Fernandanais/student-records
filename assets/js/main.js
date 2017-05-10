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

function printTodas(){
    alert("Imprimiendo Estudiantes");
}

function Student(nombre,porcentajeTecnico,porcentajeEmocional){
    this.nombre = nombre;
    this.porcentajeTecnico = porcentajeTecnico;
    this.porcentajeEmocional = porcentajeEmocional;
    this.status = "active";
}

