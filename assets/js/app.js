//Para la galería del HOME
var fotos = 0;
function slideHome(){
    var slides = document.getElementsByClassName("galeria-slide");
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";}
    fotos++;
    if (fotos > slides.length){
      fotos = 1;}
    slides[fotos-1].style.display = "block";
    setTimeout(slideHome, 1000);
}

//Chinas Clásicas
var arrayCarta=[{name:"pollo en brochetas",id:"menu1", src: "assets/images/menu1.jpg",value:"8"},
{name: "hamburguesa clasica", id: "menu2", src: "assets/images/menu2.jpg",value:"10"},
{name: "salchipapa oriental", id: "menu3", src: "assets/images/menu3.jpg",value:"8"},
{name: "tallarin saltado", id: "menu4", src: "assets/images/menu4.jpg",value:"10"},
{name: "siu mai", id: "menu5", src: "assets/images/menu5.jpg",value:"6"},
{name: "bolitas de pollo", id: "menu6", src: "assets/images/menu6.jpg",value:"6"},
{name: "combo wrapper", id: "menu7", src: "assets/images/menu7.jpg",value:"16"},
{name: "gota de lluvia", id: "menu8", src: "assets/images/menu8.jpg",value:"6"}]

function Carta(){
  this.carta = arrayCarta;
  this.addCarta = function (name, id ,value) {
    this.carta.push({
      name : name,
      id : id,
      value : value,
      src : "assets/images/"+id+".jpg"
    });
  }
}

function platoCarta(obj){
  var div = document.createElement("div");
  div.setAttribute("class","div-plato");
  div.setAttribute("ondrop","drop(event)");
  div.setAttribute("ondragover","over(event)");
  var img = document.createElement("img");
  img.setAttribute("src",obj.src);
  img.setAttribute("id",obj.id);
  img.setAttribute("alt",obj.name);
  img.setAttribute("class","img-plato");
  img.setAttribute("draggable","true");
  img.setAttribute("ondragstart","drag(event)");
  img.setAttribute("value",obj.value);
  var span = document.createElement("span");
  span.innerText = obj.name
  span.setAttribute("class","span-plato");

  div.appendChild(img);
  div.appendChild(span);
  return div;
}

var crearCarta = new Carta();
var fragment = document.createDocumentFragment();
crearCarta.carta.forEach(function(e){
  fragment.appendChild(platoCarta(e));
})

//Para Home y Chinas Clasicas
window.addEventListener("load",function(){
  slideHome();
  document.getElementsByClassName("menu-platos")[0].appendChild(fragment);
});

//Arrastar las opciones del menú para armar tu combo
var sumaPrecio = 0;
var costo = document.getElementById("precio-combo")

function drag(ev){
  sumaPrecio += parseInt(ev.target.getAttribute("value"));
  ev.dataTransfer.setData("text", ev.target.id);
  ev.dataTransfer.dropEffect = "copyMove";
  if (sumaPrecio > 26) {
    costo.innerText = "S/. ";
    sumaPrecio = 0;
  }
  else {
    costo.innerText = "S/. " + sumaPrecio;
  }
}

function over(ev) {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "copyMove"
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

//Validacion de formulario de contacto
function tooltip() {
  var classTooltip = document.getElementsByClassName("tooltip");
  for(var i = 0; i < classTooltip.length;i++){
    var tooltip = document.createElement("span");
    tooltip.classList.add("msj-error");
    classTooltip[i].appendChild(tooltip);
  }
}

var msjError = document.getElementsByClassName("msj-error");
var buenas=0;
function validacion(input,indice,mensaje,validar) {
  if (input.value == "" || !validar.test(input.value)) {
    msjError[indice].style.display="block";
    msjError[indice].innerHTML = mensaje;
  }
  else{
    msjError[indice].style.display="none";
    buenas++;
  }
}
var input = document.getElementsByClassName("data-contacto");
tooltip();

input[0].addEventListener("blur",function () {
  validacion(input[0],0,"Ingrese un nombre válido",/([a-zñáéíóú]\D+)$/);
});
input[1].addEventListener("blur",function () {
  validacion(input[1],1,"Ingrese un apellido válido",/([a-zñáéíóú]\D+)$/);
});
input[2].addEventListener("blur",function () {
  validacion(input[2],2,"Ingrese un correo válido",/\S+@\S+\.\S+/);
});
input[3].addEventListener("blur",function () {
  validacion(input[3],3,"Ingrese un numero telefónico válido",/([0-9])\d+\S/);
});

document.getElementsByClassName("button-contact")[0].addEventListener("click",function (e) {
  e.preventDefault();
  alert(buenas);
  if(buenas >= 4){
    for(var i = 0; i < input.length; i++){
      input[i].value = "";
    }
  }
})

//Ocultar header con evento SCROLL
var endScroll = 0;
window.addEventListener("scroll", function () {
  var header = document.getElementById("header-menu");
  var menuLateral = document.getElementsByClassName("social-menu")[0];
  var footer = document.getElementById("footer");
  var scroll = window.pageYOffset || document.body.scrollTop;
  if (scroll > endScroll) {
    header.classList.remove("header-color");
    header.style.opacity = 0;
    menuLateral.style.opacity=1;
  }
  else{
    header.classList.add("header-color");
    header.style.opacity = 1;
    menuLateral.style.opacity = 0;
    footer.style.opacity=0;
  }
  if ( scroll > 50) {
    menuLateral.style.opacity=1;
  }
  endScroll = scroll;
  if ((window.innerHeight + window.pageYOffset ) >= document.body.offsetHeight) {
      footer.style.opacity=1;
    }
}
,false);
