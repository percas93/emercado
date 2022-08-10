document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});


//windows.location sirve para dirigir el navegador a otro sitio
//localStorage.setItem sirve para almacenar datos a ser utilizados por JS, similar a las cookies
//setItem(a, b) es el método que almacena en localStorage con párametros de categoría y valor