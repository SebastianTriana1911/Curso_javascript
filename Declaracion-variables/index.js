// En javascript existen 3 formas de declarar variables siendo
// la tercera forma la mejor

// ------------------- VAR -----------------------
// Al declarar variables con el metodo var podras
// declar una variable sin ningun valor sin ningun
// tipo de error
var sinTipo

// Con el metodo var se puede reasignar el valor de
// la variable cada vez que se desee y siempre 
// predominara el ultimo valor que contenga dicha
// variable
sinTipo = 1
sinTipo = 2
sinTipo = 3
// El ultimo valor que predominara sera el 3

// Una de las razones por las cuales ya no se 
// utiliza var es por el echo de poder reeclarar
// una variable esto quiere decir que se podra 
// crear otra variable con el mismo nombre lo que
// ocacionaria que se rompa el codigo si este es 
// muy complejo
var redeclaracion = 1
var redeclaracion = 1
// ------------------------------------------------

// ------------------- LET ------------------------
// Al declarar una variale con el metodo let se
// puede asignar sin valor
let sinValor

// Se pueden reasignar a la misma variable con 
// diferenctes tipos de valor como si de var se tratase
sinValor = 1
sinValor = 2
sinValor = 3

// A diferencia de var let ni conts se pueden redeclarar
// osea crear la misma variable con el mismo nombre
// dentro de todo el codigo ya que generaria error
// ------------------------------------------------

// ------------------- CONST ----------------------
// AL declarar una variable const se debe de asignar
// un valor ya que esta no permite declarar la variable
// vacia como las demas
const variable = 1

// No se podra redeclarar el valor de la variable como
// se vio con los otros dos metodos en este caso se
// debe de crear una variable por cada valor que se
// desee utilizar
const valor1 = 1
const valor2 = 2
const valor3 = 3

// Al declarar un variable con este metodo tampoco se
// podra redeclarar como pasa con el metodo let y si
// esto sucede el editor de texto marcara error
// ------------------------------------------------


// -------- DECLARACION DE VARIABLES DE MANERA DINAMICA -------
// Cuando se desea declarar un grupo de variables con el mismo
// metodo para crearlas se puede instanciarlas pero ceparando
// cada variable por medio de una ',' hay que recalcar que esto
// solo funciona con el metodo let.
// Para asignarle un valor al grupo de variables que se crearon
// se puede hacer en una linea ceparando cada declaracion por
// medio de un ';'
let variable1, variable2, variable3
variable1 = 1; variable2 = 2; variable3 = 3
// -------------------------------------------------------------


// ------------- TIPOS DE LLAMADOS PARA UNA VARIABLE -----------
// Comillas simples
const nombre = "Sebastian";
// Comillas sencillas 
const apellido = 'Triana';
// Comillas backticks => Con estas comillas se podra realizar 
// concatenaciones entre una y varias variables
const nombreCompleto = `El nombre completo es ${nombre} ${apellido}`
// -------------------------------------------------------------
 