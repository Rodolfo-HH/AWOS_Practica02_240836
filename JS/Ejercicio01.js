// Comentario de una sola línea

/* Comentarios
   ------------
   multilínea
*/

// Ejercicio 01: Declaración de variables en JavaScript

// 1. Utilizando la palabra reservada VAR

console.warn("-- Declaración de variables utilizando el prefijo VAR --");

var miNombre = "Rodolfo";
console.log("El valor almacenado en la variable miNombre es:", miNombre);

// Modificar el valor de la variable
miNombre = "Rodolfo Hdez.";
console.log("El valor almacenado en la variable miNombre es:", miNombre);

var misApellidos;
console.log("El valor almacenado en la variable misApellidos es:", misApellidos); // undefined

// Una variable puede cambiar su valor durante la ejecución del programa

// 2. Utilizando la palabra reservada CONST
// Una constante, a diferencia de una variable, no puede cambiar su valor durante
// la ejecución del programa y debe inicializarse obligatoriamente

console.warn("-- Declaración de variables utilizando el prefijo CONST --");

const miMatricula = "240836";
console.log("El valor de la constante miMatricula es:", miMatricula);

// Intentando modificar el valor de la constante (esto genera error)
// miMatricula = "24XXXX";

// 3. Utilizando la palabra reservada LET
// LET es similar a VAR, pero su alcance (scope) es por bloque.
// Las variables declaradas con VAR tienen alcance global o de función,
// mientras que LET solo existe dentro del bloque donde se declara.

console.warn("-- Declaración de variables utilizando el prefijo LET --");

var fechaDeNacimiento = new Date("2006-02-08");
var edad = calcularEdad(fechaDeNacimiento);
console.log("Tu edad es de:", edad, "años.");

// Verificar si es mayor de edad
if (edad >= 18) {
    var esMayorDeEdad = true;
    let esMenorDeEdad = false;
}

// La variable declarada con VAR sí existe fuera del bloque
if (esMayorDeEdad) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

// Esto genera error si se descomenta, porque LET tiene alcance local
// console.log("El valor de esMenorDeEdad es:", esMenorDeEdad);

// Función para calcular la edad
function calcularEdad(fechaDeNacimiento) {
    // Fecha actual
    var hoy = new Date();

    // Milisegundos por día
    let milisegundosPorDia = 24 * 60 * 60 * 1000;

    // Días vividos
    let diasVividos = (hoy - fechaDeNacimiento) / milisegundosPorDia;

    // Cálculo de la edad aproximada
    let edad = diasVividos / 365.25;
    edad = Math.floor(edad);

    return edad;
}

// Autor: Rodolfo Hernández Hernández
