

//Declaración e instanciación de una clase 
export class Telefono {
    private tipo: string;
    private numero: number;
   
    // Constructor
    constructor(a: string, b: number) {
        this.tipo = a;
        this.numero = b;

    }

    //Getters y Setters
    public getTipo(): string {
        
            return this.tipo;
    }

    public setTipo(tipo: string): void {
        this.tipo = tipo;

    }
    public getNumero(): number {
        
        return this.numero;
}

public setNumero(numero: number): void {
    this.numero = numero;

}

}
