$(document).ready(_ => {
    $(document).scroll(_ => {
        if ($(window).scrollTop() >= 1) {
            $('.navbar-perso').addClass('coloured');
        } else {
            $('.navbar-perso').removeClass('coloured');
        }
    })

    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 700);
        }
    });
})
