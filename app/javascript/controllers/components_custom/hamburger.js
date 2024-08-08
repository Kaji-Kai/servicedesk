$(document).ready(function(){
    $('.navbar-toggler').click(function(){
        $(this).toggleClass('opened');
        if ($(this).hasClass('opened')) {
            $('.custom-opening-component').css('z-index', '1'); // Lower z-index when opened
        } else {
            $('.custom-opening-component').css('z-index', '99'); // Higher z-index when closed
        }
    });
});