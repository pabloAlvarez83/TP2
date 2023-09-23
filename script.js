fetch("productos.json")
  .then((respuesta) => respuesta.json())
  .then((datos) => localStorage.setItem("productos", JSON.stringify(datos)));

document.addEventListener("DOMContentLoaded", () => {
  const gridProductos = document.getElementById("grid-productos");
  const datosProductos = JSON.parse(localStorage.getItem("productos"));

  if (datosProductos) {
    datosProductos.productos.forEach((producto) => {
      // 1- crear uhn div para cada producto
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
