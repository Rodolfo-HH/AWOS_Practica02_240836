// Establizacion de al barra zona de pruebas en el DevTools en el navegador

console.log("%cEjercicio 03: Funciones ", style_console);

// 1. Funciones proceduales, vacias, VOID, sin valor de retorno y sin parametros de entrada

function saludar()
{
    console.log("Bienvenido al Sistema de Bienes Raices");
}

console.warn("1. Funcion sin valor de retorno, sin parametros");
saludar();

// 2. Funciones procedulares sin valor de retorno, pero que si reciven parametros es decir datos de entrada

function saludar_usuario(username, gender)
{
    if(gender=="H")
        console.log(`Bienvenido, ${username} al sistema de Bienes`)

    else if(gender=="M")
        console.log(`Bienvenida, ${username} al sistema de Bienes`)

    else
        console.log(`Bienvenid@, ${username} al sistema de Bienes`);
}

console.warn("2. Funcion sin valor de retorno, con parametros de entrada");
saludar_usuario("Marco", "H");
console.log("------------------------------------------------------")
saludar_usuario("Patricia", "M");
console.log("------------------------------------------------------")
saludar_usuario("Guadalupe", null);

// 3. Funciones que retornan un dato, pero que no reciben parametros

function fechaActual()
{
    const fecha = new Date();
    const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const fecha_formatoMX = `${dias[fecha.getDay()]}, ${fecha.getDate()} de mes ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`;
    fecha_formatoMX;
};

console.log("3. Funciones que retornan un valor, pero que no tienen un parametro");
let hoy = fechaActual();
console.log(`Bienvenid@ al Sistema de Bienes Raices, hoy es: ${hoy}`);
// Imprimiendo el valor y que tipo de dato es:
console.log(fechaActual);
console.log(typeof(fechaActual));

// 4. Funciones que retornan un valor y que reciben parametros de entrada

function login(username, password)
{
    let userValidacion= false;
    if(username==="admin" && password==="12345"){
        userValidacion=true;
        console.log("Bienvenido usuario admin");
    }

    else if (username==="admin" && password!="12345"){
        userValidacion=false;
        console.log("Lo sentimos la contraseña es incorrecta");
    }

    else if (username!="admin" && password==="12345"){
        userValidacion=false;
        console.log("Lo sentimos el nombre de usuario es incorrecto")
    }

    else if (username!="admin" && password!="12345"){
        userValidacion=false;
        console.log("Por favor verifique el usuario y la contraseña")
    }

    return userValidacion;
}

// Test 1: usuario y contraseña correctos
console.log("Test 1 - usuario: admin, password: 12345");
loginStatus= login("admin", "12345");
console.log(`${loginStatus ? `El usuario admin se ha logeado satisfactoriamente` : `Hubo un error en el usuario login del usuario admin`
    }`);

// Test 2: usuario incorrecto y contraseña correcto
console.log("Test 2 - usuario: administrador, password: 12345");
loginStatus= login("administrador", "12345");
console.log(`${loginStatus ? `El usuario admin se ha logeado satisfactoriamente` : `Hubo un error en el usuario login del usuario admin`
    }`);

// Test 3: usuario correcto y contraseña incorrecto
console.log("Test 2 - usuario: admin, password: 1234567890");
loginStatus= login("admin", "1234567890");
console.log(`${loginStatus ? `El usuario admin se ha logeado satisfactoriamente` : `Hubo un error en el usuario login del usuario admin`
    }`);

// Test 2: usuario y contraseña incorrecto
console.log("Test 2 - usuario: administrador, password: 1234567890");
loginStatus= login("administrador", "1234567890");
console.log(`${loginStatus ? `El usuario admin se ha logeado satisfactoriamente` : `Hubo un error en el usuario login del usuario admin`
    }`);

/* FUNCIONES ANONIMAS, FUNCIONES FLECHA (ARROW), FUNCIONES LAMBA
A diferncia de las funciones nombradas este tipo de funciones no suelen utilizarse en el codigo
solo se ejecutan una sola vez, dando velocidad, individalidad y privacidad a los datos utilizados en el
proceso.
*/

// 5. Funcion Anonima sin parametros

isNewUser = function(){
    const hoy = new Date();
    
    return (
        lastLogin.getFullYear() === hoy.getFullYear() &&
        lastLogin.getMonth() === hoy.getMonth() && 
        lastLogin.getDate() === hoy.getDate()
    );
};

console.warn("5. Funciones Anonimas sin parametros");

console.log("Test 1 - Fecha de ultimo acceso es igual a la fecha de hoy ");
console.log(`La fecha de ultimo acceso es: ${lastLogin}`);
console.log(`El usuario logeado es: ${isNewUser()?"Nuevo Usuario":"Antiguo Usuario"}`);

console.log("Test 2 - Fecha de ultimo acceso es igual a la fecha de hoy ");
console.log(`La fecha de ultimo acceso es: ${lastLogin}`);
console.log(`El usuario logeado es: ${isNewUser()?"Nuevo Usuario":"Antiguo Usuario"}`);
