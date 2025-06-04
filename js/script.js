document.addEventListener("DOMContentLoaded", () => {
  const titleWork = document.getElementById("titleWork");
  const titleOtrosProyectos = document.getElementById("titleOtrosProyectos");

  //console.log(apartado2.offsetTop);

  if (titleWork) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        titleWork.classList.add("letraGrande");
      } else {
        titleWork.classList.remove("letraGrande");
      }
    });
  }

  if (titleOtrosProyectos) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1420) {
        titleOtrosProyectos.classList.add("letraGrande");
      } else {
        titleOtrosProyectos.classList.remove("letraGrande");
      }
    });
  }

  //**header.html , los titulos del index apartado1, apartado2... se hacen +grandes al bajar */
  const LetraApartado1 = document.getElementById("apartado1");
  const LetraApartado2 = document.getElementById("apartado2");
  const LetraApartado3 = document.getElementById("apartado3");

  if (LetraApartado1) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        LetraApartado1.classList.add("letraGrande");
      } else {
        LetraApartado1.classList.remove("letraGrande");
      }
    });
  }

  if (LetraApartado2) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1400) {
        LetraApartado2.classList.add("letraGrande");
      } else {
        LetraApartado2.classList.remove("letraGrande");
      }
    });
  }

  if (LetraApartado3) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1400) {
        LetraApartado3.classList.add("letraGrande");
      } else {
        LetraApartado3.classList.remove("letraGrande");
      }
    });
  }

  //**script nav

  let btnApartado0 = document.querySelector(".logo a");
  let btnApartado1 = document.getElementById("btn1"); //trabajos
  let btnApartado2 = document.getElementById("btn2"); //sobre mi
  let btnApartado3 = document.getElementById("btn3"); //contacto

  let apartado0 = document.getElementById("apartado0"); //welcome to...
  let apartado1 = document.getElementById("apartado1");
  let apartado2 = document.getElementById("apartado2");
  let apartado3 = document.getElementById("apartado3");

  let btnSubir = document.getElementById("scrollToTop1");
  let margenTop = document.getElementById("home");

  function escrolear(e) {
    const headerOffset = 70; //altura del header
    const elementPosition = e.offsetTop;
    const offsetPosition = elementPosition - headerOffset;

    window.scroll({
      top: offsetPosition,
      behavior: "smooth"
    });
  }

  if (btnApartado0) {
    btnApartado0.addEventListener("click", function () {
      escrolear(margenTop);
    });
  }

  if (btnApartado1) {
    btnApartado1.addEventListener("click", function () {
      escrolear(apartado1);
    });
  }

  if (btnApartado2) {
    btnApartado2.addEventListener("click", function () {
      escrolear(apartado2);
    });
  }

  if (btnApartado3) {
    btnApartado3.addEventListener("click", function () {
      escrolear(apartado3);
    });
  }

  if (btnSubir) {
    window.addEventListener("scroll", aparecer);
    btnSubir.addEventListener("click", function () {
      escrolear(margenTop);
    });
  }

  window.addEventListener("scroll", aparecer);

  function aparecer() {
    if (!btnSubir) return;

    if (window.scrollY > 500) {
      btnSubir.style.display = "block";
    } else {
      btnSubir.style.display = "none";
    }
  }

  //**script galeria

  let img = document.getElementById("imagen");
  let miniatura = document.getElementsByClassName("miniatura");
  let anterior = document.getElementById("anterior");
  let siguiente = document.getElementById("siguiente");

  let i = 0;

  // Obtener los src de las miniaturas como array
  let imagenes = Array.from(miniatura).map((m) => m.src);

  anterior.addEventListener("click", prev);
  siguiente.addEventListener("click", next);

  function prev() {
    i--;
    if (i < 0) i = imagenes.length - 1;
    img.setAttribute("src", imagenes[i]);
  }

  function next() {
    i++;
    if (i >= imagenes.length) i = 0;
    img.setAttribute("src", imagenes[i]);
  }

  Array.from(miniatura).forEach((thumb, index) => {
    thumb.addEventListener("click", () => {
      img.style.opacity = 0;
      setTimeout(() => {
        img.src = imagenes[index];
        img.style.opacity = 1;
        i = index; // actualiza el índice actual
      }, 200); // duración de desvanecido
    });
  });

  //**guardar scroll antes de salir */
  window.addEventListener("beforeunload", () => {
    localStorage.setItem("scrollPosition", window.scrollY);
  });

  const scrollPos = localStorage.getItem("scrollPosition");
  if (scrollPos) {
    window.scrollTo(0, parseInt(scrollPos));
  }
});
