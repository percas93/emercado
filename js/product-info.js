let specificProduct = {}
let commentsArray;

//EJECUTAR FUNCIONES PARA VER CONTENIDO AL CARGAR
document.addEventListener("DOMContentLoaded", function () {

    getJSONData(PRODUCT_INFO_URL + localStorage.getItem("prodID") + ".json")
        .then(function (result) {
            if (result.status === 'ok') {
                specificProduct = result.data;
                showProductInfo();
            }
        });

    getJSONData(PRODUCT_INFO_COMMENTS_URL + localStorage.getItem("prodID") + ".json")
        .then(function (result2) {
            if (result2.status === 'ok') {
                commentsArray = result2.data;
                showCommentSection();
            }
        });

    showUserButton();

});

//FUNCIÓN QUE AGREGA COMENTARIO AL ARRAY JS Y VUELVE A CARGAR COMENTARIOS
document.getElementById("btnEnviar").addEventListener('click', function () {
    let commentToAdd = {
        product: localStorage.getItem('prodID'),
        score: document.getElementById('inputScore').value,
        description: document.getElementById('commentBox').value,
        user: localStorage.getItem('user'),
        dateTime: "[fecha ilustrativa]2022-01-04 11:16:48"
    };
    commentsArray.push(commentToAdd);
    showCommentSection();
    //Restaurar valores de inputs:
    document.getElementById('inputScore').value = 1
    document.getElementById('commentBox').value = ""

});

//FUNCIÓN QUE COMPLETA EL HTML A PARTIR DEL OBJETO specificProduct
function showProductInfo() {

    document.getElementById("prod-name-to-show").textContent = specificProduct.name
    document.getElementById("prod-cost-to-show").textContent = specificProduct.currency + " " + specificProduct.cost
    document.getElementById("prod-desc-to-show").textContent = specificProduct.description
    document.getElementById("prod-cat-to-show").textContent = specificProduct.category
    document.getElementById("prod-u-sold-to-show").textContent = specificProduct.soldCount
    specificProduct.images.forEach(pic => {
        document.getElementById("img-grid").innerHTML +=
            "<div class='col'><img class='img-fluid' src=" + pic + "><div>"
    });
    for (let i; i < specificProduct.relatedProducts.length; i++) {
        let relatedProdToHTML = `
        <div class='card'>
        <img class='card-img-top' src=${specificProduct.relatedProducts[i].image}>
        <p>${specificProduct.relatedProducts[i].name}</p>
        <div>
        `
        document.getElementById("related-Prod").innerHTML += relatedProdToHTML;
    };

}

//FUNCIÓN QUE COMPLETA EL HTML CON LOS COMENTARIOS (DIFERENCIADA POR FETCHING)
function showCommentSection() {

    document.getElementById("comment-section").innerHTML = "" //Para resetear en el caso que se use la función para volver a cargar comentarios al agregar más
    let contador = 0
    for (let j = 0; j < commentsArray.length; j++) {
        document.getElementById("comment-section").innerHTML += `
        <li class="list-group-item d-flex justify-content-between col">
              <div>
                <div style="display: inline-flex">
                    <h4 class="my-0">${commentsArray[j].user}</h4><p class="text-muted">${commentsArray[j].dateTime}</p>
                    <span class="fa fa-star" id="com${contador}-star1"></span>
                    <span class="fa fa-star" id="com${contador}-star2"></span>
                    <span class="fa fa-star" id="com${contador}-star3"></span>
                    <span class="fa fa-star" id="com${contador}-star4"></span>
                    <span class="fa fa-star" id="com${contador}-star5"></span>
                </div>
                <p>${commentsArray[j].description}</p>
              </div>
            </li>
        `
        for (let num = 1; num <= commentsArray[j].score && num > 0; num++) {
            document.getElementById("com" + contador + "-star" + num).setAttribute('class', 'fa fa-star checked');
        }
        contador += 1
    }

}