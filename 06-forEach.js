// INSTRUCCIONES:
// Crea una función que recibe una heladería y regresa la suma total
// del precio de todos los helados.
// 
// La función se debe llamar:
// 
// function costoTotal(heladeria) {...}
// 
// Usa array.forEach() para sumar el precio de todos los helados.
// 
// Para usar forEach(...) debes pasarle una función que recibe cada
// helado y hace algo con ese valor.
// 
// Usa la misma heladería del ejercicio anterior.
// 
// Para verificar el ejercicio usa el comando: node 05-funciones.js
// 
// Trabaja dentro del área indicada.

// TRABAJA DENTRO DE ESTA PARTE
// vvvvvvvvvvvvvvvvvvvvvvvvvvvv

var heladeria = {}

function costoTotal (heladeria) {
  var total = 0

  /// ????????

  return total
}

// ^^^^^^^^^^^^^^^^^^^^^^^^^
// AQUÍ TERMINA EL EJERCICIO

var assert = require('assert')
var colors = require('colors')

var total = heladeria.helados.reduce(function (acc, helado) { return acc + helado.precio}, 0)

console.assert(costoTotal(heladeria) === total, 'El total calculado por costoTotal es incorrecto'.bold.red.bgBlack)

console.log('Muy bien! Ejercicio #06 completado.'.bold.green.bgBlack)
