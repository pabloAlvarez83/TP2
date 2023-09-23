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
      <p>Latitud: ${productoSeleccionado.centroide.lat}</p>
      <p>Longitud: ${productoSeleccionado.centroide.lon}</p>
    <img src="${productoSeleccionado.imagen}" alt="Shampoo">
      `;
    //agregar a pagina principal
    detalleProducto.appendChild(contenedorDetallesProducto);
  }
});

