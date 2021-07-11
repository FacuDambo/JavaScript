/* let personaje = prompt("INGRESAR PERSONAJE");
let registrados = "LISTA DE PERSONAJES: \n";
while (personaje != "ESC") {
    registrados += personaje +"\n";
    personaje = prompt("INGRESAR OTRO PERSONAJE")
}
alert(registrados); */

//PRIMER PARTE DE LA ENTREGA
//PEDIR NUMERO MEDIANTE PROMPT
let numero = parseInt(prompt("Ingresar un numero"))
//CREAR BUCLE
for (let i = 1; i <= 6; i++) {
    let resultado = numero + i ;
    //DAR RESULTADO
    alert(numero + " + " + i + " = " + resultado)
} 

//SEGUNDA PARTE DE LA ENTREGA
//PEDIR TEXTO MEDIANTE PROMPT
let nombre = prompt("Ingresar nombre:")
//CREAR BUCLE
while (nombre != "ESC") {
    //MOSTRAR EL RESULTADO HASTA QUE SE ESCRIBA ESC
    alert ("El nombre ingresado es " + nombre);
    nombre = prompt("Ingresar otro nombre")
} 

//PARTE 3 DE LA ENTREGA
//PEDIR NUMERO MEDIANTE PROMPT
let numero2 = parseInt(prompt("Ingresar un numero"))
//CREAR BUCLE
for (let i = 1; i<= numero2; i++) {
    alert ("Hola");
}