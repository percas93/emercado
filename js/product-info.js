let specificProduct = {}

//EJECUTAR FUNCIONES PARA VER CONTENIDO AL CARGAR
document.addEventListener("DOMContentLoaded", function () {

    getJSONData(PRODUCT_INFO_URL + localStorage.getItem("prodID") + ".json")
        .then(function (result) {
            if (result.status === 'ok') {
                specificProduct = result.data;
                showProductInfo();
            }
        });

});

//FUNCIÓN QUE COMPLETA EL HTML A PARTIR DEL OBJETO specificProduct
function showProductInfo() {

    document.getElementById("prod-name-to-show").textContent = specificProduct.name
    document.getElementById("prod-cost-to-show").textContent = specificProduct.currency + " " + specificProduct.cost
    document.getElementById("prod-desc-to-show").textContent = specificProduct.description
    document.getElementById("prod-cat-to-show").textContent = specificProduct.category
    document.getElementById("prod-u-sold-to-show").textContent = specificProduct.soldCount
    specificProduct.images.forEach(pic => {
        document.getElementById("img-grid").innerHTML += 
        "<div id='col'><img src=" + pic + "><div>"
    });

}