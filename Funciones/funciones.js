// Para crear una funcion en javascript se realiza de la siguiente manera
// Dichas funciones pueden retornar algo como puede que no retornen nada
// y solo muestren algo por consola

const numero1 = 8
const numero2 = 11

// -------------------------- FUNCION CLASICA ---------------------------
// Las funciones clasicas en javascript se utilizan cuando estas cuentan
// con mas de una linea de codigo dentro de su interior.
// Esta recibe dos parametros para que en una variable llamada suma, sume
// dichos numeros que se le asignan como parametro luego reste esos mismos
// numeros donde queden guardados en otra variable llamada resta y esos
// dos resultados el de la suma y la resta lo guarde en una variable para
// retornarla
function operacion (numero1, numero2){
    const suma = numero1 + numero2;
    const resta = numero1 - numero2;
    const respuesta = suma * resta;

    return respuesta 
}
// -----------------------------------------------------------------------

// -------------------------- FUNCION FLECHA -----------------------------
// La funcion flecha se utiliza cuando nuestra funcion solo contiene una
// linea de codigo osea no hace un proceso tan largo a la hora de mostrar
// o de retornar algo de la siguiente manera. Cabe recalcar que las funciones
// flecha duncionan como si fueran una variable ya que no se utiliza la 
// propiedad function si no se tiene que definirlas con let o const

// Funcion con parametros retornando un numero
const funcion1 = (numero1, numero2) => numero1 + numero2;

// Funcion sin parametro que retorna una imprecion en consola por 
// consiguiente a la hora de querer ejecutar dicha funcion no es necesario
// invocar el metodo console.log
const funcion2 = () => console.log("Funcion flecha")
// -----------------------------------------------------------------------

console.log(operacion(numero1, numero2));
console.log(funcion1(numero1, numero2))
funcion2()