
// Función sumArray: Suma de todos los elementos de un array
// Parámetros: array (Array) - Un array de números
// Devuelve: Number - La suma de todos los elementos del array


const sumArray = (array) => {
    return array.reduce((total, num) => total + num, 0);
};




  







// Función filterEvenNumbers: Filtrar números pares de un array
// Parámetros: array (Array) - Un array de números
// Devuelve: Array - Un nuevo array con solo los números pares del array original


const filterEvenNumbers = (array) => {
    return array.filter(num => num % 2 === 0);
};










  
// Función findMaxNumber: Encontrar el mayor número en un array
// Parámetros: array (Array) - Un array de números
// Devuelve: Number - El mayor número en el array


const findMaxNumber = (array) => {
    if (array.length === 0) {
        return undefined;
    }
    
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    return max;
   
};









  
// Función toUpperCaseStrings: Convertir un array de strings a mayúsculas
// Parámetros: array (Array) - Un array de strings
// Devuelve: Array - Un nuevo array con todas las strings convertidas a mayúsculas

const toUpperCaseStrings = (array) => {
    return array.map(str => str.toUpperCase());
};







  
// Función calculateAverage: Calcular el promedio de un array de números
// Parámetros: array (Array) - Un array de números
// Devuelve: Number - El promedio de los números en el array


const calculateAverage = (array) => {
    const sum = array.reduce((total, num) => total + num, 0);
    return sum / array.length;
};










  
// Función sortNumbersAscending: Ordenar un array de números de forma ascendente
// Parámetros: array (Array) - Un array de números
// Devuelve: Array - Un nuevo array con los números ordenados de forma ascendente


const sortNumbersAscending = (array) => {
    return array.slice().sort((a, b) => a - b);
};














// Función findFirstElement: Encontrar el primer elemento que cumple una condición en un array
// Parámetros: 
// - array (Array) - Un array de elementos
// - condition (Function) - Una función de condición que devuelve true o false
// Devuelve: Any - El primer elemento que cumple con la condición, o undefined si ninguno lo hace

const findFirstElement = (array, condition) => {
    return array.find(condition);
};











  
// Función countElements: Contar la cantidad de elementos en un array
// Parámetros: array (Array) - Un array de elementos
// Devuelve: Number - La cantidad de elementos en el array

const countElements = (array) => {
    return array.length;
};











  
// Función concatenateArrays: Concatenar dos arrays
// Parámetros: 
// - array1 (Array) - El primer array a concatenar
// - array2 (Array) - El segundo array a concatenar
// Devuelve: Array - Un nuevo array que es la concatenación de los dos arrays proporcionados


const concatenateArrays = (array1, array2) => {
    return array1.concat(array2);
};











  
// Función squareNumbers: Calcular el cuadrado de cada número en un array
// Parámetros: array (Array) - Un array de números
// Devuelve: Array - Un nuevo array con los cuadrados de los números en el array original


const squareNumbers = (array) => {
    return array.map(num => num * num);
};
















// Función flecha para agregar habilidades a un jugador de un juego

/*
    Parámetros de entrada:
    - jugador: objeto que representa al jugador del juego.
    - nuevaHabilidad: string que representa la nueva habilidad a agregar al jugador.

    Lo que hace la función:
    Esta función recibe un objeto de jugador y una nueva habilidad como entrada.
    Verifica si el jugador tiene un arreglo de habilidades. Si no lo tiene, lo crea.
    Luego, agrega la nueva habilidad al arreglo de habilidades del jugador si esta no existe

    Valor de retorno:
    Retorna el objeto jugador modificado con la nueva habilidad agregada.
*/

const agregarHabilidad = (jugador, nuevaHabilidad) => {
    // Verificar si el jugador tiene un arreglo de habilidades
    if (!jugador.habilidades) {
        jugador.habilidades = []; // Si no tiene, crear un arreglo vacío
    }

    // Verificar si la nueva habilidad ya existe en el arreglo de habilidades
    if (!jugador.habilidades.includes(nuevaHabilidad)) {
        // Si no existe, agregarla al arreglo de habilidades
        jugador.habilidades.push(nuevaHabilidad);
    }

    // Retornar el objeto jugador modificado con la nueva habilidad agregada
    return jugador;
};

// Ejemplo:
const jugador = { nombre: "Juan", habilidades: ["ataque", "defensa"] };
const nuevaHabilidad = "velocidad";
console.log(agregarHabilidad(jugador, nuevaHabilidad));













// Función para calcular la duración total de reproducción de todas las películas.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene propiedades como 'titulo' y 'duracion'.
// Retorna:
// - Un número que representa la duración total de todas las películas en minutos.


const calcularDuracionTotal = (peliculas) => {
    // Inicializar una variable para almacenar la duración total
    let duracionTotal = 0;

    // Iterar sobre cada película en el array de películas
    peliculas.forEach(pelicula => {
        // Verificar si la duración es válida (mayor o igual a 0)
        if (pelicula.duracion && pelicula.duracion >= 0) {
            // Sumar la duración de cada película a la duración total
            duracionTotal += pelicula.duracion;
        }
    });

    // Retornar la duración total en minutos
    return duracionTotal;
};

// Ejemplo:
const pelicula = [
    { titulo: "Pelicula 1", duracion: 120 },
    { titulo: "Pelicula 2", duracion: 90 },
    { titulo: "Pelicula 3", duracion: 150 }
];
console.log(calcularDuracionTotal(pelicula)); // Salida esperada: 360


















// Función para buscar películas por título y género.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene propiedades como 'titulo' y 'genero'.
// - titulo: String que representa el título a buscar.
// - genero: String que representa el género a buscar.
// Retorna:
// - Un array de objetos que representan películas que coinciden con el título y el género especificados.


const buscarPeliculas = (peliculas, titulo, genero) => {
    // Filtrar las películas por título y género
      // Filtrar las películas por título y género
      const peliculasCoincidentes = peliculas.filter(pelicula => {
        // Verificar si el título coincide (ignorando mayúsculas/minúsculas)
        const tituloCoincide = pelicula.titulo.toLowerCase().includes(titulo.toLowerCase());

        // Verificar si el género coincide solo si se proporciona
        const generoCoincide = genero ? pelicula.genero.toLowerCase() === genero.toLowerCase() : true;

        // Retornar true si tanto el título como el género (si se proporciona) coinciden
        return tituloCoincide && generoCoincide;
    });

    // Retornar el array de películas que coinciden con el título y el género (si se proporciona) especificados
    return peliculasCoincidentes;
};

// Ejemplo de uso:
const peliculas = [
    { titulo: "Pelicula 1", genero: "Aventura" },
    { titulo: "Pelicula 2", genero: "Comedia" },
    { titulo: "Pelicula 3", genero: "Drama" },
    { titulo: "Otra Pelicula", genero: "Aventura" }
];
const tituloBuscado = "Pelicula";
const generoBuscado = "Aventura";
console.log(buscarPeliculas(peliculas, tituloBuscado, generoBuscado));
// Salida esperada: [{ titulo: "Pelicula 1", genero: "Aventura" }, { titulo: "Otra Pelicula", genero: "Aventura" }]



















// Función para calcular el promedio de puntajes de las películas.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene una propiedad 'puntaje'.
// Retorna:
// - Un número que representa el promedio de puntajes de todas las películas.


const calcularPromedioPuntajes = (peliculas) => {
      // Filtrar las películas válidas (con puntaje válido)
      const peliculasValidas = peliculas.filter(pelicula => pelicula.puntaje && pelicula.puntaje >= 0);

      if (peliculasValidas.length === 0) {
          return 0; // Retorna 0 si no hay películas válidas
      }
  
      // Calcular la suma de puntajes usando el método reduce
      const sumaPuntajes = peliculasValidas.reduce((acumulador, pelicula) => acumulador + pelicula.puntaje, 0);
  
      // Calcular el promedio dividiendo la suma de puntajes por la cantidad de películas válidas
      const promedio = sumaPuntajes / peliculasValidas.length;
  
      return promedio;
};

// Ejemplo de uso:
const movies = [
    { puntaje: 8 },
    { puntaje: 7 },
    { puntaje: 9 }
];
console.log(calcularPromedioPuntajes(movies)); // Salida esperada: 8






















// Función para filtrar películas por año de lanzamiento.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene una propiedad 'año'.
// - año: Número que representa el año de lanzamiento a filtrar.
// Retorna:
// - Un array de objetos que representan películas lanzadas en el año especificado.
const filtrarPorAño = (peliculas, año) => {
    // Filtrar las películas por año de lanzamiento
      // Filtrar las películas por año de lanzamiento.
      return peliculas.filter(pelicula => {
        // Convertir ambos años a números enteros para comparar
        const añoPelicula = parseInt(pelicula.año);
        const añoBuscado = parseInt(año);
        // Verificar si el año de la película es igual al año buscado
        return añoPelicula === añoBuscado;
    });
};















// Función para calcular el promedio de duración de las películas por género.
// Parámetros:
// - peliculas: Array de objetos que representan películas, cada objeto tiene propiedades como 'duracion' y 'genero'.
// - genero: String que representa el género de las películas a considerar.
// Retorna:
// - Un número que representa el promedio de duración de las películas del género especificado.
// Filtrar las películas por género.


const calcularPromedioDuracionPorGenero = (peliculas, genero) => {
    // Filtrar las películas por género
    const peliculasDelGenero = peliculas.filter(pelicula => pelicula.genero.toLowerCase() === genero.toLowerCase());

    // Verificar si no hay películas del género especificado
    if (peliculasDelGenero.length === 0) {
        return 0; // Si no hay películas, retornar 0 para evitar división por cero
    }

    // Calcular la suma de duraciones de las películas del género especificado
    const sumaDuraciones = peliculasDelGenero.reduce((acumulador, pelicula) => acumulador + pelicula.duracion, 0);

    // Calcular el promedio de duración dividiendo la suma de duraciones por la cantidad de películas
    const promedio = sumaDuraciones / peliculasDelGenero.length;

    return promedio;
};

// Ejemplo de uso:
const moviess = [
    { titulo: "Pelicula 1", genero: "Aventura", duracion: 120 },
    { titulo: "Pelicula 2", genero: "Comedia", duracion: 90 },
    { titulo: "Pelicula 3", genero: "Aventura", duracion: 150 },
    { titulo: "Pelicula 4", genero: "Aventura", duracion: 110 }
];
const genero = "Aventura";
console.log(calcularPromedioDuracionPorGenero(peliculas, genero)); // Salida esperada: 126.66666666666667


















// Clase base que representa un vehículo
class Vehiculo {
    /**
     * Constructor de la clase Vehiculo.
     * @param {string} marca - La marca del vehículo.
     * @param {string} modelo - El modelo del vehículo.
     * @param {number} año - El año de fabricación del vehículo.
     */

    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
   

    /**
     * Método para obtener la información del vehículo.
     * @returns {string} - La información del vehículo en formato de cadena de texto.
     */
    obtenerInformacion() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`;
    }
}










// Clase que representa un automóvil
class Automovil extends Vehiculo {
    /**
     * Constructor de la clase Automovil.
     * @param {string} marca - La marca del automóvil.
     * @param {string} modelo - El modelo del automóvil.
     * @param {number} año - El año de fabricación del automóvil.
     * @param {string} color - El color del automóvil.
     * @param {number} cilindrada - La cilindrada del motor del automóvil.
     * @param {number} potencia - La potencia del motor del automóvil.
     * @param {number} numPuertas - El número de puertas del automóvil.
     * @param {number} numAsientos - El número de asientos del automóvil.
     * @param {string} tipoTransmision - El tipo de transmisión del automóvil.
     */


    constructor(marca, modelo, año, color, cilindrada, potencia, numPuertas, numAsientos, tipoTransmision) {
        super(marca, modelo, año);
        this.color = color;
        this.cilindrada = cilindrada;
        this.potencia = potencia;
        this.numPuertas = numPuertas;
        this.numAsientos = numAsientos;
        this.tipoTransmision = tipoTransmision;
    }
    

    /**
     * Método para obtener la información del automóvil.
     * @returns {string} - La información del automóvil en formato de cadena de texto.
     */
    obtenerInformacion() {
        return `${super.obtenerInformacion()}, Color: ${this.color}, Cilindrada: ${this.cilindrada}, Potencia: ${this.potencia}, Puertas: ${this.numPuertas}, Asientos: ${this.numAsientos}, Transmisión: ${this.tipoTransmision}`;
    }
}














// Clase que representa una motocicleta
class Motocicleta extends Vehiculo {
    /**
     * Constructor de la clase Motocicleta.
     * @param {string} marca - La marca de la motocicleta.
     * @param {string} modelo - El modelo de la motocicleta.
     * @param {number} año - El año de fabricación de la motocicleta.
     * @param {string} color - El color de la motocicleta.
     * @param {number} cilindrada - La cilindrada del motor de la motocicleta.
     * @param {number} potencia - La potencia del motor de la motocicleta.
     * @param {number} numRuedas - El número de ruedas de la motocicleta.
     * @param {string} tipo - El tipo de motocicleta (deportiva, touring, etc.).
     */

    constructor(marca, modelo, año, color, cilindrada, potencia, numRuedas, tipo) {
        super(marca, modelo, año);
        this.color = color;
        this.cilindrada = cilindrada;
        this.potencia = potencia;
        this.numRuedas = numRuedas;
        this.tipo = tipo;
    }
    

    /**
     * Método para obtener la información de la motocicleta.
     * @returns {string} - La información de la motocicleta en formato de cadena de texto.
     */
    obtenerInformacion() {
        return `${super.obtenerInformacion()}, Color: ${this.color}, Cilindrada: ${this.cilindrada}, Potencia: ${this.potencia}, Ruedas: ${this.numRuedas}, Tipo: ${this.tipo}`;
    }
}



















// Clase que representa un camión
class Camion extends Vehiculo {
    /**
     * Constructor de la clase Camion.
     * @param {string} marca - La marca del camión.
     * @param {string} modelo - El modelo del camión.
     * @param {number} año - El año de fabricación del camión.
     * @param {string} color - El color del camión.
     * @param {number} cilindrada - La cilindrada del motor del camión.
     * @param {number} potencia - La potencia del motor del camión.
     * @param {number} numEjes - El número de ejes del camión.
     * @param {number} capacidadCarga - La capacidad de carga del camión en toneladas.
     * @param {string} tipoCarroceria - El tipo de carrocería del camión (remolque, furgón, etc.).
     */
    
    constructor(marca, modelo, año, color, cilindrada, potencia, numEjes, capacidadCarga, tipoCarroceria) {
        super(marca, modelo, año);
        this.color = color;
        this.cilindrada = cilindrada;
        this.potencia = potencia;
        this.numEjes = numEjes;
        this.capacidadCarga = capacidadCarga;
        this.tipoCarroceria = tipoCarroceria;
    }

    /**
     * Método para obtener la información del camión.
     * @returns {string} - La información del camión en formato de cadena de texto.
     */
    obtenerInformacion() {
        return `${super.obtenerInformacion()}, Color: ${this.color}, Cilindrada: ${this.cilindrada}, Potencia: ${this.potencia}, Ejes: ${this.numEjes}, Capacidad de Carga: ${this.capacidadCarga}, Tipo de Carrocería: ${this.tipoCarroceria}`;
    }
}


















// Clase que representa un autobús
class Autobus extends Vehiculo {
    /**
     * Constructor de la clase Autobus.
     * @param {string} marca - La marca del autobús.
     * @param {string} modelo - El modelo del autobús.
     * @param {number} año - El año de fabricación del autobús.
     * @param {string} color - El color del autobús.
     * @param {number} cilindrada - La cilindrada del motor del autobús.
     * @param {number} potencia - La potencia del motor del autobús.
     * @param {number} capacidadPasajeros - La capacidad de pasajeros del autobús.
     * @param {string} tipoCombustible - El tipo de combustible del autobús.
     * @param {string} tipoMotor - El tipo de motor del autobús (diésel, gasolina, eléctrico, etc.).
    */


    constructor(marca, modelo, año, color, cilindrada, potencia, capacidadPasajeros, tipoCombustible, tipoMotor) {
        super(marca, modelo, año);
        this.color = color;
        this.cilindrada = cilindrada;
        this.potencia = potencia;
        this.capacidadPasajeros = capacidadPasajeros;
        this.tipoCombustible = tipoCombustible;
        this.tipoMotor = tipoMotor;
    }
   

    /**
     * Método para obtener la información del autobús.
     * @returns {string} - La información del autobús en formato de cadena de texto.
     */
    obtenerInformacion() {
        return `${super.obtenerInformacion()}, Color: ${this.color}, Cilindrada: ${this.cilindrada}, Potencia: ${this.potencia}, Pasajeros: ${this.capacidadPasajeros}, Combustible: ${this.tipoCombustible}, Tipo de Motor: ${this.tipoMotor}`;
    }
}
















// Clase que representa una bicicleta
class Bicicleta extends Vehiculo {
    /**
     * Constructor de la clase Bicicleta.
     * @param {string} marca - La marca de la bicicleta.
     * @param {string} modelo - El modelo de la bicicleta.
     * @param {number} año - El año de fabricación de la bicicleta.
     * @param {string} tipo - El tipo de bicicleta (montaña, carretera, urbana, etc.).
     * @param {number} numMarchas - El número de marchas de la bicicleta.
     * @param {string} material - El material del que está hecha la bicicleta (aluminio, acero, carbono, etc.).
     * @param {string} suspencion - El tipo de suspensión de la bicicleta (delantera, trasera, doble, rígida, etc.).
     * @param {string} frenos - El tipo de frenos de la bicicleta (disco, v-brake, caliper, etc.).
     * @param {string} tipoManubrio - El tipo de manubrio de la bicicleta (recto, curvo, doble altura, etc.).
    */

    constructor(marca, modelo, año, tipo, numMarchas, material, suspencion, frenos, tipoManubrio) {
        super(marca, modelo, año);
        this.tipo = tipo;
        this.numMarchas = numMarchas;
        this.material = material;
        this.suspencion = suspencion;
        this.frenos = frenos;
        this.tipoManubrio = tipoManubrio;
    }
  

    /**
     * Método para obtener la información de la bicicleta.
     * @returns {string} - La información de la bicicleta en formato de cadena de texto.
     */
    obtenerInformacion() {
        return `${super.obtenerInformacion()}, Tipo: ${this.tipo}, Marchas: ${this.numMarchas}, Material: ${this.material}, Suspensión: ${this.suspencion}, Frenos: ${this.frenos}, Tipo de Manubrio: ${this.tipoManubrio}`;
    }

}














/**
 * Por favor no borrar el código que hasta de aqui en adelante.
*/
// Exportar las funciones para su uso en otros archivos.
 
  module.exports = { 
    sumArray, 
    filterEvenNumbers, 
    findMaxNumber, 
    toUpperCaseStrings, 
    calculateAverage, 
    sortNumbersAscending, 
    findFirstElement, 
    countElements, 
    concatenateArrays, 
    squareNumbers,
    agregarHabilidad,
    calcularDuracionTotal,
    buscarPeliculas,
    calcularPromedioPuntajes,
    filtrarPorAño,
    calcularPromedioDuracionPorGenero,
    Vehiculo, Automovil, Motocicleta, Camion, Autobus, Bicicleta
  };
  
