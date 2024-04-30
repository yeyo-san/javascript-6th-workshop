function crearSumador(num, num2, num3, num4){
    return function(num5){
        return num2 + num + num3 + num4 + num5
    }
}

const sumarCinco = crearSumador(5,10,3.14,2)(3);
console.log(sumarCinco);