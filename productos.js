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

document.addEventListener("DOMContentLoaded", () => {
  const detalleProducto = document.getElementById("detalle-producto");

  // obtener el ID de la provincia de la URL
  const urlParams = new URLSearchParams(window.location.search);
  const idProducto = urlParams.get("id");

  // obtenemos los datos de las provincias desde el localstorage
  const datosProductos = JSON.parse(localStorage.getItem("productos"));

  //buscamos las provincias por id
  const productoSeleccionado = datosProductos.productos.find(
    (producto) => producto.id === idProducto
  );

  if (productoSeleccionado) {
    //creamos el elemento div para mostrar los detalles del producto y lo agregamos
    const contenedorDetallesProducto = document.createElement("div");
    contenedorDetallesProducto.classList.add("detalles-producto");
    contenedorDetallesProducto.innerHTML = `
      <h2>${productoSeleccionado.nombre}</h2>
      <p>ID: ${productoSeleccionado.id}</p>
    <img src="${productoSeleccionado.imagen}" alt="Shampoo">
      `;
    //agregar a pagina principal
    detalleProducto.appendChild(contenedorDetallesProducto);
  }
});
