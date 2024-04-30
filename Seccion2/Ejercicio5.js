function manejarAsincronia(callback, promise) {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(callback)
        }, 2000);

        setTimeout(() => {
            reject("Don't hola papi ")
        }, 2000);
    })

    myPromise
        .then((callback) => {
            callback();
        }).catch((err) => {
            console.error(err)
        })

}

function callback() {
    return console.log("Promesa cumplida, mensaje de callback enviado");
}

manejarAsincronia(callback, Promise)

