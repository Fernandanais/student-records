var studentsList = [];

function toTitleCase(str){
    return str.split(" ").map((str)=>{return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();}).join(" ");
}

function validarPorcentaje(str){
    num = parseFloat(str);
    return (!isNaN(num) && num >= 0 && num <= 100);
}

function validarNoVacio(str){
    return (str != '');
}

function leerCampo(mensaje,validaciones = []){
    var salida = "";    
    do {
      var error = false;
      salida = prompt(mensaje);
      validaciones.forEach((val)=>{
        switch(val){
            case 'noVacio': 
                if (!validarNoVacio(salida)){
                    alert("El campo no debe estar vacío");
                    error = true;
                }
                break;
            case 'porcentaje': 
                if (!validarPorcentaje(salida)){
                    alert("El campo debe contener solo valores numéricos entre 0 y 100");
                    error = true;
                } 
                break;
            default: break;
        }
      });
    } while (error);

    return salida;
}

function botonAddStudent(){
    var nombre = toTitleCase(leerCampo("¿Cual es tu nombre?",['noVacio']));
    var porcentajeTecnico = parseFloat(leerCampo("¿Cual es tu porcentaje tecnico? (0-100)",['noVacio','porcentaje'])).toFixed(2);
    var porcentajeEmocional = parseFloat(leerCampo("¿Cual es tu porcentaje socio-emocional? (0-100)",['noVacio','porcentaje'])).toFixed(2);

    var estudiante = new Student(nombre,porcentajeTecnico,porcentajeEmocional);

    document.getElementById("students").innerHTML = "";
    printOneStudent(estudiante);

    studentsList.push(estudiante);
}

function printOneStudent(estudiante){
    var student = document.getElementById("students");
    student.innerHTML += "<div><p><strong>Nombre:</strong> " + estudiante.nombre + "</p>" +
        "<p><strong>Porcentaje Técnico:</strong> " + estudiante.porcentajeTecnico + "</p>" +
        "<p><strong>Porcentaje HSE:</strong> " + estudiante.porcentajeEmocional + "</p>" +
        "<p><strong>Estado:</strong> " + estudiante.status + "</p></div>";
}

function botonPrintAll(){
    var students = document.getElementById("students");
    students.innerHTML = "";
    studentsList.forEach(function(estudiante){
        printOneStudent(estudiante);
    });
}

function Student(nombre,porcentajeTecnico,porcentajeEmocional){
    this.nombre = nombre;
    this.porcentajeTecnico = porcentajeTecnico;
    this.porcentajeEmocional = porcentajeEmocional;
    this.status = "Active";
}
