document.addEventListener('DOMContentLoaded', function () {
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
            draggable: false,
            responsive: [
                {
                    breakpoint: 1026,
                    settings: {
                        slidesToShow: 2,
                    },
                },{
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1,
                    },
                }
            ],
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
            draggable: false,
            responsive: [
                {
                    breakpoint: 886,
                    settings: {
                        slidesToShow: 4,
                    },
                },{
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 3,
                    },
                },{
                    breakpoint: 377,
                    settings: {
                        slidesToShow: 2,
                    },
                }
                
            ],
        });
    }
    BANNERSLIDER();

    function VIDEOSLIDER() {
        const videoprev = $('.arrows_prev');
        const videonext = $('.arrows_next');

        $('.video_sliderbox').slick({
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
            prevArrow: videoprev,
            nextArrow: videonext,
            dots: false,
            cssEase: 'linear',
            fade: false,
            responsive: [
                {
                    breakpoint: 886,
                    settings: {
                        centerPadding: '10vw',
                    },
                },
            ],
        });
    }
    VIDEOSLIDER();

    function HISSLIDER() {
        const hisprev = $('.history_prev');
        const hisnext = $('.history_next');

        let HISSLIDERBOX = $('.history_slider').slick({
            infinite: false,
            speed: 700,
            slidesToShow: 3,
            slidesToScroll: 1,
            pauseOnHover: false,
            arrows: true,
            prevArrow: hisprev,
            nextArrow: hisnext,
            dots: false,
            cssEase: 'linear',
            fade: false,
            responsive: [
                {
                    breakpoint: 1026,
                    settings: {
                        slidesToShow: 2,
                    },
                },{
                    breakpoint: 886,
                    settings: {
                        slidesToShow: 3,
                    }
                }
            ],
        });

        hisprev.addClass('arrows_active');

        HISSLIDERBOX.on('afterChange', function (event, slick, currentSlide) {
            const winWidth = window.innerWidth;
            const hisPrev = document.querySelector('.history_prev');
            const hisNext = document.querySelector('.history_next');
            //console.log(currentSlide);
            function HISRESIZE() {
                if (winWidth <= 1025) {
                    if (currentSlide === 0) {
                        hisPrev.classList.add('arrows_active');
                        hisNext.classList.remove('arrows_active');
                    } else if (currentSlide === slick.slideCount - 2) {
                        hisPrev.classList.remove('arrows_active');
                        hisNext.classList.add('arrows_active');
                    } else {
                        hisPrev.classList.remove('arrows_active');
                        hisNext.classList.remove('arrows_active');
                    }
                } else {
                    if (currentSlide === 0) {
                        hisPrev.classList.add('arrows_active');
                        hisNext.classList.remove('arrows_active');
                    } else if (currentSlide === slick.slideCount - 3) {
                        hisPrev.classList.remove('arrows_active');
                        hisNext.classList.add('arrows_active');
                    } else {
                        hisPrev.classList.remove('arrows_active');
                        hisNext.classList.remove('arrows_active');
                    }
                }
            }
            HISRESIZE();
            
            window.addEventListener('resize', function() {
                HISRESIZE();
            });
        });
    }
    HISSLIDER();

    function MENUCLICK() {
        let menuBar = document.querySelector('.menu_bar');
        let menuClose = document.querySelector('.menu_close');
        let siteMenu = document.querySelector('.sitemenu');
        let navLinks = document.querySelectorAll('.nav_menu > a');

        menuBar.addEventListener('click', function () {
            siteMenu.classList.add('active');
        });

        menuClose.addEventListener('click', function () {
            siteMenu.classList.remove('active');
        });

        navLinks.forEach(function (link) {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                let targetOffset = $($(this).attr('href')).offset().top - 150;
                $('html, body').animate({ scrollTop: targetOffset }, 500);
                siteMenu.classList.remove('active');
            });
        });
    }
    MENUCLICK();

    function HONORCLICK() {
        const honor_member = document.querySelectorAll('.honor_item > a');
        const modal_close = document.querySelector('.modal_close > button');
        const honor_modal = $('.honor_modal');

        honor_member.forEach(function (link) {
            link.addEventListener('click', function () {
                honor_modal.show();
            });
        });

        modal_close.addEventListener('click', function () {
            honor_modal.hide();
        });
    }
    HONORCLICK();

    function SPONSORCLICK() {
        const spon_box = $('.sponsor_thumb > a');
        const spon_modal = $('.sponsor_modal');
        const spon_close = $('.sponsor_close > button');

        spon_box.click(function () {
            spon_modal.show();
        });

        spon_close.click(function () {
            spon_modal.hide();
        });
    }
    SPONSORCLICK();
});
