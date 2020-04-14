window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("nav").style.display = "inline-flex";
  } else {
    document.getElementById("nav").style.display = "none";
  }
}
