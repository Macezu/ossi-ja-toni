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
let content = document.getElementById("cartcontent")
let cartitems = document.getElementById("tuotteetkartis")

/* Cartista array*/
cart= [];

/*cart numeron päivitys*/
ucartimg  = [];
  ucartimg[0] = "img/Store/cart.png";
  ucartimg[1] = "img/Store/cart1.png";
  ucartimg[2] = "img/Store/cart2.png";
  ucartimg[3] = "img/Store/cart3.png";
  ucartimg[4] = "img/Store/cart4.png";
  ucartimg[5] = "img/Store/cart5.png";
  ucartimg[6] = "img/Store/cart6.png";
var currentpic = 0;
var lastpic = ucartimg.length-1;

/* Kaikki Buttonit Valintaan*/
for (var i = 0; i < buttons ; i++) {
    document.querySelectorAll(".atc")[i].addEventListener("click", function() {
        addtocart();
    });
}



//cartissa kuvan muutos, kun tuotetta painetaan //

function changepic(){
    if (currentpic == lastpic)
    {
        currentpic = 0;
        cartimg.src = ucartimg[currentpic];
    }
    else
    {
        currentpic++;
        cartimg.src = ucartimg[currentpic];
    }
  }


/* Tuotetta painettu*/
 function addtocart(){
  changepic();
  cart.push("Elämäsi kuohut")
  alert("Product has been added to cart");
  /* Alempi näyttää Arrayn sisällön cartissa*/
  for (i = 0; i < cart.length; i++)
  cartitems.innerHTML =((i+1)+" kpl" + ": " + cart[i]);

  console.log('Added Product')
}


/* Carttia Painettu*/
function displaycontent()
{
  if(content.style.display == 'none')
  {
     content.style.display='flex';
  }
  else
  {
      content.style.display = 'none';
  }
}


