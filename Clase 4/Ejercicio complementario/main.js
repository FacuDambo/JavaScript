let ingreso = prompt("Ingresar, si desea salir escriba ESC")

while (ingreso != "ESC") {
    function pedirProducto() {
        return prompt("Ingresar el nombre del producto")
    }

    function tipoProducto() {
        return prompt("Ingresar categoria del producto")
    }

    let producto = pedirProducto();
    let tipo = tipoProducto();

    console.log(producto);
    console.log(tipo)

    function asignacionProducto(producto, categoria) {
        return "Nombre del producto: " + producto + "\n" + "Categoria: " + categoria;
    }

    alert(asignacionProducto(producto, tipo))

    ingreso = prompt("Volver a ingresar, si desea salir escriba ESC")
}


//Calcular iva 

let ingresarMonto = parseInt(prompt("Ingresar monto:")) 

const sumarIva = (monto, iva) => monto + iva; 
const precioIva = impuesto => impuesto * 0.21;

let calcularPrecio = sumarIva (ingresarMonto, precioIva(ingresarMonto)); 

alert("El precio total es: $" + calcularPrecio)


//Calcular impustos + descuantos

let juego = 60; 

const sumarImpuesto = (juego, impuesto2) => juego + impuesto2;
const restarCupon = (juego, descuento) => juego - descuento;
const calcularImpuesto = impuesto => impuesto * 0.3;

let cupon = 5

let precioTotal = restarCupon (sumarImpuesto(juego, calcularImpuesto(juego)), cupon);
alert ("El precio total va a ser $" + precioTotal + " debido a los impuestos adheridos a compras al exterior")