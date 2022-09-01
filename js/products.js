let productsArray = []; /*Variable donde guardar el return del getJSONData
                        utilizamos una array para poder recorrerlo con un for*/

let infoCat = ""

function showProductsList() {

    let textoaAgregar = ""
    for (let i = 0; i < productsArray.length; i++) {
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
    document.getElementById("prod-list-container").innerHTML = textoaAgregar;

}

function changeTitles() {

    document.getElementById("prod-title").innerHTML = localStorage.getItem("catName");
    document.getElementById("prod-subtitle").innerHTML += localStorage.getItem("catName");

}

//SOBRE EL ESTILO: Está claro que no acabo de entender las clases del bootstrap, las tomé del ejercicio 4.6

document.addEventListener("DOMContentLoaded", function () {

    showUserButton();

    changeTitles(); //Agrega la categoría en título y productos

    getJSONData(PRODUCTS_URL + localStorage.getItem("catID") + ".json")
        .then(function (result) {
            if (result.status === 'ok') {
                productsArray = result.data.products; //Guarda el return del getJSONDATA en variable autos
                showProductsList(); //Agrega los productos
            }
        });
});

document.getElementById("sortAsc").addEventListener("click", function () {
    productsArray.sort(function (a, b) {
        return a.cost - b.cost;
    });
    showProductsList();
});

document.getElementById("sortDesc").addEventListener("click", function () {
    productsArray.sort(function (a, b) {
        return b.cost - a.cost;
    });
    showProductsList();
});

document.getElementById("sortByCount").addEventListener("click", function () {
    productsArray.sort(function (a, b) {
        return b.soldCount - a.soldCount;
    });
    showProductsList();
});

document.getElementById("clearRangeFilter").addEventListener("click", function () {
    document.getElementById("rangeFilterCountMin").value = "";
    document.getElementById("rangeFilterCountMax").value = "";

    minCount = undefined;
    maxCount = undefined;

});

document.getElementById("rangeFilterCount").addEventListener("click", function () {
    //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
    //de productos por categoría.
    minCount = document.getElementById("rangeFilterCountMin").value;
    maxCount = document.getElementById("rangeFilterCountMax").value;

    if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0) {
        minCount = parseInt(minCount);
    }
    else {
        minCount = undefined;
    }

    if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0) {
        maxCount = parseInt(maxCount);
    }
    else {
        maxCount = undefined;
    }

    showProductsList();
});