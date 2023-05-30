let nombre = prompt("Ingrese nombre del alumno"  );
let nota_examen = parseFloat(prompt ("Ingrese nota del examen: "));
let nota_tareas = parseFloat(prompt ("Ingrese nota de tareas: " ));
let nota_asistencia = parseFloat(prompt ("Ingrese nota de asistencia: " ));
let nota_investigacion = parseFloat(prompt ("Ingrese nota de investigacion: " ));
let carnet = prompt ("Ingrese numero de carnet del alumno " + "<br>")

var nota_final;
var nota_examenfianl;
var nota_tareasfinal;
var nota_asistenciafinal;
var nota_investigacionfinal;

nota_examenfianl = nota_examen * 0.20;
nota_tareasfinal = nota_tareas * 0.40;
nota_asistenciafinal = nota_asistencia * 0.10;
nota_investigacionfinal = nota_investigacion * 0.30;

nota_final= nota_examenfianl + nota_tareasfinal + nota_asistencia +nota_investigacionfinal;

document.write("Alumno con nombre: "+ nombre + " Con numero de carnet: "+ carnet +" Tiene una nota toal de: "+ nota_final);

