//edited form Ryan Morr
var carousel,container,prevBtn,nextBtn,pagination;
var bullets,totalItems,percent,currentIndex;

function next() {
    slideTo(currentIndex + 1);
}

function prev() {
    slideTo(currentIndex - 1);
}

function slideTo(index) {
    index = index < 0 ? totalItems - 1 : index >= totalItems ? 0 : index;
    container.style.WebkitTransform = container.style.transform = 'translate(-' + (index * 100) + '%, 0)';
    bullets[currentIndex].classList.remove('active-bullet');
    bullets[index].classList.add('active-bullet');
    currentIndex = index;
}

window.onload = function(){
  carousel = document.querySelector('.carousel');
  container = carousel.querySelector('.carousel-container');
  prevBtn = carousel.querySelector('.carousel-prev');
  nextBtn = carousel.querySelector('.carousel-next');
  pagination = carousel.querySelector('.carousel-pagination');  
  totalItems = container.querySelectorAll('.carousel-item').length;
  currentIndex = 0;
  
  for(var i=0; i<totalItems;  i++)
  {
     var li = document.createElement("li");
     li.classList.add("carousel-bullet");
     pagination.appendChild(li);
  }
  
  bullets = [].slice.call(carousel.querySelectorAll('.carousel-bullet'));
  bullets[currentIndex].classList.add('active-bullet');
  prevBtn.addEventListener('click', prev, false);
  nextBtn.addEventListener('click', next, false);
  
  pagination.addEventListener('click', function(e) {
    var index = bullets.indexOf(e.target);
    if (index !== -1 && index !== currentIndex) {
      slideTo(index);
    }
  }, false);
  
  setInterval(next,4000);
}


// Esperar a que el DOM se cargue completamente antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function() {
  // Seleccionar el checkbox del menú hamburguesa y el contenedor del menú
  var menuToggle = document.getElementById('menu__toggle');
  var menuContainer = document.querySelector('.menu');

  // Agregar un evento listener para cambios en el estado del checkbox
  menuToggle.addEventListener('change', function() {
      // Si el checkbox está marcado, mostrar el menú, de lo contrario, ocultarlo
      if(menuToggle.checked) {
          menuContainer.style.display = 'flex';
      } else {
          menuContainer.style.display = 'none';
          if(window.innerWidth <= 768) {
            location.reload();
        }
      }
  });
});
