console.log("Conexión exitosa con JS");

/* 
======================================
¿Qué es una condición en JS?
======================================
Una condición nos permite tomar desiciones en el código.
separando dos caminos,el si(if) y el no (else).

Estructura básica:( Sintaxis --> Reglas del lenguaje de programación).

if (condición) {
    // Código a ejecutar si la condición es verdadera
} else {
    // Código a ejecutar si la condición es falsa
}
*/

// Ejemplo 1: (númerico)
let edad = 18;

if (edad >= 18); { //Condición Si
    console.log("Eres mayor de edad");
}

// Ejemplo 2: Dos caminos posibles
let temperatura = 10;

if (temperatura > 20) { //Condición Si
    console.log("Hace calor");
} else { //Condición No
    console.log("Hace frío");
}

//ejemplo 3: If - ELSE IF - ELSE (Multimples condiciones)

let nota = 5.5;

if (nota >= 6.0) {
    console.log("Excelente, sigue así!");
} else if (nota >= 4.0) {
    console.log("Aprobado, puedes mejorar!");
} else {
    console.log ("Reprobado, estudia más!");
}

//Ejemplo 4: Condiciones con STRING

let nombre = "Agustínsigmaboy777programer";

//Comparación exacta (===)
if (nombre === "Agustínsigmaboy777programer"){
    console.log("Hola, " + nombre)
} else {
    console.log("Tú no eres " + nombre)
}

/*
OPERADORES DE COMPARACIÓN
> mayor que 
< menor que 
>= mayor o igual
<= menor o igual
=== estricta igualdad
!== distinto estricto
== igualdad
!= distinto
*/
//Ejemplo de distinto
let num = "10";
let num2 = "5";
if(num !== "5"){
    console.log(`El número: ${num} es distinto que ${num2} `)
} else {
    console.log("Son iguales!")
}