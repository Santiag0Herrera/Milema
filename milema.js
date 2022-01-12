
alert("Hola, Bienvenido a Milema! Create una cuenta.");
class Perfil{
    constructor(nombre, apellido, contraseña){
    this.nombre = nombre;
    this.apellido = apellido;
    this.constraseña = contraseña;
    }
    saludar(){
        alert("Buen dia "+ this.nombre + " " + this.apellido);
    }
}
const usuario = new Perfil(prompt("Cual es tu Nombre?"), prompt("Cual es tu apellido?"), prompt("Crea una Contraseña"));
usuario.saludar();