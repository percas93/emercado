let productsArray = []; //Lista de productos para el JavaScript

//EJECUTAR FUNCIONES PARA VER CONTENIDO AL CARGAR
document.addEventListener("DOMContentLoaded", function () {

    showUserButton();

    changeTitles();

    getJSONData(PRODUCTS_URL + localStorage.getItem("catID") + ".json")
        .then(function (result) {
            if (result.status === 'ok') {
                productsArray = result.data.products;
                showProductsList();
            }
        });
});

//FUNCIÓN QUE COMPLETA EL HTML A PARTIR DE LA LISTA
function showProductsList() {
    
    minCount = parseInt(document.getElementById("rangeFilterMin").value);
    maxCount = parseInt(document.getElementById("rangeFilterMax").value);

    let textoaAgregar = ""
    for (let i = 0; i < productsArray.length; i++) {
        if ((isNaN(minCount) || productsArray[i].cost >= minCount) && (isNaN(maxCount) || productsArray[i].cost <= maxCount)) {
            textoaAgregar += `
            <div class="list-group-item list-group-item-action cursor-active">
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

}

//FUNCIÓN QUE AGREGA LOS TÍTULOS SEGÚN CATEGORÍA GUARDADA
function changeTitles() {

    document.getElementById("prod-title").innerHTML = localStorage.getItem("catName");
    document.getElementById("prod-subtitle").innerHTML += localStorage.getItem("catName");

}


//CLICK EN BOTÓN DE ORDENAMIENTO ASCENDENTE (PRECIO)
document.getElementById("sortAsc").addEventListener("click", function () {
    productsArray.sort(function (a, b) {
        return a.cost - b.cost;
    });
    showProductsList();
});

//CLICK EN BOTÓN DE ORDENAMIENTO DESCENDENTE (PRECIO)
document.getElementById("sortDesc").addEventListener("click", function () {
    productsArray.sort(function (a, b) {
        return b.cost - a.cost;
    });
    showProductsList();
});

//CLICK EN BOTÓN DE ORDENAMIENTO DESCENDENTE (VENDIDOS)
document.getElementById("sortByCount").addEventListener("click", function () {
    productsArray.sort(function (a, b) {
        return b.soldCount - a.soldCount;
    });
    showProductsList();
});

document.getElementById("rangeFilterCount").addEventListener("click", function () {
    showProductsList();
});

document.getElementById("clearRangeFilter").addEventListener("click", function () {
    document.getElementById("rangeFilterCountMin").value = "";
    document.getElementById("rangeFilterCountMax").value = "";
    showProductsList();
});