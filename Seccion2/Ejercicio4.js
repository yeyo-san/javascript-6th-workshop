console.log("Intentando llamar a 'funcionDeclarada' antes de su declaración:");
try {
    console.log(funcionDeclarada());
} catch (error) {
    console.log("Error:", error.message);
}

console.log("Intentando llamar a 'funcionExpresada' antes de su declaración:");
try {
    console.log(funcionExpresada());
} catch (error) {
    console.log("Error:", error.message);
}

// Declaración de una función declarada
function funcionDeclarada() {
    return "Función declarada ha sido llamada.";
}

// Declaración de una función expresada
const funcionExpresada = function () {
    return "Función expresada ha sido llamada.";
};

console.log("Llamando a 'funcionDeclarada' después de su declaración:");
console.log(funcionDeclarada());

console.log("Llamando a 'funcionExpresada' después de su declaración:");
console.log(funcionExpresada());



//Preguntas y respuestas

//¿Qué sucedió cuando intentaste llamar a las funciones antes de su declaración?
// R: La funcion declarada fue llamada con exito antes de su declaracion, en cambio la expresada no, esto debido al hoisting

//¿Cómo difieren los resultados entre la función declarada y la función expresada?
// R: En que las expresadas solo pueden ser llamadas despues de declararse, las funciones declaradas pueden ser llamadas en cualquier parte del scop asi este declarada mas adelante en el codigo sin salirse del scop

//¿Qué indica esto sobre cómo el JavaScript maneja estas dos diferentes declaraciones de funciones?
// R: Indica que las expresadas no pueden ser llamadas en el scop antes de su declaracion. las declaradas si pueden hacerlo.