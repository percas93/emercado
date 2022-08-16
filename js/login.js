var btnEnviar = document.getElementById("btnEnviar"); 
var mail = document.getElementById("mail");
var pass = document.getElementById("pass"); 


btnEnviar.addEventListener('click', () => {
    if (mail != '' && pass != '') {
        window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
    else{
        alert("Existen campos sin completar");
    }
}
);