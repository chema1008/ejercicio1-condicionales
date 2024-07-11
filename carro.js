/* vehiculo */
var tipoVehiculo = prompt("Ingrese el tipo de vehículo (coche, moto, autobús):");

/* distancioa recorrida */
var distanciaRecorrida = parseFloat(prompt("Ingrese la distancia recorrida en kilómetros:"));

/* litros */
var litrosConsumidos = parseFloat(prompt("Ingrese los litros consumidos:"));

/*  precios por kilómetro dependeindo el tipo de vehículo */
var precioKm;
if (tipoVehiculo.toLowerCase() === "coche") {
    precioKm = 0.20;
} else if (tipoVehiculo.toLowerCase() === "moto") {
    precioKm = 0.10;
} else if (tipoVehiculo.toLowerCase() === "autobús") {
    precioKm = 0.5;
} else {
    console.log("Tipo de vehículo inválido");
}

//* costo total */
var costoTotal = precioKm * distanciaRecorrida;
if (litrosConsumidos >= 0 && litrosConsumidos <= 100) {
    costoTotal += 5;
} else if (litrosConsumidos > 100) {
    costoTotal += 10;
}

console.log("El total a pagar es: " + costoTotal + " MXN");