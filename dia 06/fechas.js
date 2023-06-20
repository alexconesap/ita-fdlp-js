function fecha() {
  return new Date();
}

function dimeElAnyo() {
  return fecha().getFullYear();
}

function diasDelMes(m, anyo) {
  let a = `Year: ${anyo}, Month: ${m}`;
  return 0;
}

function dimeElAnyoPorPrompt(texto) {
  let respuesta = prompt(texto);
  return respuesta;
}

function dimeUnValor(titulo) {
  let respuesta = prompt(titulo);
  return respuesta;
}

console.log(fecha());
