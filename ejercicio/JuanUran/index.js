const resultado = (numeroUno, numeroDos, operador) => {
    let resul = 0;
    if (operador == "+") {
        resul = numeroUno + numeroDos;
    } else if (operador == "-") {
        resul = numeroUno - numeroDos;
    } else if (operador == "*") {
        resul = numeroUno * numeroDos;
    } else if (operador == "/") {
        resul = numeroUno / numeroDos;
    }

    return resul;
}

function calcularResultado() {

    let numeroUno = parseFloat(document.getElementById("numeroUno").value);

    let numeroDos = parseFloat(document.getElementById("numeroDos").value);
    let operador = document.getElementById("operadores").value;

    let mensaje = "El resultado de la operacion es: ";

    alert("El resultado es: "+  resultado(numeroUno, numeroDos, operador)); 

}
