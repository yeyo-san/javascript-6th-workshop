// Ruta del archivo data.json
const url = "./data.json"; // Cambiar por la ruta correcta
const reserva = [];
//Variable que nos dara el inicio del programa para manejar reservas
let loop = true;
//Variable que nos dara inicio al programa para crear reservas
let _loop = true;

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
function crearReserva(rooms, roomTypes, reserva) {
    const id = generarGeneradorId();
    const nombreDeQuienRegistra = prompt("Dame el nombre del titular de la reserva: ").toLowerCase();
    const numeroHabitacion = parseInt(prompt("Ingresa el numero de habitacion que deseas reservar"));
    const fechaInicio = prompt("Ingrese fecha de inicio");
    const fechaFin = prompt("Ingrese fecha de finalizacion");
    const huesped = parseInt(prompt("¿Cuantos huespedes se alojaran?"));

    const room = rooms.find(function(room){
        return room.number === numeroHabitacion;
    })

    //Funcion expresada para evaluar si la habitacion cuenta con la capacidad de huespedes que pide el usario
    const capacityRoom = roomTypes.find((_room) => _room.id === room.roomTypeId );
    if( huesped > capacityRoom.capacity){
        alert("Esa habitacion nose puede mano, lea bien.")
        return {
            resultado: false
        }
    }

    //Condicional que evalua que la habitacion este disponible para terminar con la reserva
    if(!reserva.find((room) => room.numero === numeroHabitacion)){
        const _reserva = {
            id: id,
            titular: nombreDeQuienRegistra,
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


//Funcion para eliminar reservas
function deleteReservas(reservas){
    const _id = parseInt(prompt("Dame el id de la reserva que deseas eliminar:"));

    const _delete = reservas.find((room) => room.id === _id);
    console.log(_delete);

    if(!_delete){
        return false
    }else{
        reserva.splice(_delete, 1)
        return reserva
    }
}


//Funcion para mostrar reservas al usuario
function showReservasWithName(reserva){
    let nombre = prompt("Dame el nombre exacto del titular de la reserva.").toLowerCase();
    const _reserva  = reserva.filter((room) => room.titular === nombre);
    if(!_reserva){
        return false
    }else{
        return _reserva
    }
}

//Funcion para editar reservas 
function updateReservas(reserva) {
    let nombre = prompt("Dame el nombre exacto del titular de la reserva.").toLowerCase();
    const _reserva  = reserva.filter((room) => room.titular === nombre);
    console.log(_reserva);
    alert(JSON.stringify(_reserva));
    const _id = parseInt(prompt("Cual es el id de la reserva que deseas editar"));

    const editReserva = _reserva.find((room) => room.id === _id);

    if(!editReserva){
        return false
    }else{
        editReserva.fecha_inicio = prompt("Dame la nueva fecha del inicio del viaje.");
        editReserva.fecha_fin = prompt("Dame la nueva fecha del fin del viaje.");

        return editReserva
        
    }

}


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
            while(loop){
                let x = crearReserva(rooms, roomTypes, reserva);
                while(!x.resultado){
                    x = crearReserva(rooms, roomTypes, reserva);
                };
                alert(`Tu reserva ha sido creada ${JSON.stringify(x.room)}`)
                loop = confirm("¡Deseas crear otra reserva?")
            }
            while(_loop){
                let inputUser = parseInt(prompt(`
            Bienvenido al hotel "No pongan mas workshops"
            1.Mirar tus reserrvas por tu nombre.
            2.Actualizar reservas.
            3.Eliminar reservar.
                `));
                switch(inputUser){
                    case 1:
                        let show = showReservasWithName(reserva);
                        if(show.length === 0){
                            alert("No hay reservas por tu nombre");
                        }else{
                            alert(JSON.stringify(show))
                        }    
                        break;
                        
                    case 2:
                        const update = updateReservas(reserva);
                        alert("Asi quedo tu reserva" + JSON.stringify(update))
                        break;
            
                    case 3:
                        let delelte = deleteReservas(reserva);
                        if(!delelte){
                            alert("El id ingresado no coincide con ninguna reserva.")
                        }else{
                            alert("Reserva eliminada con exito.")
                        }
                        break;
                    
                    default:
                        alert("Lea bien papi");
                        break;
                
                }
            
                _loop = confirm("¿Deseas seguir en el menu del hotel?");
            }
            
            })
            .catch((error) => {
            console.error("Error al manejar la promesa:", error);
            });







