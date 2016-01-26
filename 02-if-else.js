// INSTRUCCIONES:
// Tienes que escribir un programa que determina si es posible o no comprar
// una computadora nueva con el dinero disponible.
// 
// Tienes disponible dos variable: 'dineroDisponible' y 'costoComputadora'.
// Ademas, hay una variable llamada 'comprar' a la que tienes asiganrle 'true'
// o 'false' dependiendo si es posible comprar la computadora.
// 
// Usa if/else para crear este programa. Recuerda que el if/else tiene la
// siguiente forma:
// 
// if (condición) {
//    contenido
// } else {
//    contenido
// }
// 
// Para verificar el ejercicio usa el comando: node 02-if-else.js
// 
// Trabaja dentro del área indicada.

function comprarComputadora (dineroDisponible, costoComputadora) {
  
  // TRABAJA DENTRO DE ESTA PARTE
  // vvvvvvvvvvvvvvvvvvvvvvvvvvvv
  var comprar
  if () {
  } else {
  }
  // ^^^^^^^^^^^^^^^^^^^^^^^^^
  // AQUI TERMINA EL EJERCICIO
  
  return comprar
}

var assert = require('assert')
var colors = require('colors')

var respuesta = comprarComputadora(10000, 1000)
console.assert(respuesta !== undefined && respuesta === true, ' Solución incorrecta'.bold.red)

respuesta = comprarComputadora(231, 982)
console.assert(respuesta !== undefined && respuesta === false, ' Solución incorrecta'.bold.red)

console.log('Muy bien! Ejercicio #02 completado.'.bold.green.bgBlack)