const overlay = document.getElementById("overlay");
const title = document.getElementById("titleWork");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    overlay.classList.add("expandido");
    title.classList.add("grande");
  } else {
    overlay.classList.remove("expandido");
    title.classList.remove("grande");
  }
});

document.getElementById("scrollToTop2").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
