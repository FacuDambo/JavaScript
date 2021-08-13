$(document).ready(function() {
    //OBTENER INFO DE STORAGE (ESTO ES PARA QUE SE GUARDE LO QUE SE AGREGA AL CARRITO EN LOCAL STORAGE)
    if("carrito" in localStorage) {
        const datosGuardados = JSON.parse(localStorage.getItem("carrito"));
        for (const literal of datosGuardados) {
            carrito.push(literal)
        }
    }

    let botones = $('.btnCompra')
    for (const boton of botones) {
        boton.onclick = agregarCarrito
    }

    /* VARIABLE PARA INPUT DE CANTIDAD */  //ESTO NO FUNCIONA CUANDO AGREGO ELEMENTOS NUEVOS AL ARRAY DE CARRITO (NO ENTIENDO POR QUÉ NO FUNCIONA YA QUE SE SUPONE QUE ES HTML)
    let inputCantidad = document.getElementsByClassName("carrito-input-cantidad")
    for (let i = 0; i < inputCantidad.length; i++) {
        let input = inputCantidad[i]
        input.addEventListener('change', cambioDeCantidad)
    }
})

/* ---------------------------- GENERACION DE PRODUCTOS ---------------------------------- */

const productos = [];

//Llamar a los productos guardados en local storage
if ("productos" in localStorage) {
    const guardados = JSON.parse(localStorage.getItem("productos"))
    for (const producto of guardados) {
        productos.push(new Producto(producto.id, producto.nombre, producto.precio, producto.categoria, producto.precioSpan, producto.img));
    }
    console.log(guardados);
}

productosUI(productos, "#productos-grid");

function productosUI (productos, id) { //ESTO FUNCIONA NO TOCAR!!
    for (const producto of productos) {
        $(id).append(`<div class="productos-box">
                        <img src="imagenes/productos/${producto.img}.png"></img> 
                        <h3>${producto.nombre}</h3> 
                        <h4>$${producto.precio}<span>$${producto.precioSpan}</span></h4> 
                        <button class="btnCompra" id="${producto.id}"><i class="bi bi-cart"></i>Agregar al carrito</button>
                    </div>`)
    }
}

/* ---------------------------- FUNCIONALIDAD DEL CARRITO ---------------------------------- */

//AGREGAR PRODUCTOS AL CARRITO
let carrito = [];

//PRUEBA
function agregarCarrito(e) {
    e.preventDefault();
    const idProducto = e.target.id;
    const select = productos.find(productos => productos.id == idProducto);
    carrito.push(select);
    carritoUI(carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito))
    actualizarCarrito()
    console.log(carrito);
}

function carritoUI(productos) {
    $(".rounded-pill").html(productos.length);
    $('#carritoFinal').empty();
    for (const producto of productos) {
        $('#carritoFinal').append(registroCarrito(producto))
    }
    
    $('.btn-danger').on('click', eliminarCarrito);
}

function eliminarCarrito (e) {
    carrito = carrito.filter(p => p.id != e.target.id)
    carritoUI(carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito))
    actualizarCarrito ()
}

function registroCarrito(productos){
    return `<div class="carrito-fila">
                <div class="carrito-producto carrito-columna">
                    <img class="carrito-producto-img" src="imagenes/productos/${productos.img}.png" width="50" height="50">
                    <span class="carrito-producto-titulo">${productos.nombre}</span>
                </div>
                    <span class="carrito-precio carrito-columna">$${productos.precio}</span>
                <div class="carrito-cantidad carrito-columna">
                    <input class="carrito-input-cantidad" type="number" value="1">
                    <button id="${productos.id}" class="btn btn-danger" type="button">REMOVER</button>
                </div>
            </div>`
}
console.log(carrito);


/* FUNCION PARA EL INPUT Y LA CANTIDAD DE LOS PRODUCTOS */
function cambioDeCantidad (event) {
    let input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
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