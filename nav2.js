

// 🍀js10. navbar2 for the other pages
let nav2Elem = document.querySelector('.nav2');

nav2Elem.innerHTML = `
  <div class="title">
    <img src="../img/logo-capture-horizontal.jpg" alt="Logo">
  </div>

  <div class="navbar">
  <ul>
      <a href="../index.html">Home</a>
      <a href="./introduce.html">About Us</a>
      <a href="./team.html">Team</a>
      <a href="./service.html">Service</a>
      <a href="./contact.html">contact Us</a>              
  </ul>
  <ul class="phone-container">
      <li class="phone">jc@hvco.kr</li>
      <li class="phone">+82 10 8079 2550</li>
  </ul>
  </div>                      
 `;

