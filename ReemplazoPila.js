export class ReemplazoPila {
    constructor() {
        this.pila = [];
    }

    apilar(elemento) {
        this.pila.push(elemento);
    }

    desapilar() {
        return this.pila.pop();
    }

    estaVacia() {
        return this.pila.length === 0;
    }

    reemplazarValor(nuevo, viejo) {
        const pilaTemporal = [];

        while (!this.estaVacia()) {
            const elemento = this.desapilar();
            if (elemento === viejo) {
                pilaTemporal.push(nuevo);
            } else {
                pilaTemporal.push(elemento);
            }
        }

        while (pilaTemporal.length > 0) {
            this.apilar(pilaTemporal.pop());
        }
    }
}
