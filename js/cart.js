arrayCart = []

//EJECUTAR FUNCIONES PARA VER CONTENIDO AL CARGAR
document.addEventListener("DOMContentLoaded", function () {

    getJSONData(CART_INFO_URL + 25801 + ".json")
        .then(function (result) {
            if (result.status === 'ok') {
                arrayCart = result.data.articles;
                let auxLSCart = JSON.parse(localStorage.getItem("localCart"));
                arrayCart.append(auxLSCart);
                //gettingLSCart();
            }
        })
});

/*
//FUNCIÓN QUE MUEVE PRODUCTOS DEL CARRITO DE COMPRAS SEGÚN URL AL ARRAY OPERATIVO
function gettingJSONCart(arrayi, arrayf) {
    arrayi.forEach(product => {
        object = { id: product.id, count: product.count }
        arrayf.push(object);
    });
}

//FUNCIÓN QUE MUEVE PRODUCTOS DEL CARRITO DE COMPRAS SEGÚN LOCALSTORAGE AL ARRAY OPERATIVO
function gettingLSCart() {
    let itemsCount = localStorage.getItem("itemsCount"); //itemsCount es un contador de guardados en LS
    for (let i; i < itemsCount; i++) {
        object = localStorage.getItem("cartProd" + i).json
        if (arrayCart.some(e => e.id === object.id)) {//Si se repite un producto guardado..
            arrayCart.find(e => e.id === object.id).count = object.count //..sólo cambiamos su cantidad
        }
        else { //Si el producto no se repite, lo agregamos al array auxiliar prodFromLS
            arrayCart.push(object);
        }
    }
};*/