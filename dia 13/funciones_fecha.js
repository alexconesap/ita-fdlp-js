function nombreDelMes(param_numero_de_mes) {
  switch (param_numero_de_mes) {
    case 1:
      return "enero";
    case 2:
      return "febrero";
    case 3:
      return "marzo";
    case 4:
      return "abril";
    case 5:
      return "mayo";
    case 6:
      return "junio";
    case 7:
      return "julio";
    case 8:
      return "agosto";
    case 9:
      return "septiembre";
    case 10:
      return "octubre";
    case 11:
      return "noviembre";
    case 12:
      return "diciembre";
  }
  return "";
}

function diasPorMes(nombre_del_mes) {
  let dias;
  switch (nombre_del_mes) {
    case "enero":
      return 31;
    case "febrero":
      dias = 28;
      break;
    case "marzo":
      dias = 31;
      break;
    case "abril":
      dias = 30;
      break;
    case "mayo":
      dias = 31;
      break;
    case "junio":
      dias = 30;
      break;
    case "julio":
      dias = 31;
      break;
    case "agosto":
      dias = 31;
      break;
    case "septiembre":
      dias = 30;
      break;
    case "octubre":
      dias = 31;
      break;
    case "noviembre":
      dias = 30;
      break;
    case "diciembre":
      dias = 31;
      break;
    default:
      dias = "Incorrecto";
  }
  return dias;
}
