"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
//Declaración e instanciación de una clase 
var Persona = /** @class */ (function () {
    // Constructor
    function Persona(a, b, c, d, h, e, f, i, j, k, g) {
        this.nombre = a;
        this.apellidos = b;
        this.edad = c;
        this.dni = d;
        this.cumpleanyo = h;
        this.colorFa = e;
        this.sexo = f;
        this.direccion = i;
        this.telefono = j;
        this.email = k;
        this.nota = g;
    }
    //Getters y Setters
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Persona.prototype.getApellidos = function () {
        return this.apellidos;
    };
    Persona.prototype.setApellidos = function (apellidos) {
        this.apellidos = apellidos;
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    Persona.prototype.getDni = function () {
        return this.dni;
    };
    Persona.prototype.setDni = function (dni) {
        this.dni = dni;
    };
    Persona.prototype.getCumpleanyo = function () {
        return this.cumpleanyo;
    };
    Persona.prototype.setCumpleanyo = function (cumpleanyo) {
        this.cumpleanyo = cumpleanyo;
    };
    Persona.prototype.getColorFa = function () {
        return this.colorFa;
    };
    Persona.prototype.setColorFa = function (colorFa) {
        this.colorFa = colorFa;
    };
    Persona.prototype.getSexo = function () {
        return this.sexo;
    };
    Persona.prototype.setSexo = function (sexo) {
        this.sexo = sexo;
    };
    Persona.prototype.getDireccion = function () {
        return this.direccion;
    };
    Persona.prototype.setDireccion = function (direccion) {
        this.direccion = direccion;
    };
    Persona.prototype.getTelefono = function () {
        return this.telefono;
    };
    Persona.prototype.setTelefono = function (telefono) {
        this.telefono = telefono;
    };
    Persona.prototype.getEmail = function () {
        return this.email;
    };
    Persona.prototype.setEmail = function (email) {
        this.email = email;
    };
    Persona.prototype.getNota = function () {
        return this.nota;
    };
    Persona.prototype.setNota = function (nota) {
        this.nota = nota;
    };
    return Persona;
}());
exports.Persona = Persona;
