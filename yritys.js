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

let cart = document.getElementById("cart")
let cartimg = document.getElementById("cartimg")
let buttons = document.querySelectorAll(".atc").length;
let texsti = document.getElementById("teksti")
let content = document.getElementById("cartcontent")

/* Cartista array*/
cart= [];

/*cart numero päivitys*/

cartimg  = [];
  cartimg[0] = "img/Store/cart.png";
  cartimg[1] = "img/Store/cart1.png";
  cartimg[2] = "img/Store/cart2.png";
  cartimg[3] = "img/Store/cart3.png";
  cartimg[4] = "img/Store/cart4.png";
  cartimg[5] = "img/Store/cart5.png";
  cartimg[6] = "img/Store/cart6.png";
var numbah = 0;


/* Kaikki Buttonit Valintaan*/
for (var i = 0; i < buttons ; i++) {
    document.querySelectorAll(".atc")[i].addEventListener("click", function() {
        addtocart();
    });
}

//cartissa kuvan muutos, kun tuotetta painetaan //
function changepic()
   {

      if (numbah>=cartimg.length-1){
         numbah=0;
      }
      numbah=numbah+1;
      document.cartkuva.src=cartimg[numbah];
   }


/* Tuotetta painettu*/
 function addtocart(){
  changepic();
  texsti.innerHTML = "Product has been added to cart";
  console.log('Added Product')
}


/* Carttia Painettu*/
function displaycontent()
{
  if(content.style.display == 'none')
  {
     content.style.display='block';
  }
  else
  {
      content.style.display = 'none';
  }
}
