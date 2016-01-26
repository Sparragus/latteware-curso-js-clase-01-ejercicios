// INSTRUCCIONES:
// Te toca diseñar un objeto que representa una heladería.
// 
// Usa la variable 'heladeria' para crear un objeto que contenga la siguiente
// informacion:
// 
// 1. nombre (string)
// 2. dueno (string)
// 3. direccion
//    a. calle (string)
//    b. exterior (number)
//    c. interior (number)
//    d. colonia (string)
//    e. delegacion (string)
//    f. ciudad (string)
//    g. estado (string)
//    h. codigoPostal (number)
//    i. pais (string)
//    
// Para los nombres de las propiedas, usa los mismos que aparecen en la
// lista anterior, tal y como están escritos. El valor entre paréntesis
// es el tipo de variable, el cual debes respetar.
// 
// Para verificar el ejercicio usa el comando: node 03-objetos.js
// 
// Trabaja dentro del área indicada.

  
// TRABAJA DENTRO DE ESTA PARTE
// vvvvvvvvvvvvvvvvvvvvvvvvvvvv

var heladeria = {}

// ^^^^^^^^^^^^^^^^^^^^^^^^^
// AQUI TERMINA EL EJERCICIO

var assert = require('assert')
var colors = require('colors')

console.assert(typeof heladeria.nombre === 'string', 'No es un nombre válido'.bold.red.bgBlack)
console.assert(typeof heladeria.dueno === 'string', 'No es un dueno válido'.bold.red.bgBlack)
console.assert(typeof heladeria.direccion === 'object', 'La direccion no existe'.bold.red.bgBlack)
console.assert(typeof heladeria.direccion.calle === 'string', 'No es una calle válida'.bold.red.bgBlack)
console.assert(typeof heladeria.direccion.exterior === 'number', 'No es un número exterior válido'.bold.red.bgBlack)
console.assert(typeof heladeria.direccion.interior === 'number', 'No es un número interior válido'.bold.red.bgBlack)
console.assert(typeof heladeria.direccion.colonia === 'string', 'No es una colonia válida'.bold.red.bgBlack)
console.assert(typeof heladeria.direccion.delegacion === 'string', 'No es una delegacion válida'.bold.red.bgBlack)
console.assert(typeof heladeria.direccion.ciudad === 'string', 'No es una ciudad válida'.bold.red.bgBlack)
console.assert(typeof heladeria.direccion.estado === 'string', 'No es un estado válido'.bold.red.bgBlack)
console.assert(typeof heladeria.direccion.codigoPostal === 'number', 'No es un codigo postal válido'.bold.red.bgBlack)
console.assert(typeof heladeria.direccion.pais === 'string', 'No es un pais válido'.bold.red.bgBlack)

console.log('Muy bien! Ejercicio #03 completado.'.bold.green.bgBlack)
