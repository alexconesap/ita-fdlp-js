// Class son templates / estructuras / plantillas
//   Objetos son instancias de la clase

// OOP - POO
//   Inheritance = Herencia
//   Abstraction & Encapsulation = Abstracci'on - Encapsulamiento
//   Polymorphism - Polimorfismo

class Animal {
   gender;
   age;
   name;

   muevete() {
      console.log('Los animales se mueven? Pues me muevo');
   }
}

class Dog extends Animal {
    ladra() {
        console.log('El perro ladra');
    }
}

class Poodle extends Dog {
}
class PoodleMini extends Poodle {
}
class PoodleBig extends Poodle {
}
class PoodleCupOfTea extends Poodle {
}

class Cat extends Animal {
    maulla() {
        console.log('Maullando');
    }
}

