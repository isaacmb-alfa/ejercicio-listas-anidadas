
class Nodo{

    constructor(dato) {
        this.dato = dato;
        this.siguiente = null;
    }
}
class Lista{
    constructor(){
        this.cabeza = null;
    }
    //metodo para verificar si existe el dato
    contiene(dato){
        let actual = this.cabeza;
        while(actual !== null){
            if(actual.dato === dato){
                return true;
            }
            actual = actual.siguiente;
        }
        return false;
    }
    // métdo para insertar un dato al final de la lista sin duplicados
    insertar(dato){
        if(this.contiene(dato)){
            console.log(`El dato ${dato} ya está en la lista. No se puede insertar duplicados.`);
         return;   
        }
        let nuevoNodo = new Nodo(dato);
        if(this.cabeza === null){
            this.cabeza = nuevoNodo;
        }else{
            let actual = this.cabeza;
            while(actual.siguiente !== null){
                actual = actual.siguiente;
            }
            actual.siguiente = nuevoNodo;
        }
    }
    mostrar(){
        let actual = this.cabeza;
        let elementos = [];
        while(actual !== null){
            elementos.push(actual.dato);
            actual = actual.siguiente;
        }
        console.log('Lista:', elementos.join(' -> '));

    }
}

let lista = new Lista();
lista.insertar(5);
lista.insertar(10);
lista.insertar(5);
lista.insertar(15);
lista.insertar(3);
lista.mostrar();
