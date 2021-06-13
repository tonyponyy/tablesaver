var printTable = (num_tabla = 1) => {
  var exist_th = 0;
  element = document.querySelectorAll("table");
  // con el parametro pasado seleccionamos la tabla de la pagina.
  // si no le pasamos nada por parametro, elegimos la primera que encuentre.
  encabezados = element[num_tabla - 1].getElementsByTagName("th");
  datos = element[num_tabla - 1].getElementsByTagName("td");
  filas = element[num_tabla - 1].getElementsByTagName("tr");
  //imprimimos los encabezados de las tablas
  var salida = "";
  for (let e = 0; e < encabezados.length; e++) {
    salida += encabezados[e].textContent + ",";
  }
  // miramos si la tabla tenía o no encabezado, si la teniamos hacemos un salto de linea y cambiamos
  // la variable exist_th a 1, para después dividir el numero de filas por el numero de columnas
  if (encabezados.length != 0) {
    salida += "\n";
    var exist_th = 1;
  }
  // imprimimos los datos de las tablas
  for (let i = 0; i < datos.length; i++) {
    if (i != datos.length - 1) {
      salida += datos[i].textContent + ",";
    } else salida += datos[i].textContent;
    //miramos cada cuantos valores de la tabla hacer el salto de linea, dividiendo el numero de columnas por el numero de filas
    //restandole 1 si existe un encabezado y no restando nada si no lo hay.
    if (
      (i + 1) % (datos.length / (filas.length - exist_th)) == 0 &&
      i != datos.length - 1
    ) {
      salida += "\n";
    }
  }
  //creamos un enlace
  var descarga = document.createElement("a");
  //ponemos como atributos  la codificacion de caracteres, el string de salida,
  //que será tipo descarga y el nombre y extensión del archivo.
  descarga.setAttribute(
    "href",
    "data:text/csv;charset=utf-8," + "\uFEFF" + encodeURIComponent(salida)
  );
  descarga.setAttribute("download", "document.csv");
  //ponemos en estilos que no se vea.
  descarga.style.display = "none";
  // ejecutamos la acción como si pulsasemos el botón de descarga.
  descarga.click();
};
