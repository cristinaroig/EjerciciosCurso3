import {Persona}from './Persona';
import {Direccion}from './Direccion';
import {Telefono}from './Telefono';
import{Mail} from './Mail';
var direccion1 = new Direccion("c/prueba",1,3,"A",46123,"Valencia","Valencia");
var direccion2 = new Direccion("c/calle",4,2,"C",46123,"Castellon","Castellon");
var telefono1 = new Telefono("movil",645345187);
var telefono2 = new Telefono("oficina",963456768);
var email1 = new Mail("trabajo","a@gmail.com");
var email2 = new Mail("casa","b@gmail.com");
var persona1 = new Persona("Ana","Perez Hernandez",31,"12434343J",new Date("12/01/1992",),"Rojo","F",[direccion1,direccion2],[telefono1,telefono2],[email1,email2],"hola");

var direccion3 = new Direccion("c/avenida",8,3,"S",46523,"Alicante","Alicante");
var direccion4 = new Direccion("c/Colon",4,1,"B",46323,"Madrid","Madrid");
var telefono3 = new Telefono("movil",690812987);
var telefono4 = new Telefono("oficina",961119933);
var email3 = new Mail("trabajo","c@gmail.com");
var email4 = new Mail("casa","d@gmail.com");
var persona2 = new Persona("Pilar","Casares Perez",18,"12345678H",new Date("04/26/2005",),"Azul","F",[direccion3,direccion4],[telefono3,telefono4],[email3,email4],"hola");

var direccion5 = new Direccion("c/inventada",90,8,"A",46345,"Extremadura","Extremadura");
var direccion6 = new Direccion("c/ovni",45,3,"B",46222,"Salamanca","Salamanca");
var telefono5 = new Telefono("movil",651987234);
var telefono6 = new Telefono("oficina",967340981);
var email5 = new Mail("trabajo","e@gmail.com");
var email6 = new Mail("casa","f@gmail.com");
var persona3 = new Persona("Maria","Hernandez Casado",22,"85942145N",new Date("02/28/2001",),"Morado","F",[direccion5,direccion6],[telefono5,telefono6],[email5,email6],"hola");

var dni = "85942145N";
console.log("Datos Persona 1")
console.log(persona1.getNombre());
console.log(persona1.getApellidos());
console.log(persona1.getColorFa());
console.log(persona1.getCumpleanyo().getDate()+"/"+(persona1.getCumpleanyo().getMonth()+1)+"/"+persona1.getCumpleanyo().getFullYear());
console.log(persona1.getDni());
console.log(persona1.getEdad());
console.log(persona1.getSexo());
console.log(persona1.getNota());
for (var i=0;i<persona1.getDireccion().length;i++){
console.log(persona1.getDireccion()[i]);
}
for (var i=0;i<persona1.getTelefono().length;i++){
    console.log(persona1.getTelefono()[i]);
    }
for (var i=0;i<persona1.getEmail().length;i++){
    console.log(persona1.getEmail()[i]);
    }

console.log("Datos Persona 2")
console.log(persona2.getNombre());
console.log(persona2.getApellidos());
console.log(persona2.getColorFa());
console.log(persona2.getCumpleanyo().getDate()+"/"+(persona1.getCumpleanyo().getMonth()+1)+"/"+persona1.getCumpleanyo().getFullYear());
console.log(persona2.getDni());
console.log(persona2.getEdad());
console.log(persona2.getSexo());
console.log(persona2.getNota());
for (var i=0;i<persona2.getDireccion().length;i++){
    console.log(persona2.getDireccion()[i]);
}
for (var i=0;i<persona2.getTelefono().length;i++){
    console.log(persona2.getTelefono()[i]);
}
for (var i=0;i<persona2.getEmail().length;i++){
    console.log(persona2.getEmail()[i]);
}

console.log("Datos Persona 3")
console.log(persona3.getNombre());
console.log(persona3.getApellidos());
console.log(persona3.getColorFa());
console.log(persona3.getCumpleanyo().getDate()+"/"+(persona3.getCumpleanyo().getMonth()+1)+"/"+persona3.getCumpleanyo().getFullYear());
console.log(persona3.getDni());
console.log(persona3.getEdad());
console.log(persona3.getSexo());
console.log(persona3.getNota());
for (var i=0;i<persona3.getDireccion().length;i++){
    console.log(persona3.getDireccion()[i]);
}
for (var i=0;i<persona3.getTelefono().length;i++){
    console.log(persona3.getTelefono()[i]);
}
for (var i=0;i<persona3.getEmail().length;i++){
    console.log(persona3.getEmail()[i]);
}
            

var ListaPersonas: Persona[]= [persona1,persona2,persona3];
for (var i=0; i<ListaPersonas.length;i++){
    if (ListaPersonas[i].getDni() == dni){
        var direccionNueva = new Direccion("c/calleAñadida",10,4,"S",16345,"Barcelona","Barcelona");
        var telefonoNuevo = new Telefono ("trabajoNuevo",609126745);
        var emailNuevo = new Mail("casaNuevo","nuevo@gmail.com");
        for (var j= 0; j<ListaPersonas[i].getDireccion().length;j++){
            ListaPersonas[i].getDireccion()[j].setCalle("c/nuevaCalle "+j);
            ListaPersonas[i].getTelefono()[j].setTipo("cambiado "+j);
            ListaPersonas[i].getEmail()[j].setDireccion("cambiado"+j+"@gmail.com");
        }
       var direcciones:Direccion[] = ListaPersonas[i].getDireccion();
       var telefonos:Telefono[]=  ListaPersonas[i].getTelefono();
       var emails:Mail[] =  ListaPersonas[i].getEmail();
       direcciones[direcciones.length] = direccionNueva;
       telefonos[telefonos.length] = telefonoNuevo;
       emails[emails.length] = emailNuevo;
       ListaPersonas[i].setDireccion(direcciones);
       ListaPersonas[i].setTelefono(telefonos);
       ListaPersonas[i].setEmail(emails);

    }
}
for (var i=0;i<persona3.getDireccion().length;i++){
    console.log(persona3.getDireccion()[i]);
}
for (var i=0;i<persona3.getTelefono().length;i++){
    console.log(persona3.getTelefono()[i]);
}
for (var i=0;i<persona3.getEmail().length;i++){
    console.log(persona3.getEmail()[i]);
}