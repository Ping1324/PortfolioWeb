window.addEventListener("scroll", () => {
  const linea = document.getElementById("lineaAnimada");
  if (!linea) return;

  const lineaTop = linea.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (lineaTop < windowHeight - 100) {
    linea.classList.add("expandir");
  }else{
    linea.classList.remove("expandir");
  }
});
