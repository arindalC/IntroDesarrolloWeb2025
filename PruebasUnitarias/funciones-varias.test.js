const {sumar, aprobado, obtenerValorNull, obtenerValorUndefined, lanzarError,objetoEstricto,} = require("./funciones-varias");

// .toEqual()
test("Debe regresar el resultado correcto usando toEqual", () => {
  expect(sumar(2, 3)).toEqual(5);
  expect(sumar(-1, 1)).toEqual(0);
});

// .toBeTruthy()
test("Debe regresar un valor truthy para calificaciones mayores o iguales de 50", () => {
  const resultado = aprobado(60); // true 
  expect(resultado).toBeTruthy();
});

// .toBeFalsy()
test("Debe regresar un valor falsy para calificaciones menores de 50", () => {
  const resultado = aprobado(40); // false
  expect(resultado).toBeFalsy();
});

// .toBeNull()
test("Debe regresar null", () => {
  expect(obtenerValorNull()).toBeNull();
});

// .toBeUndefined()
test("Debe regresar exactamente undefined", () => {
  expect(obtenerValorUndefined()).toBeUndefined();
});

// .toThrow()
test("Debe lanzar un error si el número es negativo", () => {
  expect(() => lanzarError(-5)).toThrow("El número no puede ser negativo");
});

// .toStrictEqual()
test("Debe coincidir con el objeto esperado usando toStrictEqual", () => {
  const objetoEsperado = { a: 1, b: 2 };
  expect(objetoEstricto()).toStrictEqual(objetoEsperado);
});
