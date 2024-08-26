let nombre = prompt("Nombre:");
let cuenta = prompt("Los 7 primeros dígitos de número de cuenta:");

while (cuenta.length !== 7 || isNaN(cuenta)) {
    cuenta = prompt("Número de cuenta inválido. Por favor, ingresa un número de cuenta de 7 dígitos:");
}

let resultado = `${nombre}_${cuenta}`;
console.log(resultado);