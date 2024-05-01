// Ruta del archivo data.json
const url = "./data.json"; // Cambiar por la ruta correcta
const reserva = [];
// Función para cargar y mostrar el contenido de data.json
function cargarYMostrarData() {
  // Retorna una nueva promesa que se resuelve después del setTimeout
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Realiza la solicitud fetch dentro del setTimeout
        fetch(url)
        .then((response) => {
            if (!response.ok) {
            throw new Error("Error al cargar los datos.");
            }
            return response.json();
        })
        .then((data) => {
            console.log("Habitaciones:", data.rooms);
            console.log("Tipos de Habitaciones:", data.roomTypes);
            resolve(data); // Resuelve la promesa con los datos cargados
        })
        .catch((error) => {
            console.error(error);
          reject(error); // Rechaza la promesa si hay un error
        });
    }, 3000);
    });
}

// Llamar a la función para cargar y mostrar el contenido de data.json
cargarYMostrarData()
    .then(({ rooms, roomTypes }) => {
    // Mostrar el contenido de las habitaciones después de cargar los datos
    const userInput = prompt(
        "Ingrese el numero de habitacion a reservar: " +
        rooms
            .map((room) => {
            return `\nRoom Number: ${room.number} (${
                roomTypes.find((type) => type.id === room.type).name
            })`;
            })
            .join(", ")
    );
    // ... Continuar con la lógica de la app
    })
    .catch((error) => {
    console.error("Error al manejar la promesa:", error);
    });


function crearReserva() {
    const id = generarGeneradorId();
    const numeroHabitacion = parseInt(prompt("Ingresa el numero de habitacion que deseas reservar"));
    const fechaInicio = prompt("Ingrese fecha de inicio");
    const fechaFin = prompt("Ingrese fecha de finalizacion");
    const huesped = parseInt(prompt("¿Cuantos huespedes se alojaran?"));

    const searchRoom = rooms.find(function(room){
        return room.number === numeroHabitacion;
    }).availability

    if(searchRoom){
        const reserv = {
            id: id,
            numero: numeroHabitacion,
            fecha_inicio: fechaInicio,
            fecha_fin: fechaFin,
            huespedes: huesped
        }

        return reserva.push(reserv)
    }else{
        alert("No es posible realizar la reserva por que la habitacion no se encuentra disponible.")
    }
    function generarGeneradorId() {
        
        let id = 1; // Variable id se inicializa fuera de la función interna

        return function () {
            return id++; // Cada vez que se llama a la función, se incrementa id y se devuelve
        };
        }
}

crearReserva(rooms)