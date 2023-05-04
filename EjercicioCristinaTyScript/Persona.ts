
import {Direccion} from './Direccion';
import{Telefono} from './Telefono';
import{Mail} from './Mail';
//Declaración e instanciación de una clase 
export class Persona {
    private nombre: string;
    private apellidos: string;
    private edad: number;
    private dni: string;
    private cumpleanyo: Date;
    private colorFa: string;
    private sexo: string;
    private direccion: Array<Direccion>;
    private telefono: Array<Telefono>;
    private email: Array<Mail>;
    private nota: string;
   
    // Constructor
    constructor(a: string, b: string, c:number, d:string,h: Date, e:string, f:string, i: Array<Direccion>,j: Array<Telefono>,k: Array<Mail>,g:string) {
        this.nombre = a;
        this.apellidos = b;
        this.edad = c;
        this.dni = d;
        this.cumpleanyo = h;
        this.colorFa = e;
        this.sexo = f;
        this.direccion =i;
        this.telefono=j;
        this.email = k;
        this.nota=g;
    }

    //Getters y Setters
    public getNombre(): string {
        
            return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;

    }
    public getApellidos(): string {
        
        return this.apellidos;
}

public setApellidos(apellidos: string): void {
    this.apellidos = apellidos;

}
public getEdad(): number {
        
    return this.edad;
}

public setEdad(edad: number): void {
this.edad = edad;

}

public getDni(): string {
        
    return this.dni;
}

public setDni(dni: string): void {
this.dni = dni;

}

public getCumpleanyo(): Date {
        
    return this.cumpleanyo;
}

public setCumpleanyo(cumpleanyo: Date): void {
this.cumpleanyo = cumpleanyo;

}
public getColorFa(): string{
    return this.colorFa;
}
public setColorFa(colorFa: string): void{
    this.colorFa=colorFa;
}
public getSexo(): string{
return this.sexo;
}
public setSexo(sexo: string):void{
    this.sexo = sexo;
}
public getDireccion():Array<Direccion>{
    return this.direccion;
}
public setDireccion(direccion : Array<Direccion>):void{
    this.direccion = direccion;
}
public getTelefono():Array<Telefono>{
    return this.telefono;
}
public setTelefono(telefono : Array<Telefono>):void{
    this.telefono = telefono;
}
public getEmail():Array<Mail>{
    return this.email;
}
public setEmail(email : Array<Mail>):void{
    this.email = email;
}
public getNota():string{
    return this.nota;
}
public setNota(nota: string): void{
    this.nota = nota;
}
}
