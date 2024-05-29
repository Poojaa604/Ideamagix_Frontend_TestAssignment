//Javascript for loader
document.addEventListener("DOMContentLoaded", function() {

  setTimeout(function() {
      const loader = document.getElementById("loader");
      const content = document.getElementById("content");
      
      loader.style.opacity = 0;
      content.style.opacity = 1;
    
      setTimeout(function() {
          loader.style.display = "none";
      }, 1000); 
  }, 2000); 
});




//Slider Javascript
function goToSlide(index) {
    var slider = document.getElementById('slider');
    var slideWidth = document.querySelector('.slide').offsetWidth;
    slider.style.transform = 'translateX(-' + (index * slideWidth) + 'px)';

    
    var names = document.querySelectorAll('.name');
    names.forEach(function(name) {
        name.classList.remove('underlined');
    });

    
    names[index].classList.add('underlined');
}


$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      items: 3,  
      loop: true,  
      margin: 10,  
      nav: false,  
      dots: true , 
      dotseach:true
    });
  });
  