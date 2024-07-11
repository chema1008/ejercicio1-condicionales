
let calificacion = parseFloat(prompt("Ingresa tu calificación (entre 1 y 10):"));


if (calificacion >= 1 && calificacion <= 10) {

    if (calificacion < 6) {
        console.log("Reprobado ):");
    } else if (calificacion >= 6 && calificacion <= 8) {
        console.log("Regular, puedes mejorar");
    } else if (calificacion === 9) {
        console.log("¡Bien!");
    } else {
        console.log("Excelente, sigue asi");
    }
} else {
    console.log("La calificación debe estar entre 1 y 10");
}