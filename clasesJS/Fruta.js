class Fruta {

  // Constructor 
  constructor(nombre, color, peso) {
    this.nombre = nombre;
    this.color = color;
    this.peso = peso;
  }

  // Getter
  get color() {
    return this.color;
  }

  // Métodos 

  // Método 1: describe la fruta
  describir() {
    return `La fruta ${this.nombre} es de color ${this.color} y pesa ${this.peso} gramos.`;
  }

  // Método 2: cambia el color 
  madurar(nuevoColor) {
    this.color = nuevoColor;
    return `${this.nombre} ha madurado y ahora es de color ${this.color}.`;
  }

  // Método 3: calcula cuántas piezas hacen un kilo
  piezasPorKilo() {
    const piezas = (1000 / this.peso).toFixed(1);
    return `Con un kilo puedes tener aproximadamente ${piezas} ${this.nombre}s.`;
  }
}

// Función 1: calcular el total de peso de todas las frutas
function calcularPesoTotal(frutas) {
  const total = frutas.reduce((acum, fruta) => acum + fruta.peso, 0);
  return `El peso total de las frutas es ${total} gramos.`;
}