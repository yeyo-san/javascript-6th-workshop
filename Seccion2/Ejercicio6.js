console.log("Mensaje 1: Inmediatamente.");
setTimeout(() => {
    console.log("Mensaje 2: con timeout de 0 segundos");
}, 0);

setTimeout(() => {
    console.log("Mensaje 3: Con timeout de 1 segundo");
}, 1000);

//R: hay un pequeño retraso, casi imperceptible ya que set time out es una macro tarea


