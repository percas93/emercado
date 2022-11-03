arrayCart = []

//EJECUTAR FUNCIONES PARA VER CONTENIDO AL CARGAR
document.addEventListener("DOMContentLoaded", function () {

    showUserButton()

    loginCheck();

    if (localStorage.getItem("localCart")) {//condicionado a la existencia de un carrito en localStorage
        arrayCart = JSON.parse(localStorage.getItem("localCart"));
    }//desde que puedo guardar cantidades modificando el carrito, cabe priorizar el localCart

    getJSONData(CART_INFO_URL + 25801 + ".json")
        .then(function (result) {
            if (result.status === 'ok') {
                let auxExtCart = result.data.articles;
                concatNoDuplicates(arrayCart, auxExtCart);
                updateLSCart();
                showCartProds();
                updateRowSubtotal();
                updateSubtotal ()
            }
        })
});

//FUNCIÓN QUE AGREGA A UN ARRAY DESDE OTRO SIN REPETIR
function concatNoDuplicates(finalArr, arrToAdd, pk = "id", overwrite = false) {
    arrToAdd.forEach(eArrToAdd => {
        if (!finalArr.some(eFinalArr => eArrToAdd[pk] == eFinalArr[pk])) {
            finalArr.push(eArrToAdd);
        }
        else if (overwrite) {//incluir esto si queremos que el objeto repetido sobreescriba al antiguo
            let elementToReplace = finalArr.find(e => e[pk] == eArrToAdd[pk]);
            Object.assign(elementToReplace, eArrToAdd);
        }
    });
}//Esta función la pensé para su reutilización

//FUNCIÓN QUE COMPLETA EL HTML A PARTIR DEL ARRAY COMPLETO DE OBJETOS DEL CARRITO
function showCartProds() {
    arrayCart.forEach(product => {
        let rowToAppend = `
        <tr class="prodRow">
            <td><img src="${product.image}" alt="Imagen del producto" class="img-fluid" style="height: 3vw"></td>
            <td>${product.name}</td>
            <td>${product.currency} ${product.unitCost}</td>
            <td><input type="number" class="rowInput form-control" value="${product.count}" style="width:4em"></td>
            <td>${product.currency} <span class="rowSubtotal">${product.unitCost * product.count}</span></td>
        </tr>
        `
        document.getElementById("cartTableBody").innerHTML += rowToAppend
    })
};//no darle márgenes laterales a la tabla fue una elección estética

//FUNCIÓN QUE OTORGA A LOS SUBTOTALES LA CAPACIDAD DE ACTUALIZARSE ANTE LA MODIFICACIÓN DE CANTIDADES
function updateRowSubtotal() {
    let everyInput = document.getElementsByClassName("rowInput");//geT colección de nodos rowInputs
    let everyRowSubtotal = document.getElementsByClassName("rowSubtotal");//get colección de nodos rowSubtotal
    for (let i = 0; i < everyInput.length; i++) {
        everyInput[i].oninput = function() {
            everyRowSubtotal[i].innerHTML = everyInput[i].value * arrayCart[i].unitCost;//actualizar subtotal del renglón
            arrayCart[i].count = JSON.parse(everyInput[i].value || 0);//actualizar cantidades en el array
            updateLSCart();//actualizar el array del localStorage
            updateSubtotal();//actualizar subtotal agregado
        };
    };
};

//FUNCIÓN QUE GUARDA NUESTRO CARRITO ACTUALIZADO EN localStorage
function updateLSCart () {
    localStorage.setItem("localCart", JSON.stringify(arrayCart));
};

//FUNCIÓN QUE ACTUALIZA EL SUBTOTAL AGREGADO
function updateSubtotal () {
    let subtotal = 0;
    arrayCart.forEach(e => {
        subtotal += e.unitCost * e.count;
    });
    document.getElementById("productCostText").textContent = subtotal;
};