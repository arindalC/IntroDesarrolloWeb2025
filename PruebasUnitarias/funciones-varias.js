
function sumar(a, b) {
  return a + b;
}

function aprobado(calif) {
  // Devuelve true si es >= 50, false en otro caso
  return calif >= 50;
}

function obtenerValorNull() {
  return null;
}

function obtenerValorUndefined() {
  // No regresamos nada → undefined
}

function lanzarError(n) {
  if (n < 0) {
    throw new Error("El número no puede ser negativo");
  }
  return n;
}

function objetoEstricto() {
  return { a: 1, b: 2 };
}

module.exports = {
  sumar,
  aprobado,
  obtenerValorNull,
  obtenerValorUndefined,
  lanzarError,
  objetoEstricto,
};