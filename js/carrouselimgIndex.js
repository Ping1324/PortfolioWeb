//**script carrousel modelado-catedral

crearCarrusel(document.getElementById("carouselModeladoCatedral"), [
  "img/index/catedral-cover.png",
  "img/index/catedral-slide1.png",
  "img/index/catedral-slide2.png"
]);

crearCarrusel(document.getElementById("carouselMotorista"), [
  "img/index/motorista-cover.png",
  "img/index/motorista-slide2.png",
  "img/index/motorista-slide3.png"
]);

crearCarrusel(document.getElementById("carouselHana"), [
  "img/index/hana-cover.png",
  "img/index/hana-slide1.png",
  "img/index/hana-slide2.png"
]);

crearCarrusel(document.getElementById("carouselFilmoteca"), [
  "img/index/filmoteca-cover.png",
  "img/index/filmoteca-slide1.png",
  "img/index/filmoteca-slide2.png"
]);

crearCarrusel(document.getElementById("carouselGokoan"), ["img/index/gokoan-cover.png", "img/index/gokoan-slide1.png"]);
crearCarrusel(document.getElementById("carouselNeoBestiario"), [
  "img/index/neo-bestiario-cover.png",
  "img/index/neo-bestiario-slide1.png",
  "img/index/neo-bestiario-slide2.png",
  "img/index/neo-bestiario-slide3.png"
]);
crearCarrusel(document.getElementById("carouselNok"), [
  "img/index/nok-cover.png",
  "img/index/nok-slide1.png",
  "img/index/nok-slide2.png",
  "img/index/nok-slide3.png"
]);
crearCarrusel(document.getElementById("carouselRevista29"), [
  "img/index/revista29-cover.png",
  "img/index/revista29-slide1.png",
  "img/index/revista29-slide2.png",
  "img/index/revista29-slide3.png",
  "img/index/revista29-slide4.png",
  "img/index/revista29-slide5.png"
]);

function crearCarrusel(imagenElement, imagenes) {
  let index = 1;
  let interval = null;

  imagenElement.addEventListener("mouseenter", () => {
    interval = setInterval(() => {
      imagenElement.src = imagenes[index];
      index = (index + 1) % imagenes.length;
    }, 500);
  });

  imagenElement.addEventListener("mouseleave", () => {
    clearInterval(interval);
    imagenElement.src = imagenes[0];
    index = 1;
  });
}
