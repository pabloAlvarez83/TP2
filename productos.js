document.addEventListener("DOMContentLoaded", () => {
  const detalleProducto = document.getElementById("detalle-producto");

  // obtener el ID del producto de la URL
  const urlParams = new URLSearchParams(window.location.search);
  const idProducto = urlParams.get("id");

  // obtenemos los datos de las provincias desde el localstorage
  const datosProductos = JSON.parse(localStorage.getItem("productos"));

  //buscamos los productos por id
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
      `;
    //agregar a pagina principal
    detalleProducto.appendChild(contenedorDetallesProducto);
  }
});
