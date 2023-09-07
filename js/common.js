document.addEventListener('DOMContentLoaded', function () {
    // JAVASCRIPT //
    document.querySelectorAll('a[href="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
        });
    });

    window.addEventListener('scroll', function () {
        SCROLLNAV();
    });

    function SCROLLNAV() {
        if (window.pageYOffset >= 100) {
            document.querySelector('#new_hd').classList.add('active');
        } else {
            document.querySelector('#new_hd').classList.remove('active');
        }
    }
    SCROLLNAV();

    function MAINSLIDER() {
        $('.main_sliderbox').slick({
            infinite: true,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 4500,
            slidesToShow: 3,
            slidesToScroll: 1,
            pauseOnHover: false,
            arrows: false,
            dots: false,
            cssEase: 'linear',
            fade: false,
            draggable : false,
        });
    }
    MAINSLIDER();

    function BANNERSLIDER() {
        $('.banner_box').slick({
            infinite: true,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 2000,
            slidesToShow: 8,
            slidesToScroll: 1,
            pauseOnHover: false,
            arrows: false,
            dots: false,
            cssEase: 'linear',
            fade: false,
            draggable : false,
        });
    }
    BANNERSLIDER();

    function VIDEOSLIDER() {
        const arrowprev = $('.arrows_prev');
        const arrownext = $('.arrows_next');

        let VIDEOSLIDERBOX = $('.video_sliderbox').slick({
            centerMode: true,
            centerPadding: '19vw',
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: false,
            arrows: true,
            prevArrow: arrowprev,
            nextArrow: arrownext,
            dots: false,
            cssEase: 'linear',
            fade: false,
        });

        $('.arrows_prev').addClass("arrows_active");

        VIDEOSLIDERBOX.on('afterChange', function (event, slick, currentSlide) {
            console.log(currentSlide);
            if (currentSlide === 0) {
                $('.arrows_prev').addClass("arrows_active");
                $('.arrows_next').removeClass("arrows_active");
            } else {
                $('.arrows_prev').removeClass("arrows_active");
            }

            if (slick.slideCount === currentSlide + 1) {
                $('.arrows_next').addClass("arrows_active");
            } else {
                $('.arrows_next').removeClass("arrows_active");
            }
        });
    }
    VIDEOSLIDER();

    function MENUCLICK() {
        $(".menu_bar").click(function() {
            $(".sitemenu").addClass("active");
        });

        $(".menu_close").click(function() {
            $(".sitemenu").removeClass("active");
        });

        $('.nav_menu > a').click(function (event) {
            event.preventDefault();
            var targetOffset = $($(this).attr('href')).offset().top - 150;
            $('html, body').animate({ scrollTop: targetOffset }, 500);
            $(".sitemenu").removeClass("active");
        });
    }
    MENUCLICK();
});
