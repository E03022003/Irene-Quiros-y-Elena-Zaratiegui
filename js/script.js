// NAVBAR
$(document).ready(function() {
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


