import express from "express";
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // Permite todas las solicitudes de cualquier origen
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Permite los métodos GET, POST, PUT y DELETE
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); // Permite los encabezados especificados

  next();
});

fetch("productos.json")
  .then((respuesta) => respuesta.json())
  .then((datos) => localStorage.setItem("productos", JSON.stringify(datos)));

document.addEventListener("DOMContentLoaded", () => {
  const gridProductos = document.getElementById("grid-productos");
  const datosProductos = JSON.parse(localStorage.getItem("productos"));
  console.log(datosProductos);

  if (datosProductos) {
    datosProductos.productos.forEach((producto) => {
      // 1- crear uhn div para cada provincia
      const gridItem = document.createElement("div");
      // 2 agregar la clase nombre al div que contiene el nombre
      gridItem.classList.add("grid-item");
      //3- agregar etiqueta h4 con el texto del titulo
      gridItem.innerHTML = `<h4>${producto.nombre}</h4>`;
      gridItem.addEventListener("click", () =>
        mostrarDetallesProductos(producto)
      );

      gridProductos.appendChild(gridItem);
    });
  }
});

function mostrarDetallesProductos(producto) {
  //redirecionar a otra pagina para mostrar los detalles
  window.location.href = `producto.html?id=${producto.id}`;
}
