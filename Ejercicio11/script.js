// Obtener todos los enlaces de la página
var enlaces = document.getElementsByTagName("a");

// Obtener el div donde se mostrarán los resultados
var resultado = document.getElementById("info");

// 1. Número de enlaces de la página
var totalEnlaces = enlaces.length;

var parrafo1 = document.createElement("p");
parrafo1.textContent = "1. Número de enlaces de la página: " + totalEnlaces;
resultado.appendChild(parrafo1);

// 2. Dirección a la que enlaza el penúltimo enlace
var penultimoEnlace = enlaces[enlaces.length - 2].href;

var parrafo2 = document.createElement("p");
parrafo2.textContent = "2. Dirección del penúltimo enlace: " + penultimoEnlace;
resultado.appendChild(parrafo2);

// 3. Número de enlaces que enlazan a http://prueba
var contador = 0;

for (var i = 0; i < enlaces.length; i++) {
    if (enlaces[i].getAttribute("href") == "http://prueba") {
        contador++;
    }
}

var parrafo3 = document.createElement("p");
parrafo3.textContent = "3. Número de enlaces que enlazan a http://prueba: " + contador;
resultado.appendChild(parrafo3);

// 4. Número de enlaces del tercer párrafo
var parrafos = document.getElementsByTagName("p");
var enlacesTercerParrafo = parrafos[3].getElementsByTagName("a").length;

var parrafo4 = document.createElement("p");
parrafo4.textContent = "4. Número de enlaces del tercer párrafo: " + enlacesTercerParrafo;
resultado.appendChild(parrafo4);