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

// burbuja para bajar y subir
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



