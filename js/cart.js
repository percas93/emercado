arrayCart = []

//EJECUTAR FUNCIONES PARA VER CONTENIDO AL CARGAR
document.addEventListener("DOMContentLoaded", function () {

    getJSONData(CART_INFO_URL + 25801 + ".json")
        .then(function (result) {
            if (result.status === 'ok') {
                arrayCart = result.data.articles;
                let auxLSCart = JSON.parse(localStorage.getItem("localCart"));
                arrayCart = arrayCart.concat(auxLSCart);
            }
        })
});