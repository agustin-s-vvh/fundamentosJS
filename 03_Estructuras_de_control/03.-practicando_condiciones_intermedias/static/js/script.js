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
    if (correo.length > 15) {
            alert(`El correo tiene 15 caracteres o más, el correo convertido es: ${correo} y el resultado es: correo válido`);
        } else { 
            alert(`El correo contiene 15 caracteres o menos, el correo convertido es: ${correo} y el resultado es: correo inválido`);
    } else {
        alert(`El correo convertido es: ${correo} y el resultado es: correo inválido`);
    }
}


// EJERCICIO 14
// Resultado esperado en alert:
// `La frase "Estoy aprendiendo JavaScript" tiene 28 caracteres y corresponde a una frase larga`

function ejercicio14() {
    let frase = "Estoy aprendiendo JavaScript";

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