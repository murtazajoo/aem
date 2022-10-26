let myNav = document.getElementById("nav_bar");
window.onscroll = function () {
  if (window.pageYOffset || document.body.scrollTop >= 200) {
    myNav.style.backgroundColor = "var(--nav_bg)";
  } else {
    myNav.style.backgroundColor = "transparent";
  }
};
