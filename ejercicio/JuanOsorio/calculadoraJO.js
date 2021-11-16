const obtenerVariables = () => {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operador = document.getElementById('operador').value;
    document.cal.resultado.value = operaciones(num1, num2, operador);
}

const operaciones = (num1, num2, operador) => {
    if(operador == "+"){
        let suma = num1 + num2;
        return suma;
    }
    if(operador == "-"){
        let resta = num1 - num2;
        return resta;
    }
    if(operador == "*"){
        let multiplicar = num1 * num2;
        return multiplicar;
    }else{
        let division = num1/num2;
        return division;
    }
}