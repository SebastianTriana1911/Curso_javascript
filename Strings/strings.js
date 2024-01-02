// ------------------- BARRA DE ESCAPE -------------------
// La barra de escape nos ayudara a eliminar en una 
// cadena de texto elementos que hagan que nuestro codigo
// se rompa, en este caso queremos encerrar un string 
// entre comillas sencillas y adentro de este colocar otras
// comillas sencillas
const string = "Este es el string con barra de \'escape\'" 
console.log(string) // Este es el string con barra de 'escape'
// --------------------------------------------------------

// -------------------- SALTO DE LINEA --------------------
// Cuando deseamos hacer un parrafo este contiene muchos 
// saltos de linea y este lo que hace es mandar el texto a
// la parte de abajo en un cierto punto para lograr esto
// utilizamos el salto de linea
const saltoLinea = "Este es el primer parrafo \neste es el segundo"
console.log(saltoLinea) // Este es el primer parrafo
                        // este es el segundo
// --------------------------------------------------------

// ------------------ CARACTERES STRINGS ------------------
// Cuando deseamos saber cuantos caracteres tiene un string
// podremos utilizar el metodo length (Cabe aclarar que este
// cuenta tanto palabras como estacios y saltos de linea)
const caracteres = "oso"
console.log(caracteres.length) // 3
// --------------------------------------------------------

// ---------------------- REBANADAS -----------------------
// las rebanadas nos ayudaran a tomar partes o porciones de
// un strings, esto se hace con un metodo llamado slice que
// recibe dos parametros el primero es el inicio y el segundo
// es el final. Lo que hara este metodo es obtener el string
// que empieze desde el parametro de inicio hasta el parametro
// de fin
const texto = "Educacion"
console.log(texto.slice(2,8)) // ucacio
// --------------------------------------------------------

// ---------------------- MODIFICAR -----------------------
// Si deseamos modificar algun string lo podemos realizar 
// con el metodo replace que recibe como dos parametros el
// caracter del string que deseamos cambiar y como segundo
// parametro que es por lo cual lo deseamos cambiar
const remplazo = "Este es el texto a remplasar"
console.log(remplazo.replace('remplasar', 'remplazar'))
// --------------------------------------------------------

// ---------------- CAMBIAR TIPO DE TEXTO -----------------
// Para cambiar el texto es importante saber el como lo 
// podremos cambiar pues existen diferentes metodos para esto
// existen los metodos que nos permiten pasar todo el texto
// a mayuscula a minuscula entre otros
const modificarTexto = "Este es el Texto que se desea MODIFICAR"
// TEXTO A MATUSCULA
console.log(modificarTexto.toLocaleUpperCase())
// TEXTO A MINUSCULA
console.log(modificarTexto.toLowerCase())
// --------------------------------------------------------

// ------------------------ TRIMIAR -----------------------
// El metodo trim nos ayudara a eliminar todos los espacios
// que contenga un strign sea de la parte de inicio o de la
// parte final
const trimiar = "            oso           "
console.log(trimiar.trimStart()) // oso          
console.log(trimiar.trimEnd()) //            oso
console.log(trimiar.trim()) // oso
// --------------------------------------------------------

// --------------------- SEPARAR STRINGS ------------------
// Hay ocaciones en las cuales deseamos separar una cadena
// de texto sea por caracteres o sea por puntos especificos
// para esto esta el metodo split el cual puede recibir un
// parametro o ninguno, si se le asigna un parametro esta 
// debe de ser algo lo cual contenga la cadena de texto
// para que dicho metodo itere caracter por caracter y cuando
// coinsida con el parametro puesto este lo que haga es
// separar la cadena convirtiendo el texto restante en otro
// elemento de un array que es en el que no lo muestra, si
// no deseamos poner parametro nos separara por cada caracter
// que tenga el array
const textoSplit = "Este es un oso. Polar"
console.log(textoSplit.split(".")) // ['Este es un oso', 'Polar']
console.log(textoSplit.split("")) // ['E', 's', 't', 'e']

