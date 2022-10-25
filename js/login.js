var btnEnviar = document.getElementById("btnEnviar"); 
var mail = document.getElementById("mail");
var pass = document.getElementById("pass"); 

btnEnviar.addEventListener('click', () => {
    if (mail.value != '' && pass.value != '') {
        localStorage.setItem("loginStatus", "logged");
        localStorage.setItem("user", mail.value);
        window.location = history.back();
    }
    else{
        alert("Existen campos sin completar");
    }
}
);