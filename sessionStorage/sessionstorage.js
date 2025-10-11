function guardar() {
  const clave = document.getElementById("clave").value;
  const valor = document.getElementById("valor").value;
  if (!clave || !valor) {
    alert("Escribe una clave y un valor.");
    return;
  }
  sessionStorage.setItem(clave, valor);
  mostrarContenido();
}

function leer() {
  const clave = document.getElementById("clave").value;
  const valor = sessionStorage.getItem(clave);
  if (valor === null) {
    alert("No existe esa clave.");
  } else {
    alert("Valor: " + valor);
  }
}

function borrar() {
  const clave = document.getElementById("clave").value;
  sessionStorage.removeItem(clave);
  mostrarContenido();
}

function limpiarTodo() {
  sessionStorage.clear();
  mostrarContenido();
}

function mostrarContenido() {
  const salida = document.getElementById("salida");
  const datos = {};
  for (let i = 0; i < sessionStorage.length; i++) {
    const k = sessionStorage.key(i);
    datos[k] = sessionStorage.getItem(k);
  }
  salida.textContent = JSON.stringify(datos, null, 2);
}


mostrarContenido();