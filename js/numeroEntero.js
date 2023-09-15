function ejecutarAutomaticamente() {
  var Form = document.getElementById("numeroEntero"); // Obtener el primer formulario con nombre 'numeroEntero'
  var nameTextoEntero = document.getElementById("textoEntero");
  var contenidoDiv = document.getElementById("Resultado");
  var sumaPares;
  var sumaImpares;

  // Cuando se envíe el formulario
  Form.onsubmit = function (event) {
    event.preventDefault(); // Prevenir el envío del formulario para evitar recargar la página

    // Accede al valor del campo de texto
    var textoEntero = nameTextoEntero.value;

    // ME VERIFICA QUE ES UN ENTERO
    var enteroValidacion = parseInt(textoEntero);
    if (!isNaN(enteroValidacion)) {
      //Creo un arreglo para separar cada caracter de la cadena
      var arregloDeElEnteroOriginal = new Array();

      //Arreglos de clasificacion

      var arregloCifrasImpares = new Array();
      var arregloCifrasPares = new Array();

      //HAZME UN ARREGLO PARA LOS NUMEROS PARES Y IMPARES EN LA CIFRA ENTERA ESCRITA

      for (let i = 0; i < textoEntero.length; i++) {
        arregloDeElEnteroOriginal.push(textoEntero.charAt(i));
        //Solo para prueba
        if (arregloDeElEnteroOriginal[i] % 2 === 0) {
          arregloCifrasPares.push(arregloDeElEnteroOriginal[i]);
        } else {
          arregloCifrasImpares.push(arregloDeElEnteroOriginal[i]);
        }
      }

      // Inicializamos elementoCifraMayor y elementoCifraMenor con el primer elemento del arreglo
      let elementoCifraMayor = parseInt(arregloDeElEnteroOriginal[0]);
      let elementoCifraMenor = parseInt(arregloDeElEnteroOriginal[0]);

      // Buscamos el número mayor y el número menor en el arreglo
      for (let i = 1; i < arregloDeElEnteroOriginal.length; i++) {
        const numero = parseInt(arregloDeElEnteroOriginal[i]);

        // Buscamos el número mayor
        if (numero > elementoCifraMayor) {
          elementoCifraMayor = numero;
        }

        // Buscamos el número menor
        if (numero < elementoCifraMenor) {
          elementoCifraMenor = numero;
        }
      }

// Función para sumar los números en un arreglo
function sumarArreglo(arreglo) {
    return arreglo.reduce((suma, valor) => suma + parseInt(valor), 0);
  }
  
  // Sumamos los números pares
  var sumaPares = sumarArreglo(arregloCifrasPares);
  
  // Sumamos los números impares
  var sumaImpares = sumarArreglo(arregloCifrasImpares);

      // Ahora elementoCifraMayor contiene el número mayor y elementoCifraMenor contiene el número menor

      const resultadoHTML = `
            <div>Estos son los numeros pares en su numero entero: ${arregloCifrasPares.join(", ")}</div>
            <br>
            <div>Estos son los numeros impares en su numero entero: ${arregloCifrasImpares.join(", ")}</div>
            <br>
            <div>Este es el numero mayor: ${elementoCifraMayor}</div>
            <br>
            <div>Este es el numero menor: ${elementoCifraMenor}</div>
            <br>
            <div>Esta es la suma de los numeros pares: ${sumaPares}</div>
            <br>
            <div>Esta es la suma de los numeros impares: ${sumaImpares}</div>
        `;

      contenidoDiv.innerHTML = resultadoHTML;
    } else {
      alert("Escriba un numero menudo webon");
    }
  };
}
window.onload = ejecutarAutomaticamente;