

const obtenerDatos = () => {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let Operacion = document.getElementById('Operacion').value;
    document.calculadora.resultado.value = operaciones(num1, num2, Operacion);
}

const operaciones = (num1, num2, Operacion) => {
    if(Operacion == "+"){
        let suma = num1 + num2;
        return suma;
    }
    if(Operacion == "-"){
        let resta = num1 - num2;
        return resta;
    }
    if(Operacion == "*"){
        let multiplicar = num1 * num2;
        return multiplicar;
    }else{
        let division = num1/num2;
        return division;
    }
}