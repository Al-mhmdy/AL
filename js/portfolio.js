let nav = document.querySelector("nav");
window.onscroll = function () {
  if (this.scrollY >= 15) {
    nav.classList.remove("black");
    nav.classList.add("backdrop-filter");
  } else {
    nav.classList.add("black");
  }
};
