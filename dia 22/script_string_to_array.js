// Separa cada palabra como un elemento del array
let nombres = 'Lucian|Michael|Maurice|Ivan'.split('|');

// Obtendriamos el mismo resultado
let michael1 = Array.from( 'Michael');
let michael2 = 'Michael'.split('');

console.log(nombres);
console.log(michael1);
console.log(michael2);