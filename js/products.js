let autosArray = []; /*Variable donde guardar el return del getJSONData
                utilizamos una array para poder recorrerlo con un for*/

document.addEventListener("DOMContentLoaded", function () {
    getJSONData(PRODUCTS_URL + "101.json")
        .then(function (result) {
            if (result.status === 'ok') {
                autosArray = result.data.products; //Guarda el return del getJSONDATA en variable autos
            }

        });
});

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

function showProductsList() {

    let agregarAlHTML = ""
    for (let i = 0; i < autosArray.length; i++) {
        agregarAlHTML += `
            <div onclick="setCatID(${autosArray[2].id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${autosArray[2].image}" alt="${autosArray[2].description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${autosArray[2].name}</h4>
                            <small class="text-muted">${autosArray[2].productCount} artículos</small>
                        </div>
                        <p class="mb-1">${autosArray[2].description}</p>
                    </div>
                </div>
            </div>
            `
    }
    document.getElementById("prod-list-container").innerHTML += agregarAlHTML;

}

showProductsList();