// LA FILA DEL SUPER: QUEUE FIFO
let fila_super = [];
fila_super.push("Primera persona que arriba a la caixa");
fila_super.push("Segona persona");
fila_super.push("Tercera persona");
fila_super.push("Darrera persona");
console.log(fila_super);

fila_super.shift();
fila_super.shift();
console.log(fila_super);

fila_super.unshift("Una persona gran. La deixem passar.");
console.log(fila_super);
fila_super.shift();
fila_super.shift();

// STACK. DOCUMENTS APILATS. QUEUE LIFO
// Para llamadas a funciones que deben ir retornando, por ejemplo.
let pila = [];
pila.push("Primer document a la taula");
pila.push("Segon document posat al damunt");
pila.push("Tercer document posat al damunt");
pila.push("Darrer document posat a la pila");

console.log(pila);
pila.pop();
pila.pop();

console.log(pila);
