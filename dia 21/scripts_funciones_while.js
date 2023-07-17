const ERROR_DATOS_INVALIDOS = -1;
const OK = 0;

let resultado = main();
console.log(`El resultado de main es ${resultado}`);

function pedirEdad() {
  let la_edad;
  let edad_xunga;
  do {
    la_edad = prompt("Dime la edad");
    if (la_edad == null) {
      alert('La edad no puede ser nula!')
      edad_xunga = true;  
    } else if (isNaN(la_edad)) {
      alert('La edad debe ser un numero!')
      edad_xunga = true;  
    } else if (la_edad <= 0) {
      alert('La edad debe ser mayor a cero!')
      edad_xunga = true;  
    } else {
      edad_xunga = false;
    }
  } while (edad_xunga == true)
  return Number(la_edad);
  // let la_edad;
  // while (la_edad == null || isNaN(la_edad) || la_edad <= 0) {
  //   la_edad = prompt("Dime la edad");
  // }  
  // return Number(la_edad);
}

function main() {
  let edad = pedirEdad();
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

