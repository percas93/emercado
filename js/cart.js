arrayCart = []

//EJECUTAR FUNCIONES PARA VER CONTENIDO AL CARGAR
document.addEventListener("DOMContentLoaded", function () {

    showUserButton()
    
    loginCheck();
    
    getJSONData(CART_INFO_URL + 25801 + ".json")
        .then(function (result) {
            if (result.status === 'ok') {
                arrayCart = result.data.articles;
                let auxLSCart = JSON.parse(localStorage.getItem("localCart"));
                concatNoDuplicates(arrayCart, auxLSCart);
            }
        })
});

//FUNCIÓN QUE AGREGA A UN ARRAY DESDE OTRO SIN REPETIR
function concatNoDuplicates(finalArr, arrToAdd, pk="id"){
    arrToAdd.forEach(eArrToAdd => {
        if (!finalArr.some(eFinalArr => eArrToAdd[pk] == eFinalArr[pk])){
            finalArr.push(eArrToAdd);
        }
    });
}//La redacción de esta función la pensé para su reutilización