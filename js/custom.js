$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    function scrollToSection(handler, scrollTo) {
        $(handler).click(function () {
            $("html, body").animate({
                scrollTop: $(scrollTo).offset().top
            }, 600);
            return false;
        });
    }

    scrollToSection('#js-scroll-home', "#page-header");
    scrollToSection('#js-scroll-services', "#services");
    scrollToSection('#js-scroll-portfolio', "#portfolio");
    scrollToSection('#js-scroll-contact', "#contact");

});