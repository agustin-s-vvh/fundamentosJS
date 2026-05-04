console.log("Conexión exitosa con js...");

// EJERCICIO 11
// Resultado esperado en alert:
// `El estudiante Juan tiene nota 6.5 y su resultado es: Excelente rendimiento`

function ejercicio11() {
    let nota = 6.5;

    if (nota >= 6.0) {
        alert(`El estudiante Juan tiene nota ${nota} y su resultado es: Excelente rendimiento`);
    } else if (nota >= 4.0) {
        alert(`El estudiante Juan tiene nota ${nota} y su resultado es: Necesita mejorar`);
    } else {
        alert(`El estudiante Juan tiene nota ${nota} y su resultado es: Reprobado`);
    }
}


// EJERCICIO 12
// Resultado esperado en alert:
// `El nombre convertido es: DANIEL PÉREZ y tiene 12 caracteres`

function ejercicio12() {
    let nombre = "Agustín Sanchez";
    alert(`El nombre convertido es: ${nombre.toUpperCase()} y tiene ${nombre.length} caracteres`);
}


// EJERCICIO 13
// Resultado esperado en alert:
// `El correo convertido es: ejemplo@gmail.com y el resultado es: correo válido`

function ejercicio13() {
    let correo = "dantebañatesucio@gmail.com";
    if(correo.length >= 15)
        {alert(`el correo ${correo.toLowerCase()} tiene 15 caracteres o mas, esta aprobado`)
    }
    else
    {alert(`el correo ${correo.toLowerCase()} es demasiado corto`)
} 
}  


// EJERCICIO 14
// Resultado esperado en alert:
// `La frase "Estoy aprendiendo JavaScript" tiene 28 caracteres y corresponde a una frase larga`

function ejercicio14() {
let frase="Estoy aprendiendo JavaScript"
    if(frase.length >= 20){
        alert(`La frase es demasiado larga`)
    } else if (frase.length >= 11) {
    alert (`la frase es mediana`)
}
}

// EJERCICIO 15
// Resultado esperado en alert:
// `El producto TECLADO tiene un precio final de $45000`

function ejercicio15() {
    let producto = "TECLADO";
    let precio = 50000;
    let descuento = 0.1; // 10% de descuento
    alert(`El producto ${producto} tiene un precio final de $${precio - (precio * descuento)}`);
}

// Ejercicio 16: Boleta de compra con clasificación de cliente

// Crear una función que almacene el nombre de un cliente,
//  el nombre de un producto y el precio. Luego:
// Convertir el nombre del cliente a mayúsculas
// Determinar el tipo de cliente según el precio:
// Mayor o igual a 100.000 → Cliente Premium (20% descuento)
// Mayor o igual a 50.000 → Cliente Frecuente (10% descuento)
// Menor a 50.000 → Cliente Normal (sin descuento)

// Mostrar:
// Nombre del cliente en mayúsculas
// Producto en minúsculas
// Precio original
// Precio final
// Tipo de cliente

function ejercicio16() {
    let cliente = "Agustín Sanchez";
    let producto = "MONITOR";
    let precio = 50000;
    
}

// Ejercicio 17: Análisis de frase con puntuación
// Crear una función que almacene una frase y un puntaje numérico. Luego:
// Convertir la frase a minúsculas
// Contar la cantidad de caracteres
// Clasificar el puntaje:
// 90 o más → Excelente
// 70 o más → Bueno
// Menor a 70 → Insuficiente

// Mostrar:
// Frase transformada
// Largo de la frase
// Puntaje
// Clasificación

// Ejercicio 18: Evaluación de tres notas con estado final

// Crear una función que almacene el nombre de un estudiante y tres notas. Luego:

// Calcular el promedio
// Convertir el nombre a mayúsculas
// Determinar el estado:
// Promedio ≥ 6.0 → Destacado
// Promedio ≥ 4.0 → Aprobado
// Promedio < 4.0 → Reprobado

// Además:
// Contar la cantidad de caracteres del nombre

// Mostrar:
// Nombre en mayúsculas
// Cantidad de caracteres del nombre
// Promedio
// Estado final

let n1 = "2.9"
let n2 = "7.0"
let n3 = "6.7"
let promedio = (n1 + n2 + n3) / 3;
let nombreMayusculas = nombre.toUpperCase();
if (promedio >= 6){
    alert(`El estudiante ${nombreMayusculas} esta destacado.
        \nPromedio: ${promedio}.
        \nLargo nombre: ${nombre.length}`)
} else if (promedio >= 4){
    alert(`El estudiante `)
}