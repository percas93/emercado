let autosArray = []; /*Variable donde guardar el return del getJSONData
                utilizamos una array para poder recorrerlo con un for*/

document.addEventListener("DOMContentLoaded", function(){
        getJSONData(PRODUCTS_URL+"101.json")
        .then(function(result){ 
            if (result.status === 'ok') {
                autosArray  = result.data.products; //Guarda el return del getJSONDATA en variable autos
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

function showProductsList(){

    let agregarAlHTML = ""
    for(let i = 0; i < autosArray.length; i++){
        agregarAlHTML += `
            <div onclick="setCatID(${autosArray[i].id})" class="list-group-item list-group-item-action cursor-active">
                <div class="row">
                    <div class="col-3">
                        <img src="${autosArray[i].image}" alt="${autosArray[i].description}" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">${autosArray[i].name}</h4>
                            <small class="text-muted">${autosArray[i].productCount} artículos</small>
                        </div>
                        <p class="mb-1">${autosArray[i].description}</p>
                    </div>
                </div>
            </div>
            `
        }
        document.getElementById("prod-list-container").innerHTML += agregarAlHTML;

}

document.addEventListener("DOMContentLoaded", showProductsList());