



// 🍀js10. navbar2 for the other pages
let nav2Elem = document.querySelector('.nav2');

nav2Elem.innerHTML = `
  <div class="title">
  <img src="../img/LOGO2.png" alt="Logo">
  </div>

  <div class="navbar">
  <ul>
      <a href="../index.html">Home</a>
      <a href="./introduce.html">About Us</a>
      <a href="./team.html">Team</a>
      <a href="./service.html">Service</a>
      <a href="./contact.html">contact Us</a>
      <a href="./faq.html">FAQ</a>                 
  </ul>
  <ul class="phone-container">
      <li class="phone">jc@hvco.kr</li>
      <li class="phone">+82 10 8079 2550</li>
  </ul>
  </div>                      
 `;


/* 
        <div class="title">
            <img src="../img/LOGO2.png" alt="Logo">
        </div>

        <div class="navbar">
            <ul>
                <a href="../index.html">메인</a>
                <a href="./introduce.html">소개</a>
                <a href="./team.html">팀원소개</a>
                <a href="./service.html">서비스</a>
                <a href="./contact.html">문의</a>
                <a href="./faq.html">FAQ</a>                 
            </ul>
            <ul class="phone-container">
                <li class="phone">jc@hvco.kr</li>
                <li class="phone">+82 10 8079 2550</li>
            </ul>
        </div>


*/


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


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


// 🍀js30. slide-show - auto playing
