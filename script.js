



// 🍀js22. slide-show
/* 
const slides = document.querySelectorAll('.slide-container');
let index = 0;

console.log(slides);
console.log(slides.length); //3

function next() {
    slides[index].classList.remove('active');
     //🍉js22-40
    index = (index+1) % slides.length; // 1 2 0 
    console.log(index)
    slides[index].classList.add('active');
}

function prev() {
    slides[index].classList.remove('active');
     //🍉js22-50
    index = (index -1 + slides.length) % slides.length; //2 1 0 
    console.log(index)
    slides[index].classList.add('active');    
}
 */


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  // let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1
  } 

  if (n < 1) {
    slideIndex = slides.length
  }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }


  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }

  slides[slideIndex-1].style.display = "block"; 


  // 🍀
  setInterval(() => {
    // slideIndex++;    
    // if (slideIndex >4) {
    //   slideIndex = 1;    
    // }  
    plusSlides(1);
  }, 2000);


  // dots[slideIndex-1].className += " active";
}

