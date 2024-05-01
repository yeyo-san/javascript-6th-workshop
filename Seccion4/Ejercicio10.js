console.log("Inicio del script");

// Macrotarea: setTimeout
setTimeout(() => {
    console.log("Macrotarea 1 second (setTimeout)");
}, 1000);

setTimeout(() => {
    console.log("Macrotarea 0 seconds (setTimeout)");
}, 0);

// Microtarea: Promesa
Promise.resolve()
    .then(() => {
    setTimeout(() => {
        console.log("Macrotarea (setTimeout) inside Microtarea 1");
        return "from micro 1";
    }, 0);
    })
    .then((message) => {
    console.log("Microtarea 2 (Promesa)");
    });

// Microtarea: Promesa
Promise.resolve()
    .then(() => {
    console.log("Microtarea 3 (Promesa)");
    })
    .then(() => {
    console.log("Microtarea 4 (Promesa)");
    });

console.log("Fin del script");


//preguntas//
// ¿Qué tareas se consideran macrotareas y cuáles son microtareas?
// R: macro tareas vendrian hacer los setTimeOut que aparecen en el codio, incluido el que esta incluido en la promesa, y las micro tareas son las promesas

//¿Cómo se relacionan las macrotareas y microtareas con el event loop?
// R: el evenloop primero pondra en el callstack las tareas que esten en el Microtask queue y despues las de la Task queue

//¿Qué sucede cuando una microtarea genera una nueva macrotarea dentro de ella?
// R: hace que el "then" que nos arroja la macro tarea se agregara a la task queue y se ejecutara despues de que terminen las micro tareas restantes


//¿Cómo se manejan las promesas y los setTimeout en relación con el event loop?
// R: Las promesas son micro tareas asi que el event loop las pasara al callback antes que los setTimeOut ya que estas son macro tareas