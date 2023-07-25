class CuentaBancaria {
  saldo = 0;
  movimientos = [];
  ingresar(valor_a_ingresar) {
    // anyadir ERROR si el valor es 0
    this.saldo = this.saldo + valor_a_ingresar;
    this.movimientos.push(valor_a_ingresar);
  }
  retirar(valor_a_retirar) {
    // @todo anyadir ERROR si el valor es 0
    if (valor_a_retirar > this.saldo) {
      throw Error(`No hay saldo suficiente (Saldo actual: ${this.saldo})`);
    }
    this.saldo = this.saldo - valor_a_retirar;
    this.movimientos.push(-valor_a_retirar);
  }
  listar() {
    // implementar este codigo
  }
  buscar(valor) {
    // implementar este codigo
  }

  // Retorna un nuevo array con los elementos que cumplen el filtro "valor_a_filtrar"
  filtrarMovimientos(valor_a_filtrar) {
    // return movimientos.filter( (mov) => mov >= valor_a_filtrar );

    let array_filtrado = this.movimientos.filter(
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
  movimientos_transformados(array_de_movimientos_a_transformar) {
    let resultados = [];
    for (let mov of array_de_movimientos_a_transformar) {
        resultados.push(this.ingreso_retiro_as_string(mov));
    }
    return resultados;
  }

  ingreso_retiro_as_string(valor) {
    return valor >= 0 ? `Ingreso de ${valor}` : `Retiro de ${Math.abs(valor)}`;
  }
}

let cuenta1 = new CuentaBancaria();

// DOM click. Ingresa valor al saldo y anyade movimento al array movimientos
function dom_ingresar() {
  let valor = Math.abs(Number(document.getElementById("dom_valor").value));

  // @todo Quitar esto y hacer la comprobacion en la clase
  if (valor == 0) {
    alert("Ingrese un importe valido");
    return;
  }

  // try catch
  cuenta1.ingresar(valor);

  document.getElementById("dom_valor").value = "";
  document.getElementById("dom_valor").focus();
}

// DOM click. Retira valor del saldo y anyade movimento al array movimientos
function dom_retirar() {
  let valor = Math.abs(Number(document.getElementById("dom_valor").value));

  // @todo Quitar esto y hacer la comprobacion en la clase
  if (valor == 0) {
    alert("Ingrese un importe valido");
    return;
  }

  try {
    cuenta1.retirar(valor);
  } catch (error) {
    alert(error.message);
  }

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

  // @todo implementar buscar() de manera que el for siga funcionando
  let movs = cuenta1.buscar(valor);
  // let array_movimientos_filtrados = cuenta1.filtrarMovimientos(valor);
  // let movs = cuenta1.movimientos_transformados(array_movimientos_filtrados);
  for (m of movs) {
    dom.innerHTML = dom.innerHTML + m + "<br>";
  }
}

// DOM click para listar TODOS los movimientos (array movimientos)
function dom_listar() {
  let dom = document.getElementById("dom_listado");
  dom.innerHTML = "Movimientos:<br>";

  // @todo implementar listar() de manera que el for siga funcionando
  let movs = cuenta1.listar();
//  let movs = cuenta1.movimientos_transformados(cuenta1.movimientos);
  for (m of movs) {
    dom.innerHTML = dom.innerHTML + m + "<br>";
  }
}
