
const capturarDatos = () => {

    let operador = document.getElementById("operadores").value;
    let numeroUno = parseFloat(document.getElementById("numeroUno").value);
    let numeroDos = parseFloat(document.getElementById("numeroDos").value);

    console.log("El resultado es : " + resultado(operador,numeroUno,numeroDos));
    
}

const resultado = (operador , numeroUno , numeroDos) => {

    if(operador == "resta"){
        return resta(numeroUno , numeroDos);
    }
    if(operador == "suma"){
        return suma(numeroUno , numeroDos);
    }
    if(operador == "multiplicacion"){
        return multiplicacion( numeroUno , numeroDos );
    }
    if(operador == "division"){
        return division(numeroUno, numeroDos);
    }

}


const suma = (numeroUno , numeroDos) => {

    if(numeroUno != null && numeroDos != null){
        return numeroUno+numeroDos;
    }
}

const resta = (numeroUno , numeroDos) => {

    if(numeroUno != null && numeroDos != null){
        return numeroUno-numeroDos;
    }
}

const multiplicacion = (numeroUno , numeroDos)  => {

    if(numeroUno != null && numeroDos != null){
        return numeroUno*numeroDos;
    }
}

const division = (numeroUno , numeroDos) => {

    if(numeroUno != null && numeroDos != null){
        return numeroUno/numeroDos;
    }
}



