const navbar = document.getElementById("header");

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.classList.add("top");
  } else {
    navbar.classList.remove("top");
  }
};
