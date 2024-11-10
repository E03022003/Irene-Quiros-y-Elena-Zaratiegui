// NAVBAR
/* $(document).ready(function () {
    // Al hacer clic en el icono de búsqueda
    $('#search-icon').on('click', function (event) {
        event.stopPropagation();
        const searchInput = $('#search-input');

        // Alterna la visibilidad del input
        searchInput.toggleClass('active');
        if (searchInput.hasClass('active')) {
            searchInput.focus();
        }
    });

    // Cierra el campo de búsqueda al hacer clic fuera de él
    $(document).on('click', function (event) {
        if (!$(event.target).closest('#search-form').length) {
            $('#search-input').removeClass('active');
        }
    });
}); */

$(document).ready(function() {
    // Mostrar/ocultar barra de búsqueda al hacer clic en el icono de lupa
    $('#search-icon').on('click', function() {
        $('.search-bar').toggleClass('active');
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


