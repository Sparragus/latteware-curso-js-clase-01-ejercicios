// INSTRUCCIONES:
// Para cada variable, asigna un valor que corresponda con el
// tipo de variable indicado en el nombre.
// 
// Para verificar el ejercicio usa el comando: node 01-variable.js
// 
// Trabaja dentro del área indicada.

// TRABAJA DENTRO DE ESTA PARTE
// vvvvvvvvvvvvvvvvvvvvvvvvvvvv

var unString = null
var unBoolean = null
var unNumero = null

// ^^^^^^^^^^^^^^^^^^^^^^^^^
// AQUI TERMINA EL EJERCICIO

var assert = require('assert')
var colors = require('colors')

console.assert(typeof unString === 'string', `unString no es 'string'`.bold.red)
console.assert(typeof unBoolean === 'boolean', `unBoolean no es 'boolean'`.bold.red)
console.assert(typeof unNumero === 'number', `unNumero no es 'number'`.bold.red)

console.log('Muy bien! Ejercicio #01 completado.'.bold.green.bgBlack)