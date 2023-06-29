console.log("Hello World 1!");
document.getElementById("texto1").innerHTML = "Hola!";
console.log("Hello World 2!");
console.log("Hello World 3!");
//console.log(`Altura en este instante de carga contiene '${altura}'`);

function verificar() {
  console.log("Llamamos a verificar()");
  let la_altura = document.getElementById("altura").value;
  if (la_altura > 50) {
    console.log("M'as alto de 50cm");
  } else {
    console.log("Menos de 50cm");
  }
  console.log("Salgo de verificar()");
}

function promptear() {
  let una_altura = prompt("Dame una altura");
  if (una_altura > 50) {
    alert("Mas de 50");
  } else {
    alert("Menos de 50");
  }
}

function verificarNombre() {
  let n = document.getElementById("nombre").value;
  console.log(n);
  n = n.trim().toLowerCase();

  if (n == "alex") {
    alert("Has dicho que te llamas Alex!!!");
  } else if (n == "carolina") {
    alert("Hey Carolina!!!");
  } else {
    alert("Cualquier otra cosa: " + n);
  }
  console.log("Salgo");
}

// Esto se ejecuta al cargar la p'agina
// verificar();
// promptear();
// verificar();
