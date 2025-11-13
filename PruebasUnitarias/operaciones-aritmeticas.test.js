const { sumar, restar, dividir, modulo, operar } = require("./operaciones-aritmeticas.js");

test("Debe sumar dos números correctamente", () => {
  expect(sumar(2, 3)).toBe(5);
});

test("Debe restar dos números correctamente", () => {
  expect(restar(2, 3)).toBe(-1);
  expect(restar(10, 7)).toBe(3);
});

test("Debe lanzar un error al dividir entre cero", () => {
  try {
    dividir(10, 0);
  } catch (e) {
    expect(e.message).toBe("No se puede dividir entre cero :(");
  }
});

// Otra forma de testear errores es usando toThrow
test("Debe lanzar un error al dividir entre cero- USANDO THROW()", () => {
  expect(() => dividir(10, 0)).toThrow("No se puede dividir entre cero :(");
});

test("Debe sacar el modulo de dos números correctamente", () => {
  expect(modulo(2, 3)).toBe(2);
});

test("Debe de seleccionar la operación y ejecutarla correctamente", () => {
  expect(operar(2, 3, "sumar")).toBe(5);
  expect(operar(2, 3, "restar")).toBe(-1);
  expect(operar(2, 3, "multiplicar")).toBe(6);
  expect(operar(3, 3, "dividir")).toBe(1);
  expect(operar(2, 3, "modulo")).toBe(2);
});