document.addEventListener("DOMContentLoaded", () => {
  const detalleProducto = document.getElementById("detalle-producto");

  const urlParams = new URLSearchParams(window.location.search);
  const idProducto = urlParams.get("id");

  const datosProductos = JSON.parse(localStorage.getItem("productos"));

  const productoSeleccionado = datosProductos.productos.find(
    (producto) => producto.id === idProducto
  );

  if (productoSeleccionado) {
    const contenedorDetallesProducto = document.createElement("div");

    contenedorDetallesProducto.classList.add("detalles-producto");
    contenedorDetallesProducto.innerHTML = `
      <h2 id="nombre">${productoSeleccionado.descripcion}</h2>
      <img id="imagen-producto" class="animacion" src="${productoSeleccionado.imagen}" alt="${productoSeleccionado.alt}" />
      <p id="descripcion">${productoSeleccionado.detalle}</p>
      <p id="valor">Valor: ${productoSeleccionado.precio}</p>
      <p id="puntuacion">${productoSeleccionado.puntuacion} </p>
      <a href=index.html>Volver a la página principal</a>
      
      `;
    detalleProducto.appendChild(contenedorDetallesProducto);
  }
});
