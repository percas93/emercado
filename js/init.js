const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";

let loginCheck =  function(){
  if (localStorage.getItem("loginStatus") !== "logged") {
    window.location = "login.html"
  }
}

let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

//Acá definimos el procedimiento que carga los datos desde una url dada
let getJSONData = function(url){ //Guarda en variable el procedimiento del fetch
    let result = {}; //Crea objeto "result" para el resultado
    showSpinner(); //Abre el spinner
    return fetch(url) //Devuelve los datos
    .then(response => { //Luego(.then) llama a esos datos response, y abre un procedimiento
      if (response.ok) {
        return response.json(); //si el atributo .ok es true le aplica el método transformativo .json()
      }else{
        throw Error(response.statusText); //sino genera un error a ser atrapado
      }
    })
    .then(function(response) { //Luego, llama a esos datos transformados de response, y abre un procedimiento
          result.status = 'ok'; //crea un atributo status con valor 'ok' para result
          result.data = response; //crea un atributo data con todo la info
          hideSpinner(); //esconde el spinner
          return result; //devuelve result lo cual no está almacenado fuera del procedimiento
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner(); //Esconde el spinner
        return result; //Devuelve el result
    });
}

let showUserButton = function() {
  document.getElementById("navbarNav").innerHTML += `
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">${localStorage.getItem("user")}</a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Mi carrito</a>
          <a class="dropdown-item" href="my-profile.html">Mi perfil</a>

          <a class="dropdown-item" href="#">Cerrar sesión</a>
        </div>
      </li>
      `;
}