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
