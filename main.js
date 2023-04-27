window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

var d = document.getElementById("text-input");
var wipe = document.getElementById("cls");
wipe.addEventListener("click", () => {
    alert("Text: " + d.value + " did not found!")
    d.value = ' ';
    d.innerHTML.placeholder = 'Search';
})
