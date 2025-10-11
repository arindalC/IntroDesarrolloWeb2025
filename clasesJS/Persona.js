class Persona {
  //Constructor 
  constructor(nombre, edad, ciudad) {
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
  }

  // Método 1 
  saludar() {
    return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`;
  }

  // Método 2 
  cumpleAnios() {
    this.edad += 1;
    return `${this.nombre} ahora tiene ${this.edad} años.`;
  }

  // Método 3
  presentarse() {
    return `${this.nombre} vive en ${this.ciudad} y le gusta aprender Desarrollo Web.`;
  }
}