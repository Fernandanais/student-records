function botonAddStudent(){
    var nombre = prompt("¿Cual es tu nombre?");
    var porcentajeTecnico = prompt("¿Cual es tu porcentaje tecnico?");
    var porcentajeEmocional = prompt("¿Cual es tu porcentaje socio-emocional?");

    var Estudiante = new Student(nombre,porcentajeTecnico,porcentajeEmocional);
}

function Student(nombre,porcentajeTecnico,porcentajeEmocional){
    this.nombre = nombre;
    this.porcentajeTecnico = porcentajeTecnico;
    this.porcentajeEmocional = porcentajeEmocional;
    this.status = "active";
}