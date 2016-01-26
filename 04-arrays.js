// INSTRUCCIONES:
// Seguiremos trabajando con la heladería que hiciste en el ejercicion
// anterior.
// 
// Comienza copiando la heladeria anterior a este ejercicio.
// 
// Luego añade otra propiedad llamada 'helados'. Esta propieda va a
// representar los diferentes sabores de helados que vende tu
// heladeria. Para eso usaremos un array, o arreglo (en español).
// 
// Dentro del array de helados, van a haber varios objetos que
// describen el sabor. Ese objeto tiene la siguiente forma:
// 
// {
//    nombre: String,
//    ingredientes: [String] <--- Esto quiere decir un array de strings. Ejemplo ['vainilla', 'chispas de chocolate', ...]
//    precio: Number
// }
// 
// Crea al menos tres heladors diferentes.
// 
// Para verificar el ejercicio usa el comando: node 04-arrays.js
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
console.assert(heladeria.helados.length, 'No es un arreglo de helados'.bold.red.bgBlack)
console.assert(heladeria.helados.length >= 3, 'Debes tener al menos tres helados'.bold.red.bgBlack)

heladeria.helados.forEach(function (helado) {
  console.assert(typeof helado.nombre === 'string', helado.nombre + ' no es un nombre de helado válido'.bold.red.bgBlack)
  console.assert(helado.ingredientes.every(function (ingrediente) {
    console.assert(typeof ingrediente === 'string', ingrediente + ' no es un ingrediente válido'.bold.red.bgBlack)
    return true
  }), 'Uno de los ingredientes del helado de ' + helado.nombre + ' no es válido.'.bold.red.bgBlack)
  console.assert(typeof helado.precio === 'number', helado.precio + ' no es un precio válido'.bold.red.bgBlack)
})

console.log('Muy bien! Ejercicio #04 completado.'.bold.green.bgBlack)
