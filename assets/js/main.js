var studentsList = [];

function campoNoVacio(mensaje){
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

    document.getElementById("students").innerHTML = "";
    printOneStudent(Estudiante);

    studentsList.push(Estudiante);
}

function printOneStudent(Estudiante){
    var student = document.getElementById("students");
    student.innerHTML += "<div><p><strong>Nombre:</strong> " + Estudiante.nombre + "</p>" +
        "<p><strong>Porcentaje Técnico:</strong> " + Estudiante.porcentajeTecnico + "</p>" +
        "<p><strong>Porcentaje HSE:</strong> " + Estudiante.porcentajeEmocional + "</p>" +
        "<p><strong>Estado:</strong> " + Estudiante.status + "</p></div>";
}

function botonPrintAll(){
    var students = document.getElementById("students");
    students.innerHTML = "";
    studentsList.forEach(function(Estudiante){
        printOneStudent(Estudiante);
    });
}

function Student(nombre,porcentajeTecnico,porcentajeEmocional){
    this.nombre = nombre;
    this.porcentajeTecnico = porcentajeTecnico;
    this.porcentajeEmocional = porcentajeEmocional;
    this.status = "active";
}
