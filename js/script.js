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