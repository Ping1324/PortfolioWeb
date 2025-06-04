document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", () => {
    const header2 = document.querySelector(".header2");

    if (window.scrollY > 200) {
      header2.classList.add("headerScrolled2");
    } else {
      header2.classList.remove("headerScrolled2");
    }
  });
});
