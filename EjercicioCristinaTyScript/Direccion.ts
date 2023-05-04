

//Declaración e instanciación de una clase 
export class Direccion {
    private calle: string;
    private numero: number;
    private piso: number;
    private letra: string;
    private cp: number;
    private poblacion: string;
    private provincia: string;

   
    // Constructor
    constructor(a: string, b: number, c:number, d:string,h: number, e:string, f:string) {
        this.calle = a;
        this.numero = b;
        this.piso = c;
        this.letra = d;
        this.cp = h;
        this.poblacion = e;
        this.provincia = f;
    }

    //Getters y Setters
    public getCalle(): string {
        
            return this.calle;
    }

    public setCalle(calle: string): void {
        this.calle = calle;

    }
    public getNumero(): number {
        
        return this.numero;
}

public setNumero(numero: number): void {
    this.numero = numero;
}
public getPiso(): number {
        
    return this.piso;
}

public setPiso(piso: number): void {
this.piso = piso;

}

public getLetra(): string {
        
    return this.letra;
}

public setLetra(letra: string): void {
this.letra = letra;

}

public getCp(): number {
        
    return this.cp;
}

public setCp(cp: number): void {
this.cp = cp;

}
public getPoblacion(): string{
    return this.poblacion;
}
public setPoblacion(poblacion: string): void{
    this.poblacion=poblacion;
}
public getProvincia(): string{
return this.provincia;
}
public setProvincia(provincia: string):void{
    this.provincia = provincia;
}
}
