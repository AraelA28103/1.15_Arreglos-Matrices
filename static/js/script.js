// ACTIVIDAD N°1

// Ejercicio 1: Frase a partir de un arreglo de palabras
function fraseArray() {
    let palabras = ["Juan", "corre", "rápidamente", "feliz", "parque"];
    let frase = `${palabras[0]} ${palabras[1]} ${palabras[2]} ${palabras[3]} por el ${palabras[4]}`;
    alert(frase)
}

// Ejercicio 2: Construir frase con número, verbo, adverbio, adjetivo y sustantivo
function construirFrase() {
    let datos = [3, "gatos", "negros", "duermen", "tranquilamente"];
    let frase = `De los ${datos[0]} ${datos[1]} ${datos[2]} solo 2 ${datos[3]} ${datos[4]}`;
    alert(frase)
}

// Ejercicio 3: Suma de dos elementos en una matriz de dos dimensiones
function sumarMatriz() {
    let matriz = [
        [10, 20, 30],
        [40, 50, 60],
        [70, 80, 90]
    ];
    let val1 = matriz[0][1];
    let val2 = matriz[2][2];
    let suma = val1 + val2;
    alert(suma)
}

// Ejercicio 4: Suma de dos valores en una matriz de tres niveles
function sumar2ValMatriz() {
    let datos = [
        [1, 2, 3, 4],
        [5, 6, [7, 8, [9, 10]]]
    ];
    let val1 = datos[0][2];
    let val2 = datos[1][2][1];
    let suma = val1 + val2;
    alert(suma)
}

// Ejercicio 5: Construir frase usando datos de arreglo + matriz
function construirArrayMatriz() {
    let sujeto = ["El perro", "El gato"];
    let acciones = [
        ["ladra", "corre"],
        ["duerme", "salta"]
    ];
    let sujetoElegido = sujeto[1];
    let accionElegida = acciones[1][1];
    alert(`${sujetoElegido} ${accionElegida}`)
}

// ACTIVIDAD N°2

// Ejercicio 1: Promedio de valores
function promedioValores() {

}

// Ejercicio 2: Suma de extremos
function sumaExtremos() {

}

// Ejercicio 3: Diferencia entre centro y extremos
function difCentroExtremos() {

}

// Ejercicio 4: Multiplicación de posiciones pares
function multPosicionPar() {

}

// Ejercicio 5: Concatenación de mensaje con operación
function concaMensajeOperacion() {

}