const usuarios = [];
var Inicio = prompt("Ya tienes cuenta?");
if (Inicio === "No" || Inicio === "no" || Inicio === "NO"){
    var usuarioNuevo = {
        nombre: prompt("Como te llamas?"),
        correo: prompt("Ingrese un correo electronico"),
        edad: parseInt(prompt("Cuantos años tienes?")),
        direccion: prompt("Direccion de residencia"),
        contraseña: prompt("Escriba una contraseña")
    }
    alert("Bienvenido " + usuarioNuevo.nombre);
}else{
    Inicio = prompt("Nombre de Usuario:");
    const buscar = usuarios.find(nombre => nombre != " ");
    if(buscar != undefined){
        alert("Bienvenido" + this.nombre);
    }else{
        alert("Nombre de usuario no existe. Registrate")
        var usuarioNuevo = {
            nombre: prompt("Como te llamas?"),
            correo: prompt("Ingrese un correo electronico"),
            edad: parseInt(prompt("Cuantos años tiene?")),
            direccion: prompt("Direccion de residencia"),
            contraseña: prompt("Escriba una contraseña")
        }
        alert("Bienvenido " + usuarioNuevo.nombre);
    }
}
console.log("Se ingresaron los siguientes datos: " + " Nombre: " + usuarioNuevo.nombre + " Correo: " + usuarioNuevo.correo + " Edad: " + usuarioNuevo.edad + " Direccion: " + usuarioNuevo.direccion + " Contraseña: " + usuarioNuevo.contraseña);
usuarios.push(usuarioNuevo);