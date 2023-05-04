

//Declaración e instanciación de una clase 
export class Mail {
    private tipo: string;
    private direccion: string;
   
    // Constructor
    constructor(a: string, b: string) {
        this.tipo = a;
        this.direccion = b;

    }

    //Getters y Setters
    public getTipo(): string {
        
            return this.tipo;
    }

    public setTipo(tipo: string): void {
        this.tipo = tipo;

    }
    public getDireccion(): string {
        
        return this.direccion;
}

public setDireccion(direccion: string): void {
    this.direccion = direccion;

}

}
