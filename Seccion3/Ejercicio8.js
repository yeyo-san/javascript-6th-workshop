let loop = true;
alert("Bienvenido a tu contador, obviamente empiezas en 0.");
let _contador = 0;

while(loop){
    
    const contador = (function(){
        function incrementar(){
            return _contador++;
        }

        function decrementar(){
            return _contador--;
        }

        function valor(){
            return _contador;
        }

        return {
            incrementar,
            decrementar,
            valor
        }
    })();

    let optionU = parseInt(prompt(`
    ¿Que deseas hacer?:
    1- Incrementar
    2- Decrementar
    3- Mostrar valor`));

    switch(optionU){
        case 1:
            contador.incrementar();
            break;

        case 2:
            contador.decrementar();
            break;

        case 3:
            alert(contador.valor());
            break;

        default:
            alert("Lea bien valesita.");
            break;
    }

    let close = confirm("¿Deseas seguir iterando sobre el contador?");

    if(close){
        loop = true;
    } else {
        loop = false;
    }
}