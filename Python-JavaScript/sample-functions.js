 /*
 Este archivo contiene 15 funciones básicas en JavaScript para practicar lógica y programación.
 */

 /*
FUNCIÓN 1 PYTHON
def saludar_usuario(nombre: str) -> None:
    """
    Imprime un saludo personalizado.
    Ejemplo de concatenación y salida por consola.
    """
    print("Hola, " + nombre + "! Bienvenido al curso de programación.")
 */

function saludar_usuario(nombre){
    console.log("Hola, " + nombre + "! Bienvenido al curso de programación.");
    //otra forma de escribirlo:
    //console.log(`Hola, ${nombre}! Bienvenido al curso de programación.`);
}
//en arrow function
const saludarUsuaruio = nombre => {console.log("Hola, " + nombre + "! Bienvenido al curso de programación.");}

/*
FUNCIÓN 2 PYTHON
def repetir_texto(texto: str, veces: int) -> str:
    """
    Devuelve una cadena repetida 'veces' veces, separada por espacios.
    Ejemplo de concatenación y multiplicación de strings.
    """
    return (texto + " ") * veces
 */

function repetir_texto(texto, veces){
    return (texto + " ").repeat(veces);
}

//en arrow function 
const repetirText0 = (texto , veces) => (texto + " ").repeat(veces);

/*
FUNCIÓN 3 PYTHON
def invertir_palabra(palabra: str) -> str:
    """
    Invierte una palabra usando slicing.
    """
    return palabra[::-1]
 */
function invertir_palabra(palabra){
    return palabra.split("").reverse().join("");
}

//en arrow function
 const invertirPalabra = palabra => palabra.split("").reverse().join("");

/*
FUNCIÓN 4 PYTHON
def contar_vocales(texto: str) -> int:
    """
    Cuenta cuántas vocales (a, e, i, o, u) hay en un texto.
    Ejemplo de bucles y condicionales.
    """
    contador = 0
    for letra in texto.lower():
        if letra in "aeiou":
            contador += 1
    return contador
 */
function contar_vocales(texto){
    let contador = 0;
    const minusculas = texto.toLowerCase();

    for(const letra of minusculas){
        if("aeiou".includes(letra)){
            contador+=1;
        }
    }
    return contador;
}
//lo haré con regex también y arrow function
const contarvocales = texto => {
    const vocales = texto.match(/[aeiou]/gi);
    return vocales ? vocales.length : 0;
}

/*
FUNCIÓN 5 PYTHON
def mayusculas_y_minusculas(texto: str) -> tuple[str, str]:
    """
    Devuelve el texto en mayúsculas y minúsculas.
    Ejemplo de métodos de string.
    """
    return texto.upper(), texto.lower()
 */
function mayusculas_y_minusculas(texto){
    return [texto.toLowerCase(), texto.toUpperCase()];
}

//en arrow function
const mayusculasMinusculas = texto => [texto.toLowerCase(), texto.toUpperCase()];

/*
FUNCIÓN 6 PYTHON
def promedio_lista(numeros: list[float]) -> float:
    """
    Calcula el promedio de una lista de números.
    Ejemplo de sumas y longitud de listas.
    """
    if len(numeros) == 0:
        return 0
    return sum(numeros) / len(numeros)
 */
function promedio_lista(numeros){
    if(numeros.length === 0){
        return 0;
    }
    let suma = 0;
    for(const n of numeros){
        suma += n;
    }
    return suma/numeros.length;
}//usando .reduce() y arrow function
const promListaReduce = numeros => numeros.length ? numeros.reduce((a,b) => a + b) / numeros.length : 0; 

/*
FUNCIÓN 7 PYTHON
def maximo_y_minimo(numeros: list[int]) -> tuple[int, int]:
    """
    Devuelve el valor máximo y mínimo de una lista.
    Ejemplo de uso de funciones integradas.
    """
    return max(numeros), min(numeros)
 */
function maximo_y_minimo(numeros) {
    function(numeros) {
        return [Math.max(...numeros), Math.min(...numeros)];
    }
}
//En arrow function 
const maximominimo = numeros => [Math.max(...numeros), Math.min(...numeros)];

/*
FUNCIÓN 8 PYTHON
def filtrar_pares(numeros: list[int]) -> list[int]:
    """
    Filtra y devuelve solo los números pares de una lista.
    Ejemplo de comprensión de listas.
    """
    return [n for n in numeros if n % 2 == 0]
 */
function filtrar_pares(numeros) {
    return numeros.filter(n => n%2 === 0);
}
//en arrow function
const filtrarpares = numeros => numeros.filter(n => n%2 === 0);

/*
FUNCIÓN 9 PYTHON
def sumar_elementos_texto(lista_textos: list[str]) -> str:
    """
    Une todos los elementos de una lista de cadenas en una sola frase.
    Ejemplo de concatenación con 'join'.
    """
    return " ".join(lista_textos)
 */
function sumar_elementos_texto(lista_textos){
    return lista_textos.join("");
}
//en arrow function
const sumarelementostexto = lista_textos => lista_textos.join("");

/*
FUNCIÓN 10 PYTHON
def buscar_elemento(lista: list, elemento) -> bool:
    """
    Verifica si un elemento está dentro de una lista.
    Ejemplo de uso del operador 'in'.
    """
    return elemento in lista
 */
function buscar_elementos(lista, elemento){
    return lista.includes(elemento);
}
//en Arrow Function
const buscarElementos = (lista, elementos) => lista.includes(elemento);

/*
FUNCIÓN 11 PYTHON
def contar_palabras(frase: str) -> int:
    """
    Cuenta cuántas palabras hay en una frase.
    Usa split() para separar por espacios.
    """
    palabras = frase.split()
    return len(palabras)
 */
function contar_palabras(frase){
    const palabras = frase.split(" ");
    return palabras.length;
}
//en arrow function
const contar_palabras = frase => frase.split(" ").length;

/*
FUNCIÓN 12 PYTHON
def duplicar_elementos(lista: list[int]) -> list[int]:
    """
    Duplica cada número de una lista.
    Ejemplo de transformación con comprensión de listas.
    """
    return [x * 2 for x in lista]
 */
function duplicar_elementos(lista){
    return lista.map(x => x*2);
}
//en arrow function
const duplicarElms = lista => llista.map(x => x*2);
// sin map
function dupElm(lista){
    const nueva = [];
    for( const x of lista){
        nueva.push(x*2);
    }
    return nueva;
}

/*
FUNCIÓN 13 PYTHON
def capitalizar_palabras(frase: str) -> str:
    """
    Convierte la primera letra de cada palabra en mayúscula.
    Similar a 'title()'.
    """
    return frase.title()

 */
function capitalizar_palabras(frase) { 
    return frase.split(" ").map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase())
}

/*
FUNCIÓN 14 PYTHON
def mezclar_listas(lista1: list, lista2: list) -> list:
    """
    Combina dos listas alternando sus elementos.
    Ejemplo de zip() y bucles.
    """
    combinada = []
    for a, b in zip(lista1, lista2):
        combinada.append(a)
        combinada.append(b)
    return combinada
 */
function mezclar_listas(l1, l2){
    const mezcla = [];
    const longitud = Math.min(l1.length, l2.length);
    for(let i = 0; i < longitud; i++){
        mezcla.push(l1[i]);
        mezcla.push(l2[i]);
    }
    return mezcla;
}

/*
FUNCIÓN 15 PYTHON
def contar_frecuencia(lista: list) -> dict:
    """
    Devuelve un diccionario con la frecuencia de cada elemento.
    Ejemplo de diccionarios y conteo.
    """
    conteo = {}
    for item in lista:
        if item in conteo:
            conteo[item] += 1
        else:
            conteo[item] = 1
    return conteo
 */
function contar_frecuencia(lista){
    const conteo = {};
    for (const item of lista){
        if(conteo[item]){
            conteo[item] += 1;
        } else {
            conteo[item] = 1;
        }
    }
    return conteo;
}