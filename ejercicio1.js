const nomUsuario = document.querySelector("#contenedor-usuario");
const contrasenia = document.querySelector("#contrasenia");

const usuariosNombresRegistrados = ["carla","juan"];
const usuariosContraseniasRegistradas =["carla1.","juan1."];

let usuarioIngresado = "def nombre";
let contraseniaIngresada = "def contrasenia";

function verificar() {
    usuariosContraseniasRegistradas = inputUsuario.value;
    usuariosContraseniasRegistradas = inputContrasenia.value;

for (let i = 0; i < usuariosNombresRegistrados.length; i++) {
    
    if (((contraseniaIngresada == usuariosContraseniasRegistradas[i]) && (usuarioIngresado == usuariosContraseniasRegistradas[i]))) {
        pResultado.style.color ="green";
        pResultado.innerhtml

    }
}
}