let productosArray = []; /*Variable donde guardar el return del getJSONData
                utilizamos una array para poder recorrerlo con un for*/

let infoCat = ""

function showProductsList() {

    let textoaAgregar = ""
    for (let i = 0; i < productosArray.length; i++) {
        textoaAgregar += `
            <div onclick="setCatID(${productosArray[i].id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${productosArray[i].image}" alt="${productosArray[i].description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${productosArray[i].name} - ${productosArray[i].cost} ${productosArray[i].currency}</h4>
                            <small class="text-muted">${productosArray[i].soldCount} vendidos</small>
                        </div>
                        <p class="mb-1">${productosArray[i].description}</p>
                    </div>
                </div>
            </div>
            `
    }
    document.getElementById("prod-list-container").innerHTML = textoaAgregar;

}

function changeTitles() {

    document.getElementById("prod-title").innerHTML += localStorage.getItem("catName");
    document.getElementById("prod-subtitle").innerHTML += localStorage.getItem("catName");

}

//SOBRE EL ESTILO: Está claro que no acabo de entender las clases del bootstrap, las tomé del ejercicio 4.6


/*Referencia Ejercicio 4.6 

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(LIST_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            categoriesArray = resultObj.data;
            showCategoriesList(categoriesArray);
        }
    });
});
*/

document.addEventListener("DOMContentLoaded", function () {
    getJSONData(PRODUCTS_URL + localStorage.getItem("catID") + ".json")
        .then(function (result) {
            if (result.status === 'ok') {
                //localStorage.setItem("catName", result.data.catName); //Colocamos el nombre de la categoría en localStorage
                productosArray = result.data.products; //Guarda el return del getJSONDATA en variable autos
                changeTitles(); //Agrega la categoría en título y productos
                showProductsList(); //Agrega los productos
            }
        });
});