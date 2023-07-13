let estu1 = {
  name: "Lucian",
  age: 21,
  gender: "M",
  walk: function () {
    console.log("El caminante " + this.name);
  },
};

const estu2 = {
  name: "Maria",
  age: 18,
  gender: "F",
  walk: function () {
    console.log("El caminante " + this.name);
  },
};

let circulo = {
  position: { x: 10, y: 20 },
  radius: 20,
  draw: function () {
    console.log(
      `Draw a circle of radius ${this.radius} at x ${this.position.x} and y ${this.position.y}`
    );
  },
};

let c = JSON.stringify(circulo);
// c es un string
// '{"position":{"x":10,"y":20},"radius":20}'
console.log(circulo.position);
console.log(circulo.position.x);
console.log(circulo["position"]);
// {x: 10, y: 20}
