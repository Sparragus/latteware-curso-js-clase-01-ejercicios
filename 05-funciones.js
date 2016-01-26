// INSTRUCCIONES:
// En este ejercicio la computadora va a seleccionar un sabor de helado y una
// cantidad de personas. Tu trabajo es calcular el costo de regalarle ese
// helado a esa cantidad de personas.
// 
// Para hacer eso tienes que escribir dos funciones:
// 1. Una función que recibe dos parámetros: una heladeria y un número entero
// entre el 0 y el 2. La función debe regresar el helado en la posición del
// arreglo dada por el número. Es decir, si el número que se pasa a la función
// es el 1, debes regresar heledaria.helado[1].
// 
// Debes nombrar esa funcion: seleccionHelado(heladeria, numeroHelado) {...}
// 
// 2. Una función que recibe un helado y un número. El número representa la
// cantidad de personas. Tu trabajo es buscar regresar el costo del helado 
// multiplicado por la cantidad de personas.
// 
// Debes nombrar esa funcion: costo(helado, numeroPersonas) {...}
// 
// Recuerda la estructure de una función:
// 
// function nombreFuncion(parametro1, parametro2, ...) {
//    (codigo para procesar el resultado)
//    
//    return (respuesta)
// }
// 
// Utiliza la heladería que hiciste en el ejercicio pasado.
// 
// Para verificar el ejercicio usa el comando: node 05-funciones.js
// 
// Trabaja dentro del área indicada.

// TRABAJA DENTRO DE ESTA PARTE
// vvvvvvvvvvvvvvvvvvvvvvvvvvvv

var heladeria = {}

function seleccionHelado (heladeria, numeroHelado) {
  // var helado = ???
  return helado
}

function costo(helado, numeroPersonas) {
  // var total = ???
  return total
}

// ^^^^^^^^^^^^^^^^^^^^^^^^^
// AQUÍ TERMINA EL EJERCICIO

var assert = require('assert')
var colors = require('colors')
var _ = require('lodash')

var numeroHelado = _.random(0,2)
var numeroPersonas = _.random(0,10000)

var unHelado = seleccionHelado(heladeria, numeroHelado)
var total = costo(unHelado, numeroPersonas)

console.assert(heladeria.helados[numeroHelado] === unHelado, 'Algo está mal con la función de seleccionHelado'.bold.red.bgBlack)
console.assert(unHelado.precio * numeroPersonas === total, 'El costo total no está bien.'.bold.red.bgBlack)

console.log('Muy bien! Ejercicio #05 completado.'.bold.green.bgBlack)
