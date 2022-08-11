let autosArray = []; /*Variable donde guardar el return del getJSONData
                utilizamos una array para poder recorrerlo con un for*/

function showProductsList() {

    let agregarAlHTML = ""
    for (let i = 0; i < autosArray.length; i++) {
        let autoActual = autosArray[i];
        agregarAlHTML += `
            <div onclick="setCatID(${autoActual.id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${autoActual.image}" alt="${autoActual.description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${autoActual.name}</h4>
                            <small class="text-muted">${autoActual.productCount} artículos</small>
                        </div>
                        <p class="mb-1">${autoActual.description}</p>
                    </div>
                </div>
            </div>
            `
    }
    document.getElementById("prod-list-container").innerHTML = agregarAlHTML;

}

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
    getJSONData(PRODUCTS_URL + "101.json")
        .then(function (result) {
            if (result.status === 'ok') {
                autosArray = result.data.products; //Guarda el return del getJSONDATA en variable autos
                showProductsList();
            }
        });
});
