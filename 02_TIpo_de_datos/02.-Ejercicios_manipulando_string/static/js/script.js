console.log("conexión correcta con js");

//1️⃣ Presentación completa
//Crea las variables:
//nombre: Camila
//edad: 25
//Debes mostrar un mensaje que:
//Presente a la persona
//Indique su edad
//Indique el tipo de dato de edad
//👉 Todo en un solo mensaje.
let nombre = "Camila";
let edad = 25;
console.log(`su nombre es: ${nombre} y tiene ${edad} 
    \n tipo de dato edad es: ${typeof edad}`);
// \n salto de linea en consola o textos
 
//2️⃣ Ubicación con transformación
//Crea las variables:
//comuna: Maipú
//region: Metropolitana
//Debes mostrar un mensaje que:
//Indique dónde vive la persona
//Muestre la comuna en MAYÚSCULAS
//Muestre la región en minúsculas
const comuna = "Maipú"
const región = "Metropolitana"
console.log(`La persona vive en la comuna ${comuna.toUpperCase()} en la región de ${región.toLowerCase()}.`);

//3️⃣ Análisis de palabra
//Crea la variable:
//lenguaje: Python
//Debes mostrar un mensaje que:
//Indique cuántos caracteres tiene
//Muestre la palabra en MAYÚSCULAS
//Indique el tipo de dato
let lenguaje = "Python"
console.log(`La palabra  ${lenguaje.toUpperCase()} tiene ${lenguaje.length} letras`)

//4️⃣ Frase completa analizada
//Crea la variable:
//mensaje: Me encanta programar en JavaScript
//Debes mostrar un mensaje que:
//Indique la cantidad de caracteres
//Verifique si contiene la palabra "JavaScript"
//Muestre el mensaje completo en minúsculas
let mensaje = "Me encanta programar en JavaScript";
console.log(`Mensaje incial: "${mensaje}"
    \nMensaje en minusculas "${mensaje.toLowerCase}".
    \nBuscando palabra Javascript dentro: ${mensaje.includes("Javascript")}
    \nCantidad de caracteres en mensaje: ${mensaje.length}.`)

//5️⃣ Lista con búsqueda y transformación
//Crea la variable:
//compras: arroz, fideos, aceite, sal
//Debes mostrar:
//Si existe la palabra "aceite"
//El texto completo en MAYÚSCULAS
//La cantidad total de caracteres
let compras = "arroz, fideos, aceite, sal.";
console.log(`la lista de compras ${compras.toUpperCase()} tienen ${compras.length} Caracteres. y contiene la palabra "aceite": ${compras.includes("aceite")}`);

//6️⃣ Conversión + análisis
//Crea las variables:
//numeroCasa: 456
//numeroCasaTexto (vacía)
//Debes:
//Convertir el número a texto
//Mostrar el número convertido
//Indicar su tipo de dato
//Indicar cuántos caracteres tiene
let numeroCasa = 456;
let numeroCasaTexto = String(numeroCasa);
console.log(`El número casa es: ${numeroCasaTexto}
    \nTipo de dato: ${typeof numeroCasaTexto}
    \nCantidad de caracteres: ${numeroCasaTexto.length}`);  

//7️⃣ Identificación personal extendida
//Crea las variables:
//nombre: Diego
//apellido: Rojas
//Debes mostrar un mensaje que:
//Muestre el nombre completo
//Indique cuántos caracteres tiene el nombre completo (incluyendo espacio)
//Muestre todo en MAYÚSCULAS
let nombre2 = "Diego";
let apellido = "Rojas";
let nombreCompleto = `${nombre2} ${apellido}`;
console.log(`El nombre completo es: ${nombreCompleto.toUpperCase()}
    \nCantidad de caracteres en el nombre completo: ${nombreCompleto.length}`);

//8️⃣ Verificación de contenido
//Crea la variable:
//frase: Hoy aprenderemos sobre strings
//Debes mostrar:
//Si contiene la palabra "strings"
//La frase en MAYÚSCULAS
//La cantidad de caracteres
let frase = "Hoy aprenderemos sobre strings";
console.log(`La frase "${frase}" contiene la palabra "strings": ${frase.includes("strings")}
    \nFrase en mayúsculas: ${frase.toUpperCase()}
    \nCantidad de caracteres: ${frase.length}`);

//9️⃣ Comparación de formatos
//Crea la variable:
//texto: Programar es divertido
//Debes mostrar en un solo mensaje:
//El texto original
//El texto en minúsculas
//El texto en mayúsculas
//La cantidad de caracteres
let texto = "Programar es divertido";
console.log(`Texto original: ${texto}
    \nTexto en minúsculas: ${texto.toLowerCase()}
    \nTexto en mayúsculas: ${texto.toUpperCase()}
    \nCantidad de caracteres: ${texto.length}`);

//🔟 Desafío completo integrado
//Crea las variables:
//curso: 4C
//anio: 2026
//Debes mostrar un mensaje que:
//Indique el curso y año
//Convierta el año a texto
//Indique el tipo de dato del año convertido
//Muestre todo el mensaje en MAYÚSCULAS
let curso = "4C";
let anio = 2026;
let anioTexto = String(anio);
console.log(`El curso es: ${curso} y el año es: ${anioTexto.toUpperCase()}
    \nTipo de dato del año convertido: ${typeof anioTexto}
    \nCantidad de caracteres: ${anioTexto.length}`);