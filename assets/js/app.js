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

window.addEventListener("load",function(){
 slideHome();
});

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
  }
  if ( scroll > 50) {
    menuLateral.style.opacity=1;
  }
  endScroll = scroll;
}
,false);

//En modo de prueb NO BORRAR
// if (document.body.scrollIntoView(false)) {
//   footer.style.opacity=1;
// }

//Arrastar las opciones del menú para armar tu combo

function sueltaMenu(elem) {
    elem.preventDefault();
}

function drag(elem) {
    elem.dataTransfer.setData("text", elem.target.id);
}

function drop(param) {
    param.preventDefault();
    var data = param.dataTransfer.getData("text");
  param.target.appendChild(document.getElementById(data));
}

// document.getElementById("menu1").addEventListener("dragstart")
