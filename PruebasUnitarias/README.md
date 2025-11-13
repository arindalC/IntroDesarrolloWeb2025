# Pruebas Unitarias

## .toEqual()
Se utiliza para comparar recursivamente todas las propiedades de instancias de objetos. Es conocida como iguakdad "profunda".

```
expect({ a: 1, b: 2 }).toEqual({ a: 1, b: 2 });
// pasa aunque sean objetos distintos
```

## .toBeTruthy()
Sirve para comprobar si un valor se evalúa como verdadero en un contexto booleano, sin importar su tipo específico. Pasa la prueba siempre que el valor no sea: false, 0, null, undefinded, NaN o ' '.

```
expect("hola").toBeTruthy(); // pasa
```

## .toBeFalsy()
Sirve para comprobar si un valor se evalúa como falso en un contexto booleano, sin importar su tipo específico. Pasa la prueba siempre que el valor sea: false, 0, null, undefinded, NaN o ' '.

```
expect(0).toBeFalsy(); // pasa
```

## .toBeNull()
Se utiliza para verificar que un valor es exactamente null. No acepta undifined, ni valores vacíos.

```
expect(null).toBeNull();
```

## .toBeUndefined()
Se utiliza para verificar que un valor es exactamente undefined.

```
let x;
expect(x).toBeUndefined();
```
## .toThrow()
Se utiliza para validar que el código detecte errores correctamente. Una función arroja un error al ejecutarse. 

```
expect(() => dividir(10, 0)).toThrow();
expect(dividir(10, 0)).toThrow();  → error en tiempo de ejecución
```

## .toStrictEqual()
Se utiliza para comparar el valor hasta el nivel más estricto posible.

```
expect({ a: undefined }).toEqual({});
// pasa , no distingue propiedad con undefined

expect({ a: undefined }).toStrictEqual({});
// falla, distingue que una propiedad existe
```