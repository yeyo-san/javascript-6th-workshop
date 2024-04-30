const respuestaU = prompt(`(1)console.log("Inicio del script");

setTimeout(() => {
  (2)console.log("Primer setTimeout");
}, 0);

setTimeout(() => {
  (3)console.log("Segundo setTimeout");
}, 0);

Promise.resolve("Promesa resuelta").then((4)console.log);

(5)console.log("Fin del script");

¿En que orden crees que se imprimiran los datos por consola? : ejemplo(1,2,3,4,5)`);


const ordenU = respuestaU.split(",");
console.log(ordenU);
const ordenCorrecto = ["1","5","4","2","3"];

if(ordenU[0] === ordenCorrecto[0]){
    if(ordenU[1] === ordenCorrecto[1]){
        if(ordenU[2] === ordenCorrecto[2]){
            if(ordenU[3] === ordenCorrecto[3]){
                if(ordenU[4] === ordenCorrecto[4]){
                    alert("¡Muy bien, haz acertado a la perfeccion!")
                }else{
                    console.log("Recuerda que 'setTimeOut' es una macro tarea, por ende iran despues de las micro tareas segun su orden");
                }
            }else{
                console.log("Recuerda que 'setTimeOut' es una macro tarea, por ende iran despues de las micro tareas segun su orden, fallaste en adivinar la cuarta posicion");
            }
        }else{
            console.log("Recuerda que las promesas son micro tareas y se ejecutaran primero que las macro tareas, fallaste en adivinar la tercera posicion");
        }
    }else{
        console.log("Recuerda que primero se mostraran los 'console.log' en cascada debido al funcionamiento del evenloop, fallaste en adivinar la segunda posicion");
    }
}else{
    console.log("Recuerda que primero se mostraran los 'console.log' en cascada debido al funcionamiento del evenloop, fallaste en adivinar la primera posicion");
}

