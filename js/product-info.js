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

    for (const comment of commentsArray) {
        document.getElementById("comment-section").innerHTML += `
        <li class="list-group-item d-flex justify-content-between">
              <div>
                <nobr><h4 class="my-0">${comment.user}</h4><p>${comment.dateTime}</p></nobr>
                <p>${comment.description}</p>
              </div>
            </li>
        `
    }
}

//FUNCIÓN QUE COMPLETA EL HTML CON LOS COMENTARIOS (DIFERENCIADA POR FETCHING)
function showCommentSection() {

    let contador = 0
    for (let j = 0; j < commentsArray.length; j++) {
        document.getElementById("comment-section").innerHTML += `
        <li class="list-group-item d-flex justify-content-between">
              <div>
                <h4 class="my-0">${commentsArray[j].user}</h4><p>${commentsArray[j].dateTime}</p>
                <span class="fa fa-star" id="com${contador}-star1"></span>
                <span class="fa fa-star" id="com${contador}-star2"></span>
                <span class="fa fa-star" id="com${contador}-star3"></span>
                <span class="fa fa-star" id="com${contador}-star4"></span>
                <span class="fa fa-star" id="com${contador}-star5"></span>
                <p>${commentsArray[j].description}</p>
              </div>
            </li>
        `
        for (let num = 1; num < commentsArray[j].score && num > 0; num++){
            document.getElementById("com" + contador + "-star" + num).setAttribute('class', 'fa fa-star checked');
        }
        contador += 1
    }

}