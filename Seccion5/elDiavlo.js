// Ruta del archivo data.json
const url = "./data.json"; // Cambiar por la ruta correcta
const reserva = [];
const room = [];
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

//generador de id
function generarGeneradorId() {
    return reserva.length + 1;
}


//funcion para crear reservas
function crearReserva(rooms, roomTypes) {
    const id = generarGeneradorId();
    const numeroHabitacion = parseInt(prompt("Ingresa el numero de habitacion que deseas reservar"));
    const fechaInicio = prompt("Ingrese fecha de inicio");
    const fechaFin = prompt("Ingrese fecha de finalizacion");
    
    const huesped = parseInt(prompt("¿Cuantos huespedes se alojaran?"));

    const room = rooms.find(function(room){
        return room.number === numeroHabitacion;
    })

    const capacityRoom = roomTypes.find((_room) => _room.id === room.roomTypeId );
    if( huesped > capacityRoom.capacity){
        alert("Esa habitacion nose puede mano, lea bien.")
        return {
            resultado: false
        }
    }

    if(room.availability){
        const _reserva = {
            id: id,
            numero: numeroHabitacion,
            fecha_inicio: fechaInicio,
            fecha_fin: fechaFin,
            huespedes: huesped
        }

        reserva.push(_reserva);
        return {
            resultado: true, 
            room: _reserva
        }
    }else{
        alert("No es posible realizar la reserva por que la habitacion no se encuentra disponible.")
        return {
            resultado: false
        }
    }

}

// Llamar a la función para cargar y mostrar el contenido de data.json
cargarYMostrarData()
    .then(({ rooms, roomTypes }) => {
    // Mostrar el contenido de las habitaciones después de cargar los datos
    alert(
        rooms
            .map((room) => {
            return `\nRoom Number: ${room.number} (${
                roomTypes.find((type) => type.id === room.roomTypeId).name
            })`;
            })
            .join(", ")
    );
    let x = crearReserva(rooms, roomTypes);
    while(!x.resultado){
        x = crearReserva(rooms, roomTypes);
    };
    alert(`Tu reserva ha sido creada ${JSON.stringify(x.room)}`)
    })
    .catch((error) => {
    console.error("Error al manejar la promesa:", error);
    });





