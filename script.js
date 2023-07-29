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

function PageColorChange() {

  var container = document.querySelectorAll(".image-card");
  var viewProduct = document.querySelectorAll('.view-product');


  // arrow and round text movement

  for (let i = 0; i < container.length; i++) {
      container[i].addEventListener("mousemove", function (e) {


          var bndrectvals = container[i].getBoundingClientRect()
          var xVal = Math.abs(e.clientX - bndrectvals.x);
          var yVal = Math.abs(e.clientY - bndrectvals.y);

        viewProduct[i].style.display='flex'
          viewProduct[i].style.left = xVal + "px";
          viewProduct[i].style.top = yVal + "px";

      })
    
      container[i].addEventListener("mouseleave", function (e) {



      viewProduct[i].style.display='none'

    })


  }

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
  
  
OpenCloseButton()
PageColorChange()
swiper()