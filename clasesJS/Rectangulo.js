class Rectangulo {
 
  // Constructor 
  constructor(base, altura, color = "azul") {
    this.base = base;
    this.altura = altura;
    this.color = color;
  }

  // Getter
  get area() {
    return this.calcularArea();
  }

  // Métodos 

  // Método 1: calcula el área
  calcularArea() {
    return this.base * this.altura;
  }

  // Método 2: calcula el perímetro
  calcularPerimetro() {
    return 2 * (this.base + this.altura);
  }

  // Método 3: describe el rectángulo
  describir() {
    return `Rectángulo ${this.color} de ${this.base}x${this.altura}, área: ${this.calcularArea()} y perímetro: ${this.calcularPerimetro()}.`;
  }
}

// Función 1: encontrar el rectángulo con mayor área
function mayorArea(rectangulos) {
  return rectangulos.reduce((mayor, actual) =>
    actual.calcularArea() > mayor.calcularArea() ? actual : mayor
  );
}