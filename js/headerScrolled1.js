document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", () => {
    const header1 = document.querySelector(".header1");

    if (window.scrollY > 200) {
      header1.classList.add("headerScrolled1");
    } else {
      header1.classList.remove("headerScrolled1");
    }
  });
});
