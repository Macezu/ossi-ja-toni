/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function kannykkanavi() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
} 

/* Storen Slideshow*/
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}




/* Storen Cart muuttujat*/

let cartimg = document.getElementById("cartimg")
let cartbtn = document.getElementById("cart")
let tuote1 = document.getElementById("atc 1")
let tuote2 = document.getElementById("atc 2")
let tuote3 = document.getElementById("atc 3")
let tuote4 = document.getElementById("atc 4")
let tuote5 = document.getElementById("atc 5")
let tuote6 = document.getElementById("atc 6")

/* Cartista Array*/
cartimg = []

