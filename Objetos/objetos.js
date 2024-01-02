// Los objetos en javascript nos ayuda a darle propiedades y atributos a una
// variable por medio de clave y valor, siendo clave su atributo y valor la
// informacion de dicha clave

const objeto1 = {
    nombre: "Sebastian",
    apellido: "Triana",
    edad: 18,
    estatura: 1.66
}

const objeto2 = {
    nombre: "Andres",
    apellido: "Rodriguez",
    edad: 23,
    estatura: 1.78    
}

const objeto3 = {
    nombre: "Nicolas",
    apellido: "Ortega",
    edad: 15,
    estatura: 1.70,
    nombreCompleto: function(){
        return `Nombre: ${this.nombre} ${this.apellido}`
    }    
}

// Acediendo a todos los atributos que tiene el objeto1
console.log(objeto1)

// Acediendo a atributos especificos del objeto
console.log(`Objeto1: ${objeto1.nombre} ${objeto1.apellido}`)

console.log(objeto3.nombreCompleto())