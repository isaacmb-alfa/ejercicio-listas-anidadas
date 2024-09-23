class Nodo {
    constructor(dato) {
        this.dato = dato;
        this.siguiente = null;
    }
}

class Lista {
    constructor() {
        this.cabeza = null;
    }
    contiene(dato) {
        let actual = this.cabeza;
        while (actual !== null) {
            if (actual.dato === dato) {
                return true;
            }
            actual = actual.siguiente;
        }
        return false;
    }

    insertar(dato) {
        if (this.contiene(dato)) {
            console.log(`El dato ${dato} ya está en la lista. No se puede insetar datos duplicados.`);
            return;
        }
        let nuevoNodo = new Nodo(dato);
        if (this.cabeza === null) {
            this.cabeza = nuevoNodo;
        } else {
            let actual = this.cabeza;
            while (actual.siguiente !== null) {
                actual = actual.siguiente;
            }
            actual.siguiente = nuevoNodo;
        }
    }
    mostrar() {
        let actual = this.cabeza;
        let elementos = []
        while (actual !== null) {
            elementos.push(actual.dato)
            actual = actual.siguiente;
        }
        console.log('Lista: ', elementos.join(' -> '));
    }
    generarNumerosAleatorios(cantidad, maximo) {
        for (let i = 0; i < cantidad ; i++) {
            let numeroAleatorio = Math.floor(Math.random() * maximo) + 1;
            this.insertar(numeroAleatorio);
        }
    }

    mostrarNodosSuperiores(valor) {
        let actual = this.cabeza;
        let elementos = [];
        while (actual !== null) {
            if (actual.dato > valor) {
                elementos.push(actual.dato);
            }
            actual = actual.siguiente;
        }
        console.log(`Nodos que superan ${valor}: `, elementos.join(' -> '));

    }
}


let lista = new Lista();
lista.generarNumerosAleatorios(10, 100);
lista.mostrar();
lista.mostrarNodosSuperiores(50);