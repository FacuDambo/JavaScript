class Producto {
    constructor(id, nombre, precio, categoria, precioSpan) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.precioSpan = precioSpan;
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

const productos = [];
productos.push(new Producto(1, "NVIDIA GEFORCE RTX 3060", 184536.00, "Placas de video", 208648.00));
productos.push(new Producto(2, "NVIDIA GEFORCE RTX 3070", 253813.00, "Placas de video", 329957.00));
productos.push(new Producto(3, "NVIDIA GEFORCE RTX 3080", 349521.00, "Placas de video", 454377.00));
productos.push(new Producto(4, "NVIDIA GEFORCE RTX 3090", 424623.00, "Placas de video", 552010.00));
productos.push(new Producto(5, "MOTHER MSI MPG-Z390", 20355.00, "Motherboards", 26459.00));

for (const producto of productos) {
    //CREAR
    let divProductos = document.createElement("div");
    divProductos.classList.add("productos-box");
    //MODIFICAR INTERIOR
    divProductos.innerHTML = `<img src="logos e imagenes/productos/rtx-3060.png"></img> 
                            <h3>${producto.nombre}</h3> 
                            <h4>$${producto.precio}<span>$${producto.precioSpan}</span></h4> 
                            <button id="${producto.id}"><i class="bi bi-cart"></i>Agregar al carrito</button>`
    //AGREAGAR INTERFAZ
    document.getElementById("productos-grid").appendChild(divProductos)
}

//Vender y reponer

for (const producto of productos) {
    producto.reponer(parseInt(prompt("Ingresar cantidad a reponer de: " + producto.nombre)))
    producto.vender (50)
    console.log("NOMBRE: " + producto.nombre + "\n" + "CANTIDAD: " + producto.cantidad);
}



//-----------------Filtro de precios y categorias

//----Precio
let filtro = parseFloat(prompt("Ingresar precio minimo:"));

const filtro1 = productos.filter(rango => rango.precio > filtro);
const filtro2 = productos.filter(rango => rango.precio < filtro);

console.log(filtro1);
console.log(filtro2);


//----Categoria
let ingresarNombre = prompt("Buscar nombre del producto: ");

const filtroCategoria = productos.filter(name => name.nombre.includes(ingresarNombre.toUpperCase()));

console.log(filtroCategoria);
