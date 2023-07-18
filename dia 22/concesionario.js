let vehicle1 = {
   marca: "Toyota",
   model: "Corolla",
   any_fabricacio: 2020,
   cilindrada: 2500,
}

let vehicle2 = {
    marca: "Ferrari",
    model: "Testarrossa",
    any_fabricacio: 1980,
    cilindrada: 1500
}

// NO Podemos usar una arrow!
let detalles = function () {
    let resultado = `Marca: ${this.marca}, Model: ${this.model}, Any de fabricació: ${this.any_fabricacio}`;

    if (this.cilindrada > 2000) {
       return `${resultado}, Gran Cilindrada`
    } else {
       return resultado;
    }
}

// Esto es una propiedad del objeto
vehicle1.muestraDetalles = detalles;

// Esto es una propiedad del Object al que pertenece vehicle2
vehicle2.__proto__.muestraDetalles = detalles;

// Anadimos una nueva propiedad sobre la marcha
vehicle1.color = 'Red';

console.log(vehicle1.muestraDetalles());
console.log(vehicle2.muestraDetalles());
