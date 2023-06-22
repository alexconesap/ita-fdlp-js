function validar_formulario() {
  let nombre = getValue("nombre");
  let apellidos = getValue("apellidos");
  let edad = getValue("edad");
  let captcha = getValue("captcha");

  if (!esUnNumeroValido(edad)) {
    alert("La edad no es valida");
    return;
  }
  edad = parseInt(edad);

  if (!esUnNumeroValido(captcha)) {
    alert("El captcha no es valido");
    return;
  }
  captcha = parseInt(captcha);

  let es_valido;
  // Comprobar si es o no mayor de edad llamando a la funcion
  if (esMayorDeEdadInSpain(edad)) {
    // Llamar a la funcion que retorna Si o No
    console.log(esMayorDeEdadInSpainAsText(edad));
    es_valido = true;
  } else {
    console.log(esMayorDeEdadInSpainAsText(edad));
    es_valido = false;
  }

  console.log("FINAL", nombre, apellidos, edad, captcha);
}

function esMayorDeEdadInSpainAsText(edad) {
  // Opcion 0
  return esMayorDeEdadInSpain(edad) ? "Si" : "No";

  // Opcion 1
  //   if (esMayorDeEdadInSpain(edad)) {
  //     return "Si";
  //   }
  //   return "No";

  // Opcion 2
  //   if (esMayorDeEdadInSpain(edad)) {
  //     return "Si";
  //   } else {
  //     return "No";
  //   }
}

function esMayorDeEdadInSpain(edad) {
  // Opcion 0
  return edad >= 18;

  // Opcion 1
  //   if (edad >= 18) {
  //     return true;
  //   }
  //   return false;
  //
  // Opcion 2
  //   if (edad >= 18) {
  //     return true;
  //   } else {
  //     return false;
  //   }
}

function esUnNumeroValido(valor) {
  return valor != "" && !isNaN(valor);

  //   if (valor == "") {
  //     return false;
  //   }
  //   if (isNaN(valor)) {
  //     return false;
  //   }
  //   return true;
}

function getValue(dom_id) {
  return document.getElementById(dom_id).value.trim();

  //   let valor = document.getElementById(dom_id).value;
  //   return valor.trim();
}
