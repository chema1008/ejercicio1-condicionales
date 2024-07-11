/*  Solicitar tres números al usuario */
var numero1 = parseFloat(prompt("Ingresa el primer número:"));
var numero2 = parseFloat(prompt("Ingresa el segundo número:"));
var numero3 = parseFloat(prompt("Ingresa el tercer número:"));

/*  Comparar los tres números y mostrar el mayor */
if (numero1 > numero2 && numero1 > numero3) { 
    console.log(numero1 + " es el número mayor");
} else if (numero2 > numero1 && numero2 > numero3) {
    console.log(numero2 + " es el número mayor");
} else if (numero3 > numero1 && numero3 > numero2) {
    console.log(numero3 + " es el número mayor");
} else {
    console.log("Hay dos números iguales");
}