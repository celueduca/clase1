const calcularOperacion = () => {
    let resultado;
    let label = document.getElementById('labelResultado');
    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;
    const indice = document.getElementById("opciones").selectedIndex;

    if(indice == null || indice == 0){
        label.innerHTML= "Seleccione la operacion que desea realizar";
        }else{
            if(indice == 1){
                resultado = parseFloat(numero1)+parseFloat(numero2);
            }else if(indice == 2){
                    resultado = parseFloat(numero1)-parseFloat(numero2);
            }else if(indice == 3){
                    resultado = parseFloat(numero1)*parseFloat(numero2);
            }else if(indice == 4){
                    console.log(typeof numero2)
                    if(numero2 == "0"){
                        resultado = "No se puede dividir entre 0";
                    }else{
                        resultado = parseFloat(numero1)/parseFloat(numero2);
                    }
                }
                label.innerHTML= "Resultado: "+resultado
            }
        return false;

        console.log(resultado);
};
