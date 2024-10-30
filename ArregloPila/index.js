class Pila { 
    constructor() {
        this.almacenPila = {};
        this.contPila = 0;
    }
    // Agrega un nuevo elemento al final de la pila
    push(elemento) {
        this.almacenPila[this.contPila] = elemento;
        this.contPila++;
        return this.almacenPila;
    }
    // Retorna el último elemento y lo elimina
    pop() {
        if (this.contPila === 0) {
            return null;
        }
        this.contPila--;
        const elemento = this.almacenPila[this.contPila];
        delete this.almacenPila[this.contPila];
        return elemento;
    }
    // Retorna el último elemento sin eliminarlo
    peek() {
        if (this.contPila === 0) {
            return null;
        }
        return this.almacenPila[this.contPila - 1];
    }
    // Retorna el número de elementos de la pila
    size() {
        return this.contPila;
    }
    // Retorna el contenido de la pila
    print() {
        return this.almacenPila;
    }
}

const pila = new Pila();
pila.push(8);
pila.push(9);
pila.push(10);
console.log("Contenido de la pila:", pila.print());
console.log("Último elemento (peek):", pila.peek());
console.log("Elemento eliminado (pop):", pila.pop());
console.log("Contenido de la pila después del pop:", pila.print());
console.log("Tamaño de la pila:", pila.size());