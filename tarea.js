/* Hacer las funciones que sean necesarias para:
a. Obtener el promedio de notas de un alumno considerando que la
suma de notas debe ser el retorno de una función y el promedio
el retorno de otra función. Las notas son: 6,8,9,2,5,10. */

notas = [6, 8, 9, 2, 5, 10];
suma_notas = 0;

function obtenerSumaNotas() {
    console.log('obtenerSumaNotas')
    notas.forEach(nota => {
        console.log('nota: ' + nota)
        suma_notas = suma_notas + nota;
        console.log('suma_notas: ' + suma_notas)
    });

    return suma_notas;
}


function obtenerCantidadNotas() {
    console.log('obtenerCantidadNotas')

    // Obtener cantidad de notas
    cant_notas = notas.length;
    console.log('cant_notas: ' + cant_notas);

   
    return cant_notas;
}


function obtenerPromedio() {
    console.log('obtenerPromedio')
    promedio = suma_notas / cant_notas
    
    // Fijar cantidad de decimales
    promedio = promedio.toFixed(3)

    console.log('promedio: ' + promedio)

    return promedio;
}


obtenerSumaNotas();
obtenerCantidadNotas();
obtenerPromedio();
