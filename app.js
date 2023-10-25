// Importar la clase Pila
import { Pila } from './pila.js';

// Obtener referencias a elementos del DOM
const valorNuevoInput = document.getElementById('valorNuevo');
const valorViejoInput = document.getElementById('valorViejo');
const reemplazarBtn = document.getElementById('reemplazar');
const resultadoContainer = document.getElementById('resultado');

// Crear una pila original con algunos valores de ejemplo
const pilaOriginal = new Pila();
pilaOriginal.apilar(1);
pilaOriginal.apilar(2);
pilaOriginal.apilar(3);
pilaOriginal.apilar(4);
pilaOriginal.apilar(3);
pilaOriginal.apilar(5);

// Función para renderizar la pila
function renderizarPila(pila) {
    resultadoContainer.innerHTML = '';
    const elementos = pila.obtenerElementos();
    elementos.forEach(elemento => {
        const elementoDiv = document.createElement('div');
        elementoDiv.textContent = elemento;
        resultadoContainer.appendChild(elementoDiv);
    });
}

// Manejador de clic para el botón de reemplazo
reemplazarBtn.addEventListener('click', () => {
    const valorNuevo = parseInt(valorNuevoInput.value);
    const valorViejo = parseInt(valorViejoInput.value);

    // Realizar el reemplazo en la pila original
    const pilaTemporal = new Pila();

    while (!pilaOriginal.estaVacia()) {
        const elemento = pilaOriginal.desapilar();
        if (elemento === valorViejo) {
            pilaTemporal.apilar(valorNuevo);
        } else {
            pilaTemporal.apilar(elemento);
        }
    }

    while (!pilaTemporal.estaVacia()) {
        pilaOriginal.apilar(pilaTemporal.desapilar());
    }

    // Renderizar la pila resultante
    renderizarPila(pilaOriginal);
});
