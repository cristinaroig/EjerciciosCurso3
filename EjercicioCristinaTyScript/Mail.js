"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
//Declaración e instanciación de una clase 
var Mail = /** @class */ (function () {
    // Constructor
    function Mail(a, b) {
        this.tipo = a;
        this.direccion = b;
    }
    //Getters y Setters
    Mail.prototype.getTipo = function () {
        return this.tipo;
    };
    Mail.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    Mail.prototype.getDireccion = function () {
        return this.direccion;
    };
    Mail.prototype.setDireccion = function (direccion) {
        this.direccion = direccion;
    };
    return Mail;
}());
exports.Mail = Mail;
