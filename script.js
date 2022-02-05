



// 🍀js22. slide-show

/* onclick
  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a> 
*/

let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

showSlides(slideIndex);
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
       
  // dots[slideIndex-1].className += " active";
}

 // 🍉js22-10, slideshow, auto play

  let settt =  setInterval(() => { 
    plusSlides(1);
    console.log('settt');
  }, 3000);

