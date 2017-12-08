$(document).ready(_ => {
    $(document).scroll(_ => {
        if($(window).scrollTop() >= 1) {
            $('.navbar-perso').addClass('coloured');
        } else {
            $('.navbar-perso').removeClass('coloured');
        }
    })
})