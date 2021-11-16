let edad;
const nombre = "ALEXANDER";


function suma() {
    const NUMERO1 = 5;
    const NUMERO2 = 6;
    let resultado = NUMERO1 + NUMERO2;
    return resultado;
}


const esMayordeEdad = (edad) => {
    if(edad >= 18) {
        return "Es mayor de edad";
    } else {
        return "No es mayor de edad";
    }
}

const frutas = ['Mango', 'Pera', 'Manzana', 'Piña'];

for(let i=0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

frutas.forEach((elemento) => {
    console.log(elemento);
})

const frutasCadena = frutas.map((element, i) => {
    return element + "(" + i + ")"
}).join("-");


const buscarMango = frutas.filter(x => x == 'Mango');
console.log("Busquedad", buscarMango);


console.log(esMayordeEdad(16));

// celuweb-ap = apcw2018+
// Sala-Juntas = juntasCw

const suma2 = () => {
    const NUMERO1 = 5;
    const NUMERO2 = 6;
    let resultado = NUMERO1 + NUMERO2;
    return resultado;
}


const numeros = [4, 20, 50, 10, 45, 3, 12, 22, 31, 80, 100, 1002, 33, 17, 25, 200];
//OBTENER EL NUMERO MAYOR R// 1002
//OBTENER EL NUMERO MENOR R// 3
