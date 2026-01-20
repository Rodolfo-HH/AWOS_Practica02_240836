// Tipos de datos en Java Script

// Personalizacióin de salidas a Consola
const bg= "linear-gradient(45deg, rgba(52, 152, 219, 1) 0%, rgba(26, 188, 156, 1) 50%)";
const style_console = `background: ${bg}; color:white; border-radius: 6px; padding:4px; font-size:1.0rem; font-weight:bold`

console.log("%cEjercicio 02: Tipos de Datos ", style_console);

// 1. Undefined - valor por defecto asignado a variables declaradas pero no inicializadas, no es igual a NULL.
console.warn("1.-  UNDEFINED (No Definido)")
let usuarioLogeado; 
var rolUsuario;
const ultimoAcceso = undefined;   

console.log("Valores actuales de las variables");
console.log(`usuarioLogeado = ${usuarioLogeado}`);
console.log(`rolUsuario = ${rolUsuario}`);
console.log(`ultimoAcceso = ${ultimoAcceso}`);

/* En java script existe el método typeof() que nos devuelve el tipo de dato de una variable preficamente declarada.*/


console.log("Tipos de dato de las varibles declaradas:");
console.log(`usuarioLogeado = ${typeof(usuarioLogeado)}`);
console.log(`rolUsuario = ${typeof(rolUsuario)}`);
console.log(`ultimoAcceso = ${typeof(ultimoAcceso)}`);

// Supongamos que un usuario denominado MarcoRamirez99 se ha logeado exitosamente, el valor de la variable debera actualizarce a su username

usuarioLogeado = "MarcoRamirez99";

// pero no solo cambiará su valor , también cambiará su tipo

console.log(`El valor de la variable usuarioLogeado es: ${usuarioLogeado}  y su nuevo tipo de dato es: ${typeof(usuarioLogeado)}`);


// 2. BOOLEAN  (TRUE/FALSE) - Verdadero o Falso
console.warn("2.-  BOOLEAN (TRUE/FALSE)")
var hayUsuarioLogeado;

/* Supongamos que nuestra app tendrá un menu específico para los usuarios registrados , en el podrán visualizar sus mensajes o estado de sus publicaciones de renta o venta de propiedades, a diferencia de un usuario que entra de manera incognita a visualar las propiedades. */


function validacionUsuarioLogeado(){
    console.log(`El valor de la variable hayUsuarioLogeado es: ${hayUsuarioLogeado} , que es de tipo: ${typeof(hayUsuarioLogeado)}`);

    if(hayUsuarioLogeado === true)
    {
        console.log("Dado que se ha logeado un usuario la app mostrará el menú de usuario");
    }
    else if(!hayUsuarioLogeado)
    {
        console.log("Dado que no hay usuario logeado la app no mostrara el menú de usuario.");
    }    
    else {
        console.log("No puedo procesar este tipo de dato, requiero de un booleano.");
    }
}

// test1  : usuario logeado = true
hayUsuarioLogeado= true; 
console.log("Test 1")
validacionUsuarioLogeado();

// test2 : usuario logeado = false 
console.log("Test 2")
hayUsuarioLogeado= false; 
validacionUsuarioLogeado();

// test3 : usuario logeado = a cualquier otra cosa
console.log("Test 3")
hayUsuarioLogeado= 52.5; 
validacionUsuarioLogeado();

// 3. NUMBER (Numéricos)
console.warn("3.- NUMBER (NUMÉRICOS)")
/* Es importante saber que Java Script a diferencia de otros lenguajes no diferencia los datos de tipo númerico, lo que para otros leguajes de programación lo que un ENTERO (INT), FLOTANTE (FLOAT), DECIMAL , DOBLE (DOUBLE), para el solo son números (NUMBER)*/

let userID_Owner = 225
let priceProperty = 125000.50
let latGPS = 20.240508
let longGPS =-97.952881
let altGPS = 1180

console.log(`Los valores de las variables declaradas para los datos de la propiedad son:
                    ID del Usuario propietario: ${userID_Owner} 
                    Precio de la propiedad: ${priceProperty}
                    Latitud (GPS) : ${latGPS}
                    Longitud (GPS) : ${longGPS}
                    Altitud (GPS) : ${altGPS}`);

console.log(`Los tipos de datos de las variables declaradas para los datos de la propiedad son:
                    ID del Usuario propietario: ${typeof(userID_Owner)} 
                    Precio de la propiedad: ${typeof(priceProperty)}
                    Latitud (GPS) : ${typeof(latGPS)}
                    Longitud (GPS) : ${typeof(longGPS)}
                    Altitud (GPS) : ${typeof(altGPS)}`);

//4.- STRING (Cadena de Caractéres)

var fullnameOwner = "Marco A. Ramírez";
let nameProperty = "          Hermosa Casa en la Playa de Puerto Vallarta   ";
let descriptionProperty = "CASA de 2 pisos, 4 HABITACIONES, 2 baños completos y estacionamiento para 2 automoviles a orilla del MAR.";
var statusProperty = "Disponible";
const typeProperty="C";
var addressProperty;

/* Los tipos de datos STRING son un palabras , valores cualitativos de las entidades de nuestra aplicación,  que no tienen un tamaño máximo  y que estan conformadas por carácteres alfabéticos , caracteres especiales como acentos o símbolos de algun idioma*/

console.warn("4. STRING (CADENA DE CARÁCTERES , PALABRAS");
console.log(`El usuario: ${fullnameOwner},
     esta vendiendo o rentando: ${nameProperty}
     que consiste en: ${descriptionProperty}
     actualmente esta en estado: ${statusProperty} y es del tipo: ${typeProperty}`);


    
     console.log(`Las variables declaradas son del tipo:
                fullnameOwner :  ${typeof(fullnameOwner)}
                nameProperty :  ${typeof(nameProperty)}
                descriptionProperty:  ${typeof(descriptionProperty)}
                statusProperty :  ${typeof(statusProperty)}
                typeProperty :  ${typeof(typeProperty)}`);

// Manipulando Strings, los tipos de datos cualitativos tienen ciertos métodos para manipular su valor por mencionar algunos:

// Transformar a MAYÚSCULAS
console.log(`Nombre del Propietario ${fullnameOwner.toUpperCase()}`);
// Transformar a minúsculas 
console.log(`Descripción de la Propiedad: ${descriptionProperty.toLocaleLowerCase()}`);
// Número de Caracteres 
console.log(`Numero de letras en el tipo de Propiedad ${typeProperty.length}`);
// Subcadena
console.log(`Apellido del Propietario: ${fullnameOwner.slice(8, fullnameOwner.length)}`);
// Elminiar espacios
console.log(`Nombre de la Propiedad: ${nameProperty.trim()}`);
// Remplazar caracteres
console.log(`Descripción modificada: ${descriptionProperty.replace("MAR", "RÍO")}`);
// Remplazar todos
console.log(`Descripción modificada: ${descriptionProperty.toLocaleUpperCase().replaceAll("A", "4")}`);


// 5. BIGINT (Entero de Grandes dimensions)

/*Este tipo de dato permite almacenar  numeros exageradamente amplios que usualmente aplicaciones científicas avanzadas requieren , esto para no perder presición en los valores almacenados. */

const numeroGrande = 1234567890;
let numeroGrande2 = 12345678901234567890;
let numeroGrande3 = 123456789012345678901234567890;
let numeroGrande4 = 1234567890123456789012345678901234567890;

console.warn("5. BIGINT  (Entero de Gran Precisión) ")

console.log(`El valor de numeroGrande es: ${numeroGrande} y es soportado por: ${typeof(numeroGrande)}`);
console.log(`El valor de numeroGrande2 es: ${numeroGrande2} a pesar de ser  soportado por: ${typeof(numeroGrande2)} comienza a sufrir problemas de precisión`);
console.log(`El valor de numeroGrande3 es: ${numeroGrande3} a pesar de ser  soportado por: ${typeof(numeroGrande3)} comienza a sufrir problemas de precisión`);
console.log(`El valor de numeroGrande4 es: ${numeroGrande4} a pesar de ser  soportado por: ${typeof(numeroGrande4)} comienza a sufrir problemas de precisión`);

numeroGrande2 = BigInt("12345678901234567890")
console.log(`Si declaramos la variable con BigInt el valor de numeroGrande2 es: ${numeroGrande2} con un tipo de dato: ${typeof(numeroGrande2)}`);
numeroGrande3 = BigInt("123456789012345678901234567890")
console.log(`Si declaramos la variable con BigInt el valor de numeroGrande2 es: ${numeroGrande3} con un tipo de dato: ${typeof(numeroGrande3)}`);
numeroGrande4 = BigInt("1234567890123456789012345678901234567890")
console.log(`Si declaramos la variable con BigInt el valor de numeroGrande2 es: ${numeroGrande4} con un tipo de dato: ${typeof(numeroGrande4)}`);

// 6. SYMBOL (Símbolo)

/* Es un tipo de dato que ademas de tener un tipo, un valor , asocia la ubicación del espació en memoria, por lo que todos los valores asignados a una variable de este tipo siempre serán ÚNICOS.*/

console.warn("6. SYMBOL (Símbolos)");

const numero1 = 4;
const numero2 = 4.0;
const numero3 = "4";
const numero4 = "4.0";
const numero5 = Symbol(4);
const numero6 = Symbol(4.0);
const numero7 = Symbol("4");
const numero8 = Symbol("4.0");

// Valores y tipos de datos 
console.log(`Valores y tipos: 
    numero1 -  valor: ${numero1}, tipo: ${typeof(numero1)}
    numero2 -  valor: ${numero2}, tipo: ${typeof(numero2)}
    numero3 -  valor: ${numero3}, tipo: ${typeof(numero3)}
    numero4 -  valor: ${numero4}, tipo: ${typeof(numero4)}
    numero5 -  valor: ${numero5.description}, tipo: ${typeof(numero5)}
    numero6 -  valor: ${numero6.description}, tipo: ${typeof(numero6)}
    numero7 -  valor: ${numero7.description}, tipo: ${typeof(numero7)}
    numero8 -  valor: ${numero8.description}, tipo: ${typeof(numero8)}`)
    
    //Pruebas comparativas

    if( numero1 == numero2)
        console.log("Las variables numero1 y numero2 son iguales en valor.")
    else
        console.log("Las variables numero1 y numero2 no son iguales en valor.")

    if( numero1 == numero3)
        console.log("Las variables numero1 y numero3 son iguales en valor.")
    else
        console.log("Las variables numero1 y numero3 no son iguales en valor.")
    
    if( numero1 === numero3)
        console.log("Las variables numero1 y numero3 son iguales en valor y tipo de dato.")
    else
        console.log("Las variables numero1 y numero3 no son iguales en valor, ni en tipo de dato.")

    if( numero1 == numero4)
        console.log("Las variables numero1 y numero4 son iguales en valor.")
    else
        console.log("Las variables numero1 y numero4 no son iguales en valor.")

    if( numero1 === numero4)
        console.log("Las variables numero1 y numero4 son iguales en valor y tipo de dato.")
    else
        console.log("Las variables numero1 y numero4 no son iguales en valor, ni en tipo de dato.")

    if( numero1 == numero5)
        console.log("Las variables numero1 y numero5 son iguales en valor y tipo de dato.")
    else
        console.log("Las variables numero1 y numero5 no son iguales en valor, ni en tipo de dato.")

    if( numero5 == numero6)
        console.log("Las variables numero5 y numero6 son iguales en valor y tipo de dato.")
    else
        console.log("Las variables numero5 y numero6 no son iguales en valor, ni en tipo de dato.")
