let specificProduct = {}

//EJECUTAR FUNCIONES PARA VER CONTENIDO AL CARGAR
document.addEventListener("DOMContentLoaded", function () {

    getJSONData(PRODUCT_INFO_URL + localStorage.getItem("prodID") + ".json")
        .then(function (result) {
            if (result.status === 'ok') {
                specificProduct = result.data;
            }
        });

    showProductsInfo()

});

//FUNCIÓN QUE COMPLETA EL HTML A PARTIR DEL OBJETO specificProduct
function showProductsInfo() {

    document.getElementById("prod-name-to-show").textContent = specificProduct.name

}