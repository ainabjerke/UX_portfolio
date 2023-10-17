// Get the modal
var modalD1 = document.getElementById("modalD1");

// Get the button that opens the modal button modal empathise 1
var btnD1 = document.getElementById("btnModalD1");

// Get the <span> element that closes the modal
var spanD1 = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btnD1.onclick = function () {
  modalD1.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
spanD1.onclick = function () {
  modalD1.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalD1) {
    modalD1.style.display = "none";
  }
};
