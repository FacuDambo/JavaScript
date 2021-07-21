/* //DECLARACION DE FUNCION CONSTRUCTORA
class Producto {
    constructor (id, nombre, precio) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
}

//INSTANCIAR OBJETOS CON FUNCION CONSTRUCTORA
const producto1 = new Producto (1, "DONA", 60);
console.log (producto1);
const productos = [];
productos.push(producto1);
productos.push(new Producto(2, "MEDIALUNA", 30));
productos.push(new Producto(3, "FLAN", 180));
console.log(productos); 

let salida = "";

for (let index = 0; index < productos.length; index++) {
    salida += "N " + productos[index].id + 
            "Nombre " + productos[index].nombre + 
            "Precio " + productos[index].precio + "\n"
} */ //VISTO EN CLASE

class Producto {
    constructor(id, nombre, precio, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.cantidad = 0;
    }

    vender = function (cantidad) {
        if (this.cantidad >= cantidad) {
            this.cantidad -= cantidad;
        } else {
            alert("No hay suficientes productos en stock")
        }
    }
    reponer = function (cantidad) {
        this.cantidad += cantidad;
    }
}

const producto1 = new Producto(1, "Nvidia GeForce RTX 3060", 184536.00, "Placas de video")
const producto2 = new Producto(2, "Nvidia GeForce RTX 3070", 253813.00, "Placas de video")
const producto3 = new Producto(3, "Nvidia GeForce RTX 3080", 349521.00, "Placas de video")
const producto4 = new Producto(4, "Nvidia GeForce RTX 3090", 424623.00, "Placas de video")
const producto5 = new Producto(5, "MOTHER MSI MPG-Z390", 20355.00, "Motherboards")

//-----Primero producto
producto1.reponer(parseFloat(prompt("Ingresar cantidad a reponer de " + producto1.nombre)))
producto1.vender(50)
console.log(producto1);
//-----Segundo producto
producto2.reponer(parseFloat(prompt("Ingresar cantidad a reponer de " + producto2.nombre)))
producto2.vender(50)
console.log(producto2);
//-----Tercer producto
producto3.reponer(parseFloat(prompt("Ingresar cantidad a reponer de " + producto3.nombre)))
producto3.vender(50)
console.log(producto3);
//-----Cuarto producto
producto4.reponer(parseFloat(prompt("Ingresar cantidad a reponer de " + producto4.nombre)))
producto4.vender(50)
console.log(producto4);
//-----Quinto producto
producto5.reponer(parseFloat(prompt("Ingresar cantidad a reponer de " + producto5.nombre)))
producto5.vender(50)
console.log(producto5);



//Agregar los productos a un array, sumar el precio y decir el total

let agregarCarrito = prompt("Indicar numero de id: ")

const arrayCarrito = []

while (agregarCarrito != "ESC") {
    switch (agregarCarrito) {
        case "1":
            arrayCarrito.push(producto1.precio);
            break;
        case "2":
            arrayCarrito.push(producto2.precio);
            break;
        case "3":
            arrayCarrito.push(producto3.precio);
            break;
        case "4":
            arrayCarrito.push(producto4.precio);
            break;
        case "5":
            arrayCarrito.push(producto5.precio);
            break;
        default:
            alert("Ingresar un id valido")
    }
    agregarCarrito = prompt("Indicar numero de id: ")
}
console.log(arrayCarrito)

let total = 0
for (let i of arrayCarrito) total += i;

alert("Precio total a pagar: $" + total)
console.log(total)



//-----------------Filtro de precios y categorias

//----Precio
const arrayProductos = [producto1.precio, producto2.precio, producto3.precio, producto4.precio, producto5.precio];
let filtro = parseFloat(prompt("Ingresar precio minimo:"));

const filtro1 = arrayProductos.filter(rango => rango > filtro); 
const filtro2 = arrayProductos.filter(rango => rango < filtro); 

console.log(filtro1);
console.log(filtro2);

//----Categoria
const arrayNombres = [producto1.nombre, producto2.nombre, producto3.nombre, producto4.nombre, producto5.nombre]
let ingresarNombre = prompt ("Buscar nombre del producto: ")
const filtroCategoria = arrayNombres.filter(nombre => nombre.includes(ingresarNombre))

alert (filtroCategoria);




//----------------Ejercicio complementario

arrayProductos.sort((a, b) => a-b); //Orden ascendente 
alert("Orden menor a mayor: " + arrayProductos);

arrayProductos.sort((a, b) => b-a); //Orden descendente
alert("Orden mayor a menor: " + arrayProductos);

//Ordenar nombres recibidos por parametro (Ejercicio complementario)

const arrayComplementario = []
let nombres = prompt ("Ingresar nombres, si desea finalizar escribir 'ESC': ")

while (nombres != 'ESC') {
    arrayComplementario.push (nombres.toUpperCase());
    nombres = prompt ("Ingresar nombres, si desea finalizar escribir 'ESC': "); //Ingreso de nombres hasta que se canse
}
console.log(arrayComplementario);
arrayComplementario.sort(); //Orden de los nombres ingresados

alert ("Ingresó los siguientes nombres: " + arrayComplementario.join("\n")) //Resultado ordenado 