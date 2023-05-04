"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
//Declaración e instanciación de una clase 
var Telefono = /** @class */ (function () {
    // Constructor
    function Telefono(a, b) {
        this.tipo = a;
        this.numero = b;
    }
    //Getters y Setters
    Telefono.prototype.getTipo = function () {
        return this.tipo;
    };
    Telefono.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    Telefono.prototype.getNumero = function () {
        return this.numero;
    };
    Telefono.prototype.setNumero = function (numero) {
        this.numero = numero;
    };
    return Telefono;
}());
exports.Telefono = Telefono;
