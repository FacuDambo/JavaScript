$(document).ready(function () {
    //OBTENER INFO DE STORAGE (ESTO ES PARA QUE SE GUARDE LO QUE SE AGREGA AL CARRITO EN LOCAL STORAGE)
    if ("carrito" in localStorage) {
        const datosGuardados = JSON.parse(localStorage.getItem("carrito"));
        if(datosGuardados.length > 0){
            for (const producto of datosGuardados) {
                carrito.push(new Producto(producto.id, producto.nombre, producto.precio, producto.categoria, producto.precioSpan, producto.img, producto.cantidad))
            }
            carritoUI(carrito)
        }
    }

    //LLAMADA AL JSON DE PRODUCTOS
    const URLJSON = "../data/producto.json"
    $.get(URLJSON, function (datos, estado) {
        if(estado == "success"){
            for (const producto of datos) {
                productos.push(new Producto(producto.id, producto.nombre, producto.precio, producto.categoria, producto.precioSpan, producto.img, producto.cantidad))
            }
        }
        console.log(productos);
        productosUI(productos, "#productos-grid"); 
    })
})


window.addEventListener('load', () => {
    $('#productos-grid').fadeIn('slow');
})

//Filtro de categorias 
selectionUI(categorias, "#filtroCategorias");

$('#filtroCategorias').change(function (e) { 
    const valor = e.target.value;
    console.log(valor);
    $('#productos-grid').fadeOut(400, function () {
        if(valor == 'TODOS') {
            productosUI(productos, '#productos-grid');
        } else {
            const filtro = productos.filter(p => p.categoria == valor);
            productosUI(filtro, '#productos-grid')
        }

        $("#productos-grid").fadeIn()
    })
});