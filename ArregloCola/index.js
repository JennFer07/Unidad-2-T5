class Cola { 
    constructor() {
        this.almacenCola = {};        
        this.inicio = 0;
        this.fin = 0;            
    }
    // Agrega un nuevo elemento al final de la cola
    enqueue(elemento) {      
        this.almacenCola[this.fin] = elemento;   
        this.fin++;                            
        return this.almacenCola;                    
    }
    // Retorna el primer elemento de la cola y lo elimina
    dequeue() {              
        if (this.inicio === this.fin) {
            return null;
        }
        const elemento = this.almacenCola[this.inicio];
        delete this.almacenCola[this.inicio];
        this.inicio++;
        return elemento;
    }
    // Retorna el primer elemento de la cola sin eliminarlo
    peek() {                 
        if (this.size() === 0) {
            return null;
        }
        return this.almacenCola[this.inicio];
    }
    // Retorna el número de elementos que contiene la cola
    size() {                 
        return this.fin - this.inicio;
    }
    // Retorna los elementos que contiene la cola
    print() {                
        return this.almacenCola;
    }
    // Retorna true si la cola está vacía y false si no lo está
    isEmpty() {             
        return this.inicio === this.fin;
    }
}

const cola = new Cola();
cola.enqueue(8);
cola.enqueue(9);
cola.enqueue(10);
console.log("Contenido de la cola:", cola.print()); 
console.log("Primer elemento (peek):", cola.peek()); 
console.log("Elemento eliminado (dequeue):", cola.dequeue()); 
console.log("Contenido de la cola después del dequeue:", cola.print()); 
console.log("Tamaño de la cola:", cola.size()); 
console.log("¿La cola está vacía?", cola.isEmpty());

cola.dequeue(); 
cola.dequeue(); 
console.log("¿La cola está vacía después de vaciarla?", cola.isEmpty());