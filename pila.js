export class Pila {
    constructor() {
        this.elementos = [];
    }

    apilar(elemento) {
        this.elementos.push(elemento);
    }

    desapilar() {
        return this.elementos.pop();
    }

    estaVacia() {
        return this.elementos.length === 0;
    }

    obtenerElementos() {
        return [...this.elementos];
    }
}
