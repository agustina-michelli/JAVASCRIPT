let nombre = prompt ("Ingrese su nombre")
let documento = prompt ("Ingrese su numero de documento")


const servicios = [
    ["Manicuria semipermanente", 10000],
    ["Esculpidas en el", 15000],
    ["Soft gel", 15000],
    ["Belleza de pies", 10000],
    ["Tratamiento facial", 20000],
    ["Laminado de cejas", 10000],
    ["Perfilado de cejas", 8000],
];

let saldoFinal = 0;

const pagoConTarjeta = true; // si el false lleva a la pagina de pago directo

for (const servicio of servicios) {
    let precio = servicio[1];

    if (pagoConTarjeta) {
        precio *= 1.10; // Incrementa el precio en un 10%
    }

    saldoFinal += precio;

    console.log(`Servicio: ${servicio[0]} - Precio final: $${precio.toFixed(2)}`);
}

console.log("El saldo final es de: $" + saldoFinal.toFixed(2));