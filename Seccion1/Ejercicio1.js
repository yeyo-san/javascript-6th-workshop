alert(`// Global Scope\n
var globalVariable = "Soy una variable global.";\n

function testScope() {\n
  // Function Scope\n
  var functionVariable = "Soy una variable local.";\n

  if (true) {\n
    // Block Scope\n
    let blockVariable = "Soy una variable de bloque.";\n
    console.log("Dentro del bloque:", blockVariable);\n
  }\n

  console.log("Dentro de la función:", functionVariable);\n
}\n

console.log("Fuera de la función:", globalVariable);\n
testScope();\n`)

const questionU1 = prompt(`
¿Crees que es posible acceder a la variable "GlobalVariable" en cualquier partes del codigo? : (si/no)`).toLowerCase();

const questionU2 = prompt(`
¿Crees que es posible acceder a la variable "functionVariable" en cualquier partes del codigo? : (si/no)`).toLowerCase();

const questionU3 = prompt(`
¿Crees que es posible acceder a la variable "blockVariable" en cualquier partes del codigo? : (si/no)`).toLowerCase();


if(questionU1 === "si"){
    alert("Estas en lo correcto, las variables declaradas en el scope global se pueden usar en diferentes parte de nuestro programa");
}else{
    alert("Estas equivocado, las variables declaradas en el scope global se pueden usar en diferentes parte de nuestro programa");
}

if(questionU2 === "si"){
    alert("Estas equivocado, la variable `functionVariable` solo puede ser accedida en el scope de la funcion `testScope` por que es una variable local");
}else{
    alert("Estas en lo correcto, la variable `functionVariable` solop puede ser accedida en el scope de la funcion `testScope` por que es una variable local");
}

if(questionU3 === "si"){
    alert("Estas en equivocado, la variable 'blockVariable' solo puede ser accedida en el if planteado, ya que es una variable de bloque");
}else{
    alert("Estas en lo correcto, la variable 'blockVariable' solo puede ser accedida en el if planteado, ya que es una variable de bloque");
}


