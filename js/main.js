
const cotizarDolar = numero => numero * 1125;
//console.log(`Resultado: ${cotizarDolar(numero)} dólares`)
const cotizarEuro = numero => numero * 1;
const cotizarReal = numero => numero * 2;
const cotizarLibra = numero => numero * 3;

let opcion = parseInt(prompt("Elija una opción a cotizar: \n 1-Dólar \n 2-Euro \n 3-Real \n 4-Libra \n 5-Salir"));

while (opcion !== 5) {
    let numero;
    switch (opcion) {
        case 1:
            numero = parseInt(prompt("Ingrese el monto en pesos para convertir a dólares:"));
            alert(`Resultado: ${cotizarDolar(numero)} dólares`);
            break;
        case 2:
            numero = parseInt(prompt("Ingrese el monto en pesos para convertir a euros:"));
            alert(`Resultado: ${cotizarEuro(numero)} euros`);
            break;
        case 3:
            numero = parseInt(prompt("Ingrese el monto en pesos para convertir a reales:"));
            alert(`Resultado: ${cotizarReal(numero)} reales`);
            break;
        case 4:
            numero = parseInt(prompt("Ingrese el monto en pesos para convertir a libras:"));
            alert(`Resultado: ${cotizarLibra(numero)} libras`);
            break;
        default:
            alert("Opción incorrecta");
    }
    opcion = parseInt(prompt("Elija una opción a cotizar: \n 1-Dólar \n 2-Euro \n 3-Real \n 4-Libra \n 5-Salir"));
}

alert("Finalizando programa, presione Enter para cerrar");
