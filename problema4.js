// Problema 4: Dado un arreglo de números cualesquiera sacar la siguiente información:

// Cantidad de elementos del arreglo.
// Porcentaje de números pares e impares.
//Asuma los siguientes indicadores: Tome en cuenta que el mayor número representa el 100%, indique cual es el porcentaje del número mínimo y el porcentaje del promedio de todos los números.
// Porcentaje de números mayores a 1000.
// Cuál es el mayor y menor valor.

const arrayInfo = (array) => {
    const len = array.length;
    const max = Math.max(...array);
    const min = Math.min(...array);
    
    const pares = array.filter(num => num % 2 === 0).length;
    const impares = array.filter(num => num % 2 !== 0).length ;
    
    const calcularPorcentaje = (num, elem) => {
        return (num / elem) * 100 + '%';; 
    }
    const porcentajesPares =    calcularPorcentaje(pares, len);
    const porcentajesImpares =  calcularPorcentaje(impares, len);
    
    const mayores1000 = array.filter(num => num > 1000).length;
    const porcentajesMayores1000 = calcularPorcentaje(mayores1000, len);
    

    const porcentajesMin = calcularPorcentaje(min, max);
    const promedio = array.reduce((a, b) => a + b, 0) / len;
    const porcentajesPromedio = calcularPorcentaje(promedio, max);

    return {
        elementos: len,
        porcentajePares: porcentajesPares,
        porcentajeImpares: porcentajesImpares,
        porcentajeMayor1000: porcentajesMayores1000,
        mayor: max,
        menor: min,
        porcentajeMenor: porcentajesMin,
        porcentajePromedio: porcentajesPromedio
    };
}
//console.log(arrayInfo([2000,410,2512,712,802,9001,122,189,221,240,1022,10002,2001,2002]))