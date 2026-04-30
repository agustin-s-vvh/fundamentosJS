console.log("Conexión exitosa con js...");

// EJERCICIO 1
// Resultado esperado en alert:
// "Bienvenido Juan"

function ejercicio1() {
let nombre = "Agustín";
alert(`Bienvenido ${nombre}`);
}


// EJERCICIO 2
// Resultado esperado en alert:
// "La suma es: 15"

function ejercicio2() {
let num1 = 10
let num2 = 5
let resultado = num1 + num2
alert(`La suma es: ${resultado}`)
}


// EJERCICIO 3
// Resultado esperado en alert:
// "La resta es: 12"

function ejercicio3() {
let num1 = 15
let num2 = 3
let resultado = num1 - num2
alert(`La resta es: ${resultado}`)
}


// EJERCICIO 4
// Resultado esperado en alert:
// "La multiplicación es: 24"

function ejercicio4() {
let num1 = 8
let num2 = 3
let resultado = num1 * num2
alert(`La multiplicación es: ${resultado}`)
}


// EJERCICIO 5
// Resultado esperado en alert:
// "El promedio es: 5.7"

function ejercicio5() {
let not1 = 5.4
let not2 = 6.0
let sumonotas = not1 + not2
let promedio = sumonotas/2
alert(`El promedio es: ${promedio}`)
}


// EJERCICIO 6
// Resultado esperado en alert:
// "Es mayor de edad"

function ejercicio6() {
let edad = 18;

if(edad <= 18) {
    alert(`Eres mayor de edad`)
} else {
    alert(`Eres menor de edad`)
}
}


// EJERCICIO 7
// Resultado esperado en alert:
// "El número es par"

function ejercicio7() {
    let numero = 8
    if (numero % 2 === 0) {
        alert("El número es par"); 
} else {
        alert("El número es impar");
}
}


// EJERCICIO 8
// Resultado esperado en alert:
// "Estudiante aprobado"

function ejercicio8() {
let nota = 5.5;

if (nota <= 6.0) {
    alert("Estudiante aprobado");
} else {
    alert("Estudiante Reprobado");
}
}


// EJERCICIO 9
// Resultado esperado en alert:
// "Precio final con descuento: $18000"

function ejercicio9() {
let precioOriginal = 20000;
let descuento = 0.1;
alert(`EL precio final con descuento es $${precioOriginal - (precioOriginal * descuento)
}`)
}


// EJERCICIO 10
// Resultado esperado en alert:
// "El número mayor es: 22"

function ejercicio10() {
let num1 = 10;
let num2 = 5;
if(num1 > num2){
    alert(`El número mayor es: ${num1}`)
    } else {
    alert(`El número mayor es: ${num2}`)
    }
}