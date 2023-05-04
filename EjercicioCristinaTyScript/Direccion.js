"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
//Declaración e instanciación de una clase 
var Direccion = /** @class */ (function () {
    // Constructor
    function Direccion(a, b, c, d, h, e, f) {
        this.calle = a;
        this.numero = b;
        this.piso = c;
        this.letra = d;
        this.cp = h;
        this.poblacion = e;
        this.provincia = f;
    }
    //Getters y Setters
    Direccion.prototype.getCalle = function () {
        return this.calle;
    };
    Direccion.prototype.setCalle = function (calle) {
        this.calle = calle;
    };
    Direccion.prototype.getNumero = function () {
        return this.numero;
    };
    Direccion.prototype.setNumero = function (numero) {
        this.numero = numero;
    };
    Direccion.prototype.getPiso = function () {
        return this.piso;
    };
    Direccion.prototype.setPiso = function (piso) {
        this.piso = piso;
    };
    Direccion.prototype.getLetra = function () {
        return this.letra;
    };
    Direccion.prototype.setLetra = function (letra) {
        this.letra = letra;
    };
    Direccion.prototype.getCp = function () {
        return this.cp;
    };
    Direccion.prototype.setCp = function (cp) {
        this.cp = cp;
    };
    Direccion.prototype.getPoblacion = function () {
        return this.poblacion;
    };
    Direccion.prototype.setPoblacion = function (poblacion) {
        this.poblacion = poblacion;
    };
    Direccion.prototype.getProvincia = function () {
        return this.provincia;
    };
    Direccion.prototype.setProvincia = function (provincia) {
        this.provincia = provincia;
    };
    return Direccion;
}());
exports.Direccion = Direccion;
