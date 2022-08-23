document.addEventListener("DOMContentLoaded", function(){
    
    loginCheck();

    showUserButton()
    
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        localStorage.setItem("catName", "Autos");
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        localStorage.setItem("catName", "Juguetes");
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        localStorage.setItem("catName", "Muebles");
        window.location = "products.html"
    });
});


//windows.location sirve para dirigir el navegador a otro sitio
//windows.location sirve para dirigir el navegador a otro sitio
//setItem(a, b) es el método que almacena en localStorage con párametros de categoría y valor