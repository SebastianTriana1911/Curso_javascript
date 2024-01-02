// El parseo funciona para cambiar un tipo de dato a otro de esta manera

// Deseamos sumar dos numeros el primero es un 5 en tipo de dato
// numerico y el segundo tambien es un 5 pero en tipo de dato 
// string, esto ocacionaria que a la hora de sumar estas dos variables
// de como resultado 55 ya que se concatena por que son tipos de datos
// diferentes
const numero1 = 5
const numero2 = "5"
const resultado = numero1 + numero2;
console.log(resultado) // Resultado: 55 

// Ahora parseando el numero de tipo string a tipo entero seria de esta
// manera lo que ocaciona que el resultado sea sea 10
const parseo1 = 5
const parseo2 = "5"
const resultadoParseo = parseo1 + parseInt(parseo2);
console.log(resultadoParseo) // Resultado 10 

// Ahora parsearemos en numeros flotantes
const flotante1 = 5.5
const flotante2 = "5.5"
const resultadoFlotante = flotante1 + parseFloat(flotante2);
console.log(resultadoFlotante)