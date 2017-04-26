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
function Carta(name,id,value){
  this.name = name;
  this.id = id;
  this.number = value;
  this.src = "assets/images/"+id+".jpg";
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
  img.setAttribute("value",obj.number);
  var span = document.createElement("span");
  span.innerText = obj.name
  span.setAttribute("class","span-plato");

  div.appendChild(img);
  div.appendChild(span);
  return div;
}

var creaCarta = [];
var carta1 = new Carta("pollo en brochetas","menu1","8");
creaCarta.push(carta1);
var carta2 = new Carta("hamburguesa clasica","menu2","10");
creaCarta.push(carta2);
var carta3 = new Carta("salchipapa oriental","menu3","8");
creaCarta.push(carta3);
var carta4 = new Carta("tallarin saltado","menu4","10");
creaCarta.push(carta4);
var carta5 = new Carta("siu mai","menu5","6");
creaCarta.push(carta5);
var carta6 = new Carta("bolitas de pollo","menu6","6");
creaCarta.push(carta6);
var carta7 = new Carta("combo wrapper","menu7","16");
creaCarta.push(carta7);
var carta8 = new Carta("gota de lluvia","menu8","6");
creaCarta.push(carta8);

var fragment = document.createDocumentFragment();
creaCarta.forEach(function(e){
  fragment.appendChild(platoCarta(e));
})

//Para Home y Chinas Clasicas
window.addEventListener("load",function(){
  slideHome();
  document.getElementsByClassName("menu-platos")[0].appendChild(fragment);
});

//////////////////////////////////////////////////////////
//Arrastar las opciones del menú para armar tu combo
function drag(ev) {
  // console.log("hola");
  ev.dataTransfer.setData("text/plain", ev.target.id);
  ev.dataTransfer.dropEffect = "copyMove";
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

//Precio del combo
var costo = document.getElementById("precio-combo")
costo.value = 0;

var suman = document.getElementsByClassName("arma-elegidos");
function precio(suman){
  if(suman.lenght = 0){
    costo.value = 0;
    costo.innerHTML = "S/ "+costo.value
  }
  if(suman.lenght != 0){
    suman[0].value
  }
}

//////////////////////////////////////////////////////////////
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
function validacion(input,indice,mensaje,validar) {
  if (input.value == "") {
    msjError[indice].style.display="block";
    msjError[indice].innerHTML = mensaje;
  }
  else{
    msjError[indice].style.display="none";
  }
}
var input = document.getElementsByClassName("data-contacto");
tooltip();

input[0].addEventListener("blur",function () {
  validacion(input[0],0,"Ingrese un nombre válido");
});
input[1].addEventListener("blur",function () {
  validacion(input[1],1,"Ingrese una apellido válido");
});
input[2].addEventListener("blur",function () {
  validacion(input[2],2,"Ingrese una dirección de email válida");
});
input[3].addEventListener("blur",function () {
  validacion(input[3],3,"Ingrese un numero telefónico válido");
});

//Ocultar header con evento SCROLL
var endScroll = 0;
window.addEventListener("scroll", function () {
  var header = document.getElementById("header-menu");
  var scroll = window.pageYOffset || document.body.scrollTop;
  if (scroll > endScroll) {
    header.classList.remove("header-color");
    header.style.opacity = 0;
  } else{
    header.classList.add("header-color");
    header.style.opacity = 1;
  }
  endScroll = scroll;
}
,false);
