//El usuario ingresa 3 notas.

//Por consola o alerta le mostramos el promedio y el mensaje si esta aprobado o desaprobado;

let nota1 = parseInt(prompt("Ingrese la primera nota"));
let nota2 = parseInt(prompt("Ingrese la seguna nota"));
let nota3 = parseInt(prompt("Ingrese la tercera nota"));

let promedio = ((nota1 + nota2 + nota3)/3);

console.log(`Tu promedio es de ${promedio}`);

if ( promedio >= 6) {
    console.log("Estas Aprobado");
    
} else {
    console.log("Estas Desaprobadisimo ");
}