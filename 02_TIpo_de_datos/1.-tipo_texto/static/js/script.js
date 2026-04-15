console.log("conexión con js correcta")
/*
Dato tipo de texto (string)
concatentacion de texto con el signo +
podemos unir textos y variables
*/
const nombre = "Agustín"
const apellido = "Sanchez"
//unimos ambas constantes con un texto extra
console.log("hola" + nombre + " " + apellido)

/*
2.- ver tipo de texto typeof
*/
console.log("la variable es un tipo de dato: " + typeof nombre);
// Template literals (forma moderna de concatenar)
console.log(`Hola, mi nombre es ${nombre} ${apellido}`);

//mostrar el largo de un string(texto) - Contar los caracteres.
// .length --> Para contar caracteres y espacios
let palabra = "paralelepipedo"
console.log(`La palabra ${palabra} tiene ${palabra.length} letras.`);

// Crear una frase y contar sus caracteres.

let frase = "Dobló y chocló"
console.log(`La frase ${frase} tiene ${frase.length} caracteres.`);

// Métodos comúnes en JS para formatear texto
// Transformar texto el Mayúsculas
let texto1 = "dOBló Y chOCLO"
console.log(texto1.toUpperCase())

//Transformar texto a minusculas .toLocaleLowerCase
console.log(texto1.toLocaleLowerCase())

//Buscar un texto dentro de un string
let texto2 = "Leche, azucar, peras, huevos, harina.";
console.log(texto2.includes("peras")); //true
console.log(texto2.includes("manzana"))

//Convertir una variable a texto
let telefono = "89182920"
let telefono_texto = String(telefono);
console.log(`Mi número de telefono ${telefono_texto} es de tipo: ${typeof telefono_texto}`)