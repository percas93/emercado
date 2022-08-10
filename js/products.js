let productos = [];

document.addEventListener("DOMContentLoaded", function(){
        getJSONData(CATEGORIES_URL)
        .then(function(){
            if 
        })
})




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
