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

/*
//FUNCIÓN QUE COMPLETA EL HTML A PARTIR DEL OBJETO specificProduct
function showProductsInfo() {

    let textoaAgregar =
        `
            <div class="list-group-item list-group-item-action cursor-active" onclick="localStorage.setItem('prodID', ${productsArray[i].id}); window.location='product-info.html';">
                <div class="row">
                    <div class="col-3">
                        <img src="${productsArray[i].image}" alt="${productsArray[i].description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${productsArray[i].name} - ${productsArray[i].cost} ${productsArray[i].currency}</h4>
                            <small class="text-muted">${productsArray[i].soldCount} vendidos</small>
                        </div>
                        <p class="mb-1">${productsArray[i].description}</p>
                    </div>
                </div>
            </div>
            `

    
document.getElementById("prod-info-container").innerHTML = textoaAgregar;

}*/