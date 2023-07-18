// Esto se inyecta como una propiedad en el objeto globalThis
var persona1 = {
    nombre: 'Persona del script 1'
}
// Se puede redeclarar
var persona1 = {
    nombre: 'Persona del script 1 segunda vez declarado'
}

console.log(PI);

// Esto no se inyecta en globalThis. Es accesible solo en el scope del script (HTML)
let libro1 = {
    name: 'Libro del script 1'
}

function test(persona1) {
   console.log(`persona1 en la function test: ${persona1}`);
   console.log(`this.persona1 en la function test: ${this.persona1}`);
   console.log(`globalThis.persona1 en la function test: ${globalThis.persona1}`);
}

function test2(p1) {
    console.log(`persona1 en la function test2: ${p1}`);
    console.log(`globalThis.persona1 en la function test2: ${persona1}`);
 }
 
test('Hola 1');
test2('Hola 2');

console.log('Estamos fuera de la function test()');
console.log(persona1);