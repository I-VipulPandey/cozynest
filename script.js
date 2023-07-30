function OpenCloseButton() {

    var menu = document.querySelector("#menu");
    var full = document.querySelector("#fullscreen-nav");
    var line1 = document.querySelector("#line1");
    var line2 = document.querySelector("#line2"); 
  
    var clickCounter = 1;
  
    menu.addEventListener("click", function () {
      if (clickCounter === 1) {
  
        full.style.transform = `translateX(0%)`;

  
        line1.style.transform = `rotate(45deg) translate(-7px, 5px)`;
        line2.style.transform = `rotate(-45deg) translate(-1px, -13px)`;
         
  
        clickCounter = 0;
      } else {
        full.style.transform = `translateX(-100%)`;
        line1.style.transform = `initial`;
        line2.style.transform = `initial`;
  
        clickCounter = 1;
      }
  
    })
  
}


function swiper() {
  
 var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
    });
}
  
function linkNavigator() {

  document.querySelectorAll('.shop').forEach(function (elem) {
    elem.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('#page3').scrollIntoView({
        behavior:"smooth"
      })
    })
  })

  document.querySelector('.story').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#page5').scrollIntoView({
      behavior:"smooth"
    })
  })

  document.querySelector('.journal').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#page4').scrollIntoView({
      behavior:"smooth"
    })
  })
  document.querySelector('.contact').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('footer').scrollIntoView({
      behavior:"smooth"
    })
  })

  

}
  
OpenCloseButton()
swiper()
linkNavigator()