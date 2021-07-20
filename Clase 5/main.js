//PRACTICA DE LA CLASE

/* let nombre = "Homero";
let edad = 39;
let calle = "Av. Siempreviva 742";

const persona1 = { nombre: "Homero", edad = 39, calle: "Av. Siempreviva 742"}

console.log(persona1.nombre); //DOT NOTATION
console.log(persona1.edad);
console.log(persona1.calle);

console.log(persona1["nombre"]); //STRING NOTATION
console.log(persona1["edad"]);
console.log(persona1["calle"]);

persona1["nombre"] = "Marge"; //Cambiar el valor de la propiedad
persona1.edad = 36; */


//CONSTRUCTORES
/* function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.hablar = function () {
        console.log("HOLA SOY " + this.nombre)
    } //Metodo personalizado 
}

const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742")
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742")
persona1.hablar();
persona2.hablar();

const persona3 = {
    nombre: "Bart",
    edad: 12,
    calle: "Av. Siempreviva 742"
};
for (const propiedad in persona3) {
    console.log(persona3[propiedad]);
}
*/

// FIN DE LA PRACTICA DE CLASE


class Producto {
    constructor(id, nombre, precio, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.cantidad = 0;
    }
    
    vender = function (cantidad) {
        if (this.cantidad >= cantidad){
            this.cantidad -= cantidad;
        } else {
            alert("No hay suficientes productos en stock")
        }
    }
    reponer = function (cantidad) {
        this.cantidad += cantidad;
    }
}

const producto1 = new Producto(1, "Nvivida GeForce RTX 3060", 184536.00, "Placas de video")
const producto2 = new Producto(2, "Nvivida GeForce RTX 3070", 253813.00, "Placas de video")
const producto3 = new Producto(3, "Nvivida GeForce RTX 3080", 349521.00, "Placas de video")
const producto4 = new Producto(4, "Nvivida GeForce RTX 3090", 424623.00, "Placas de video")
const producto5 = new Producto(5, "MOTHER MSI MPG-Z390", 20355.00, "Motherboards")
//----------------------------Primero producto
producto1.reponer(parseFloat(prompt("Ingresar cantidad a reponer de " + producto1.nombre)))
producto1.vender(50)
console.log(producto1);
//----------------------------Segundo producto
producto2.reponer(parseFloat(prompt("Ingresar cantidad a reponer de " + producto2.nombre)))
producto2.vender(50)
console.log(producto2);
//----------------------------Tercer producto
producto3.reponer(parseFloat(prompt("Ingresar cantidad a reponer de " + producto3.nombre)))
producto3.vender(50)
console.log(producto3);
//----------------------------Cuarto producto
producto4.reponer(parseFloat(prompt("Ingresar cantidad a reponer de " + producto4.nombre)))
producto4.vender(50)
console.log(producto4);
//----------------------------Quinto producto
producto5.reponer(parseFloat(prompt("Ingresar cantidad a reponer de " + producto5.nombre)))
producto5.vender(50)
console.log(producto5);