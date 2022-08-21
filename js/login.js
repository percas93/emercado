var btnEnviar = document.getElementById("btnEnviar"); 
var mail = document.getElementById("mail");
var pass = document.getElementById("pass"); 

btnEnviar.addEventListener('click', () => {
    if (mail.value != '' && pass.value != '') {
        window.location = "index.html";
        localStorage.setItem("loginStatus", "logged");
    }
    else{
        alert("Existen campos sin completar");
    }
}
);