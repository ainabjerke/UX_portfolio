function btnReadMoreModalI1() {
  var dots = document.getElementById("dotsModalI1");
  var moreText = document.getElementById("moreModalI1");
  var btnText = document.getElementById("btnMoreModalI1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
