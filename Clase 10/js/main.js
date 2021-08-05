const productos = [];

//Llamar a los productos guardados en local storage
if ("productos" in localStorage) {
    const guardados = JSON.parse(localStorage.getItem("productos"))
    for (const producto of guardados) {
        productos.push(new Producto(producto.id, producto.nombre, producto.precio, producto.categoria, producto.precioSpan, producto.img));
    }
    console.log(guardados);
}

for (const producto of productos) {
    //Crear una caja 
    let divProductos = document.createElement("div");
    divProductos.classList.add("productos-box");
    //Agregarle contenido a la caja
    divProductos.innerHTML = `<img src="imagenes/productos/${producto.img}.png"></img> 
                            <h3>${producto.nombre}</h3> 
                            <h4>$${producto.precio}<span>$${producto.precioSpan}</span></h4> 
                            <button class="btnCompra" id="${producto.id}"><i class="bi bi-cart"></i>Agregar al carrito</button>`
    //¿Donde va la caja?
    document.getElementById("productos-grid").appendChild(divProductos)
}

const botones = document.getElementsByClassName("btnCompra");

for (const boton of botones) {
    boton.addEventListener("click", agregarCarrito)
}

/* ---------------------------- FUNCIONALIDAD DEL CARRITO ---------------------------------- */

//AGREGAR PRODUCTOS AL CARRITO
const carrito = [];

function agregarCarrito () {
    const select = productos.find (producto => producto.id == this.id);
    carrito.push(select)
    localStorage.setItem("carrito", JSON.stringify(carrito));
    const carritoString = document.getElementById("carritoFinal");
    carritoString.innerHTML = '';
    for (const producto of carrito) {
        let objeto = document.createElement("div")
        objeto.classList.add("carrito-fila")
        objeto.innerHTML = `<div class="carrito-producto carrito-columna">
                                <img class="carrito-producto-img" src="imagenes/productos/${producto.img}.png" width="50" height="50">
                                <span class="carrito-producto-titulo">${producto.nombre}</span>
                            </div>
                                <span class="carrito-precio carrito-columna">$${producto.precio}</span>
                                <div class="carrito-cantidad carrito-columna">
                                    <input class="carrito-input-cantidad" type="number" value="1">
                                    <button class="btn btn-danger" type="button">REMOVER</button>
                            </div>`;
        carritoString.appendChild(objeto);
        objeto.getElementsByClassName("btn-danger")[0].addEventListener('click', borrarProductos)
    }
    console.log(carrito);
}


let valorProducto = document.getElementsByClassName('carrito-precio') //NO SE POR QUE PERO ESTO FUNCIONA SOLO CUANDO SE BORRA UN PRODUCTO, NO SE ACTUALIZA AL AGREGAR PRODUCTOS
for (const producto of carrito) {
    if (valorProducto.innerText == producto.precio) {
        actualizarCarrito ()
    }
}


/* VARIABLE BORRAR PRODUCTOS */ //ESTO BORRA EL HTML, PERO NO SE BORRA EL ARRAY, AL AGREGAR OTRO PRODUCTO SE AGREGA OTRO ELEMENTO AL ARRAY Y SE VUELVE A ACTUALIZAR EL CARRITO (ACORDATE DE ACTUALIZARLO)
let botonBorrarProductos = document.getElementsByClassName ("btn-danger")
console.log(botonBorrarProductos);
for (let i = 0; i < botonBorrarProductos.length; i++) {
    let boton = botonBorrarProductos[i];
    boton.addEventListener('click', borrarProductos)
}

/* VARIABLE PARA INPUT DE CANTIDAD */  //ESTO NO FUNCIONA CUANDO AGREGO ELEMENTOS NUEVOS AL ARRAY DE CARRITO (NO ENTIENDO POR QUÉ NO FUNCIONA YA QUE SE SUPONE QUE ES HTML)
let inputCantidad = document.getElementsByClassName("carrito-input-cantidad")
for (let i = 0; i < inputCantidad.length; i++) {
    let input = inputCantidad[i]
    input.addEventListener('change', cambioDeCantidad)
}


/* FUNCION PARA EL INPUT Y LA CANTIDAD DE LOS PRODUCTOS */
function cambioDeCantidad (event) {
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    actualizarCarrito ()
}

/* FUNCION BORRAR PRODUCTOS */
function borrarProductos(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    actualizarCarrito ()
}

/* FUNCION PRECIO TOTAL DEL CARRITO */
function actualizarCarrito () {
    let contenedor = document.getElementsByClassName('offcanvas-body') [0]
    let carritoFila = contenedor.getElementsByClassName('carrito-fila')
    let total = 0
    for (let i = 0; i < carritoFila.length; i++) {
        let filas = carritoFila[i]
        let precioDelElemento = filas.getElementsByClassName("carrito-precio")[0]
        let cantidadDelElemento = filas.getElementsByClassName("carrito-input-cantidad")[0]
        let precio = parseFloat(precioDelElemento.innerText.replace('$', ""))
        let cantidad = cantidadDelElemento.value
        total = total + (precio * cantidad)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('carrito-precio-total')[0].innerText = '$' + total;
}