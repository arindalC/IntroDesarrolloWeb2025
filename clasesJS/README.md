# Clases en JavaScript
Una clase es una forma de organizar código de forma entendible con el objetivo de simplificar el funcionamiento de un programa. Son conceptos abstractos de los que se pueden crear objetos de programación. Facilita definir  propiedades y métodos asociados a un tipo de objeto 

![Ejemplo de clases](./clases-objetos.png)

Se puede tener clases como `Persona`, `Auto`, `Animal`, etc

# Partes clave de una clase
- `class Nombre{...}`: declaración de clase
- `constructor(...)`: función que se ejecuta al crear una instancia con `new`
- **Atributos de intancia**: se definen en el constructor o como campos públicos
- **Campos privado(#)**: accesibles solo dentro de la clase
- **Métodos**: funciones definidas dentro de la clase
- **Métodos static**: se llaman sobre la clase, no sobre la instancia
- **Getters/Setters**: son métodos que se usan para controlar el acceso a sus atributos. (obtener/modificar)
- **Herencia**: permite crear una nueva clase basándose en una clase ya existente heredadno sus atributos y métodos.

# Cómo crear una clase
```
class Persona{
    constructor(nombre, edad){ 
        //atributos
        this.nombre = nombre;
        this.edad = edad;
    }
}
```
# Cómo crear una instancia
```
conts persona1 = new Persona("Ari", 22);
```
# Cómo crear una métodos
```
cumpleanios(){
    this.edad +=1;
    console.log(`${this.nombre} ahora tiene ${this.edad} años.`);
}
```
uso:
```
persona1.cumpleanios(;)
```
# Cómo crear una función
Las funciones pueden existir fuera de cualquier clase, ya que no dependen del `this`

```
function saludar(nombre){
    return `Hola, ${nombre}!`;
}
```