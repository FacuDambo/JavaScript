/* let nombre = prompt ("Ingresar nombre");
//VERIFICAR
if(nombre == "Harry") {
    alert('Confirmado: Se ingresó Harry');
}else{
    alert('ERROR: NO SE INGRESÓ HARRY');
}
//
let numero = prompt("Ingresar numero");
if(parseInt(numero)){
    alert("ES UN NUMERO")
}
 */

//----------PRIMER PARTE DEL TRABAJO
//ASIGNAR NUMERO Y PEDIRLO
let numero = prompt ("Ingresar un numero");
//VER SI ES MAYOR O MENOR
if (numero >= 1000) {
    alert ("El numero es igual o mayor a 1000")
}else{
    alert ("El numero es menor a 1000")
}

//----------SEGUNDA PARTE DEL TRABAJO
//PEDIR EL TEXTO
let texto = prompt ("Escribir Hola")
//VER SI LO ESCRIBIO O NO
if ((texto == "Hola") || (texto == "hola") || (texto == "HOLA")) { //Usé las 3 opciones que seguramente mas se usen
    alert ("Escribiste 'Hola' :D")
}else{
    alert ("No escribiste 'Hola' :(")
}

//----------TERCER PARTE DEL TRABAJO
//PEDIR NUMERO
let segundoNumero = prompt ("Ingresar otro numero");
//VER SI ESTA ENTRE 10 Y 50
if ((segundoNumero >= 10) && (segundoNumero <= 50)) {
    alert ("El numero ingresado está entre 10 y 50")
}else {
    alert ("El numero es menor a 10 o mayor a 50")
}
