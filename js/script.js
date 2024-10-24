$(document).ready(function() {
    // Mostrar/ocultar el formulario de búsqueda al hacer clic en la lupa
    $('#search-btn').click(function(event) {
        event.stopPropagation(); // Evitar que el clic en el botón cierre inmediatamente el formulario
        $('#search-form').toggle(); // Alterna la visibilidad del formulario
    });

    // Ocultar el formulario de búsqueda al hacer clic en cualquier parte fuera de él
    $(document).click(function(event) {
        if (!$(event.target).closest('#search-form, #search-btn').length) {
            $('#search-form').hide(); // Si el clic es fuera del formulario o el botón, ocúltalo
        }
    });

    // Evitar que los clics dentro del formulario cierren el mismo
    $('#search-form').click(function(event) {
        event.stopPropagation();
    });
});
