// ---------------------- OPERADORES ARITMETICOS -------------------
const variable = "Hola" // Operador de asignacion "="

const suma = 1 + 1 // Operador aritmetico de la suma +
const resta = 1 - 1 // Operador aritmetico de la resta -
const multiplicacion = 1 * 1 // Operador aritmetico de la multiplicacion *
const division = 1 / 1 // Operador aritmetico de la division /
const modulo = 1 % 1 // Operador aritmetico del modulo de una division %
const exponente = 1 ** 1 // Operador aritmetico de la exponenciacion **
// ------------------------------------------------------------------

// ------------------------- CONTADORES -----------------------------
// Contadores aumentador y disminuidor
let aumenta = 1
let disminuye = 1

aumenta++; // aumenta de 1 en 1 dependiendo el bucle en el que este
disminuye--; // disminuye de 1 en 1 dependiendo el bucle en el que este
// -------------------------------------------------------------------

// ---------------- OPERADORES LOGICOS COMPARACION -------------------
// Comparaciones entre variables, el operador == permite comparar el 
// valor de una variable y otra arrojando un resultado booleano y en este
// caso dara true, por que como podemos observar los dos son 5 solo que
// uno es tipo number y el otro es tipo string
let x = 5
let y = "5"
let z = x == y;
console.log(z);

// Comparacion entre variables, comparando su valor y su tipo de dato.
// Para validar explicitamente si dos variables son iguales validando
// su valor y su tipo de dato se hara con el operador logico === lo que
// hara que la validacion anterior de false
let a = x === y;
console.log(a);

// Al querer validar si dos variables no pertenecen osea son diferentes
// una de la otra se utiliza el operador logico !=, el operador logico
// !== funciona para validar si son de diferente valor dos variables y
// el operador logico !== funciona para validar si son diferentes dos
// variables en su valor y en su tipo de dato
console.log(x !== y); // Dara true ya que x=5 es diferente a y="5"
// --------------------------------------------------------------------

