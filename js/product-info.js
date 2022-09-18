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
    document.getElementById("comment-section")

}

//FUNCIÓN QUE COMPLETA EL HTML CON LOS COMENTARIOS (DIFERENCIADA POR FETCHING)
function showCommentSection() {

    commentsArray.foreach(comment => {
        document.getElementById("comment-section").innerHTML += `
        <li class="list-group-item justify-content-between">
              <div>
                <h6 class="my-0">${comment.user}</h6>
                <p>${comment.description}</p>
              </div>
            </li>
        `
    });

}