//--------------Calcular el valor de dos productos
let precioProducto1 = parseInt(prompt("Ingresar el precio del producto 1: "));
let precioProducto2 = parseInt(prompt("Ingresar el precio del producto 2: "));

function ingresarProductos(producto1, producto2) {
    return alert("El total de los productos es " + (producto1 + producto2))
}

ingresarProductos(precioProducto1, precioProducto2);


//--------------------Calcular precio en cuotas 

//Valor del producto
let primerProducto = 33960;
let ingresarCuotas = prompt("Elegir la cantidad de cuotas sin interes a pagar (3/6/12/18): ");
//Ver la cantidad de cuotas que se eligieron
while (ingresarCuotas != "ESC") {
    switch (ingresarCuotas) {
        case "3":
            alert("Pagaras en 3 cuotas sin interes de: " + "$" + (primerProducto / 3))
            break;
        case "6":
            alert("Pagaras en 6 cuotas sin interes de: " + "$" + (primerProducto / 6))
            break;
        case "12":
            alert("Pagaras en 12 cuotas sin interes de: " + "$" + (primerProducto / 12))
            break;
        case "18":
            alert("Pagaras en 18 cuotas sin interes de: " + "$" + (primerProducto / 18))
            break;
        default:
            alert("Por favor ingresar uno de los siguientes numeros: (3/6/12/18)")
            break;
    }
    ingresarCuotas = prompt("Elegir la cantidad de cuotas sin interes a pagar (3/6/12/18): ");
} 

//Forma mas simplificada para lo anterior (lo malo es que se puede poner cualquier valor)
function cuotas (primerValor, segundoValor) {
    resultado = primerValor / segundoValor
}

function mensaje (mensaje) {
    alert ("Vas a pagar en " + ingresarCuotas + " cuotas sin interes de " + "$" + mensaje);
}

cuotas (primerProducto, ingresarCuotas)
mensaje (resultado) 
