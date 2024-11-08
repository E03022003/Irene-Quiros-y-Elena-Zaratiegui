// NAVBAR
$(document).ready(function () {
    // Al hacer clic en el icono de búsqueda
    $('#search-icon').on('click', function (event) {
        event.stopPropagation();
        const searchInput = $('#search-input');

        if (searchInput.hasClass('active')) {
            searchInput.removeClass('active').css({ 'display': 'none', 'width': '0' });
        } else {
            searchInput.addClass('active').css({ 'display': 'block', 'width': '200px' });
            searchInput.focus(); 
        }
    });

    // Cierra el campo de búsqueda al hacer clic fuera de él
    $(document).on('click', function (event) {
        if (!$(event.target).closest('#search-form').length) {
            $('#search-input').removeClass('active').css({ 'display': 'none', 'width': '0' });
        }
    });
});

// BURBUJA PARA BAJAR Y SUBIR
$(document).ready(function() {
    const bubble = $('#scrollToTop');
    const bubbleIcon = $('#bubbleIcon');
    const threshold = 0; 

    $(window).scroll(function() {
        if ($(this).scrollTop() > threshold) {
            bubble.fadeIn();
        } else {
            bubble.fadeOut();
        }

        if ($(document).height() - $(window).height() - $(this).scrollTop() < 1) {
            bubbleIcon.html('<i class="bi bi-arrow-up-circle"></i>'); 
        } else {
            bubbleIcon.html('<i class="bi bi-arrow-down-circle"></i>'); 
        }
    });

    bubble.click(function() {
        $('html, body').animate({ scrollTop: 0 }, 0); 
    });
});

// POPOVER
$(document).ready(function () {
    $('[data-bs-toggle="popover"]').popover();
});

// deslizador palabras

function Marquee(selector, speed) {
    const parentSelector = document.querySelector(selector);
    const clone = parentSelector.innerHTML;
    const firstElement = parentSelector.children[0];
    let i = 0;
    console.log(firstElement);
    parentSelector.insertAdjacentHTML('beforeend', clone);
    parentSelector.insertAdjacentHTML('beforeend', clone);
  
    setInterval(function () {
      firstElement.style.marginLeft = `-${i}px`;
      if (i > firstElement.clientWidth) {
        i = 0;
      }
      i = i + speed;
    }, 0);
  }
  
  //after window is completed load
  //1 class selector for marquee
  //2 marquee speed 0.2
  window.addEventListener('load', function() {
    Marquee('.marquee', 0.5); // Primer marquee
    Marquee('.second-marquee', 0.5); // Segundo marquee, usando una clase diferente
});

// FILTRADO CATEGORIAS

$(document).ready(function() {
    // Inicializar Isotope
    var $grid = $('.row').isotope({
        itemSelector: '.col-lg-4',  // Selecciona las tarjetas
        layoutMode: 'fitRows'       // Organiza los elementos en filas
    });

    // Filtros
    $('.dropdown-item').on('click', function() {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue }); // Aplica el filtro
    });

    // Filtros por botones
    $('button[data-filter]').on('click', function() {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue }); // Aplica el filtro
    });
});