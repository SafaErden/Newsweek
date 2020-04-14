window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("nav").style.display = "inline-flex";
  } else {
    document.getElementById("nav").style.display = "none";
  }
}
