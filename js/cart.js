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
                if (auxLSCart) {//condicionar la adición de objetos del localStorage a que efectivamente los haya
                    concatNoDuplicates(arrayCart, auxLSCart);
                }
                showCartProds();
                updateSubtotal();
            }
        })
});

//FUNCIÓN QUE AGREGA A UN ARRAY DESDE OTRO SIN REPETIR
function concatNoDuplicates(finalArr, arrToAdd, pk = "id") {
    arrToAdd.forEach(eArrToAdd => {
        if (!finalArr.some(eFinalArr => eArrToAdd[pk] == eFinalArr[pk])) {
            finalArr.push(eArrToAdd);
        }
    });
}//La redacción de esta función la pensé para su reutilización

//FUNCIÓN QUE COMPLETA EL HTML A PARTIR DEL ARRAY COMPLETO DE OBJETOS DEL CARRITO
function showCartProds() {
    arrayCart.forEach(product => {
        let rowToAppend = `
        <tr class="prodRow">
            <td><img src="${product.image}" alt="Imagen del producto" class="img-fluid" style="height: 3vw"></td>
            <td>${product.name}</td>
            <td>${product.currency} ${product.unitCost}</td>
            <td><input type="text" class="rowInput form-control" value="${product.count}" style="width:3em"></td>
            <td>${product.currency} <span class="rowSubtotal">${product.unitCost * product.count}</span></td>
        </tr>
        `
        document.getElementById("cartTableBody").innerHTML += rowToAppend
    })
};

//FUNCIÓN QUE OTORGA A LOS SUBTOTALES LA CAPACIDAD DE ACTUALIZARSE ANTE LA MODIFICACIÓN DE CANTIDADES
function updateSubtotal() {
    let everyInput = document.getElementsByClassName("rowInput");
    let everySubtotal = document.getElementsByClassName("rowSubtotal");
    for (let i = 0; i < everyInput.length; i++) {
        everyInput[i].oninput = function() {
            everySubtotal[i].innerHTML = everyInput[i].value * arrayCart[i].unitCost;
        };
    };
};