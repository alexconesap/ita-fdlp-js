let saldo = 0;
let movimientos = [];

// DOM click. Ingresa valor al saldo y anyade movimento al array movimientos
function dom_ingresar() {
  let valor = Math.abs(Number(document.getElementById("dom_valor").value));

  if (valor == 0) {
    alert("Ingrese un importe valido");
    return;
  }

  saldo = saldo + valor;
  movimientos.push(valor);

  document.getElementById("dom_valor").value = "";
  document.getElementById("dom_valor").focus();
}

// DOM click. Retira valor del saldo y anyade movimento al array movimientos
function dom_retirar() {
  let valor = Math.abs(Number(document.getElementById("dom_valor").value));

  if (valor == 0) {
    alert("Ingrese un importe valido");
    return;
  }

  if (valor > saldo) {
    alert(`No hay saldo suficiente (Saldo actual: ${saldo})`);
    return;
  }

  saldo = saldo - valor;
  movimientos.push(-valor);

  document.getElementById("dom_valor").value = "";
  document.getElementById("dom_valor").focus();
}

// DOM click para buscar movimientos que cumplan un criterio
// Se iterara sobre el array movimientos y se filtraran los elementos
// que cumplan con el criterio.
function dom_buscar() {
  let valor = Number(document.getElementById("dom_valor_busqueda").value);
  let dom = document.getElementById("dom_resultados_busqueda");
  dom.innerHTML = "Movimientos:<br>";

  let array_movimientos_filtrados = filtrarMovimientos(valor);
  let movs = movimientos_transformados(array_movimientos_filtrados);
  for (m of movs) {
    dom.innerHTML = dom.innerHTML + m + "<br>";
  }
}

// DOM click para listar TODOS los movimientos (array movimientos)
function dom_listar() {
  let dom = document.getElementById("dom_listado");
  dom.innerHTML = "Movimientos:<br>";

  let movs = movimientos_transformados(movimientos);
  for (m of movs) {
    dom.innerHTML = dom.innerHTML + m + "<br>";
  }
  // Equivale a:
  // for (i = 0; i < movs.length; i++) {
  //     let m = movs[i];
  //     dom.innerHTML = dom.innerHTML + m + "<br>";
  // }
}

// Retorna un nuevo array con los elementos que cumplen el filtro "valor_a_filtrar"
function filtrarMovimientos(valor_a_filtrar) {
  // return movimientos.filter( (mov) => mov >= valor_a_filtrar );

  let array_filtrado = movimientos.filter(
    // mov contiene el elemento actual del array.
    function (mov) {
      if (mov >= valor_a_filtrar) {
        // cumple con el criterio. Lo retornamos. Se incluye en el resultado.
        return true;
      } else {
        // NO cumple. Lo filtramos. NO forma parte del resultado.
        return false;
      }
    }
  );
  return array_filtrado;
}

// Basandonos en un array de valores numericos:
//    -11
//    20
// Retorna array con strings:
//    'Retiro de -11'
//    'Ingreso de 20'
function movimientos_transformados(array_de_movimientos_a_transformar) {
  let resultados = [];
  for (mov of array_de_movimientos_a_transformar) {
    resultados.push(ingreso_retiro_as_string(mov));
  }
  return resultados;
}

function ingreso_retiro_as_string(valor) {
  return valor >= 0 ? `Ingreso de ${valor}` : `Retiro de ${Math.abs(valor)}`;
}
