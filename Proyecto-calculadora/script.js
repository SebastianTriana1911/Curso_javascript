// Todas las etiquetas inputs contienen un value a su
// interior, si deseamos llamar el valor o el contenido
// que tenga el input en su momento lo haremos con .value
// añadiendole el valor que recibimos por parametro
function agregar(valor){
    document.getElementById("pantalla").value += valor
}

function borrar(){
    document.getElementById("pantalla").value = " "
}

// El metodo eval toma el string que recibe del input con
// el id pantalla y lo analiza para corroborar si encuentra
// operaciones matematicas y resolverlas
function calcular(){
    const valor = document.getElementById('pantalla').value
    const resultado = eval(valor)
    document.getElementById('pantalla').value = resultado
}