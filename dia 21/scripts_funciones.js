const ERROR_EDAD_INCORRECTA = -1000;
const ERROR_DATOS_INVALIDOS = -1;
const OK = 0;

let resultado = main();
console.log(`El resultado de main es ${resultado}`);

if (resultado == ERROR_EDAD_INCORRECTA) {
   alert("La edad no es correcta");
}

function main() {
  let edad = pedirEdad();
  if (edad <= 0) {
    return ERROR_EDAD_INCORRECTA;
  }
  let poblacion = pedirCiudad();

// una opcion  
//  let valores_correctos = (poblacion != '');
// o esta otra opcion
//   if (poblacion == '') {
//     valores_correctos = false;
//   } else {
//     valores_correctos = true;
//   }
// o esta otra opcion usando funciones
  let valores_correctos = esUnaCiudadCorrecta(poblacion);

  if (valores_correctos) {
    let tiene_titulo = true;
    let en_paro = false;
  
    if (edad >= 18) {
        // si se cumple la expresion
        alert("Es mayor de edad");
      } else if (edad >= 16) {
        alert("Es casi mayor de edad");
      } else {
        // si no se cumple la expresion
        alert("No es mayor de edad");
      }
    
      console.log("Este codigo se ejecuta siempre, se cumpla o no");
      return OK;
  } else {
      console.log('Los datos no son correctos')
      return ERROR_DATOS_INVALIDOS;
  }
}

function esUnaCiudadCorrecta(the_city_name_in_lowercase) {
    if (the_city_name_in_lowercase == '') {
        return false;
    }
    // se ejecuta siempre que no se cumpla lo de arriba
    return true;
}

function pedirCiudad() {
  let city = prompt("Dime tu ciudad");
  if (city == null) {
    return '';
  }
  return city.trim().toLowerCase();
}

function pedirEdad() {
  let la_edad = prompt("Dime la edad");
  if (la_edad == null) {
    return 0;
  }
  return Number(la_edad);
}
