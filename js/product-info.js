let specificProduct = {}
let contador = 0;

//EJECUTAR FUNCIONES PARA VER CONTENIDO AL CARGAR
document.addEventListener("DOMContentLoaded", function () {

    getJSONData(PRODUCTS_URL + urlDerivation() + ".json") //
        .then(function (result) {
            if (result.status === 'ok') {
                let arrayAuxiliar = result.data.products;
                arrayAuxiliar.forEach(producto => {
                    if (producto.id == localStorage.getItem("prodID")) {
                        specificProduct =  producto;
                        contador =+ 1;
                        return true; //Esto es para terminar la iteración al encontrar el producto
                    }
                });
            }
        });

});

//FUNCIÓN QUE DETERMINA EL URL PARA EL FETCH A PARTIR DEL CÓDIGO DEL PRODUCTO
function urlDerivation() {
    if (localStorage.getItem("prodID").substring(0, 3) == "509"){return "101"};
    if (localStorage.getItem("prodID").substring(0, 3) == "507"){return "102"};
    if (localStorage.getItem("prodID").substring(0, 3) == "608"){return "103"};
    if (localStorage.getItem("prodID").substring(0, 3) == "402"){return "105"};
}

/*
//FUNCIÓN QUE COMPLETA EL HTML A PARTIR DE LA LISTA
function showProductsList() {

    let textoaAgregar = ""
    for (let i = 0; i < productsArray.length; i++) {
        if ((isNaN(minCount) || productsArray[i].cost >= minCount) && (isNaN(maxCount) || productsArray[i].cost <= maxCount)) {
            textoaAgregar += `
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
        }
    }
    document.getElementById("prod-list-container").innerHTML = textoaAgregar;

}*/