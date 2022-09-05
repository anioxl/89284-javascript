var articulos = [
  {id:1,nombre:"Artículo 1",precio:29.99, cantidad:32 ,imagen:"art01.jpg"},
  {id:2,nombre:"Artículo 2",precio:12.99, cantidad:12 ,imagen:"art02.jpg"},
  {id:3,nombre:"Artículo 3",precio:45.99, cantidad:32 ,imagen:"art03.jpg"},
  {id:4,nombre:"Artículo 4",precio:238.99, cantidad:75,imagen:"art04.jpg"},
  {id:5,nombre:"Artículo 5",precio:77.99, cantidad:211,imagen:"art05.jpg"},
  {id:6,nombre:"Artículo 6",precio:84.99, cantidad:4  ,imagen:"art06.jpg"},

];

function cargarArticulos() {
  var divArticulos = document.getElementById("divArticulos");
  var tablaHtml = "<table class=\"table table-striped\"> <br> <th>ID</th> <th>Nombre</th> <th>Precio</th> <th>Cantidad</th> <th>Imagen</th>";

  for (let i in articulos) {
    var td1 ="<td>"+articulos[i]["id"]+"</td>";
    var td2 ="<td>"+articulos[i]["nombre"]+"</td>";
    var td3 ="<td>"+articulos[i]["precio"]+"</td>";
    var td4 ="<td>"+articulos[i]["cantidad"]+"</td>";
    var td5 ="<td>"+articulos[i]["imagen"]+"</td>";
    tablaHtml = tablaHtml+ "<tr>"+td1+td2+td3+td4+td5 + "</tr>";
  }

  tablaHtml = tablaHtml + "</table>";

  divArticulos.innerHTML = tablaHtml;

}
