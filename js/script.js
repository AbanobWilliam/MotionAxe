(function () {
        document.addEventListener('DOMContentLoaded', function () {
            var $abaSlider = document.querySelector('.process-slider');
            var $abaSlides = Array.from($abaSlider.querySelectorAll('.process-item'));
            var $abaSlidesWrapper = document.querySelector('.process-slides-wrapper');
            var $up = document.querySelector('.process-controller-up')
            var $down = document.querySelector('.process-controller-down')


            // the logic
            var ACTIVE_CLASS_NAME = 'ACTIVE_SLIDE';
            var ACTIVE_INITIAL_SLIDE = 0;
            var state = {
                focusIndex: ACTIVE_INITIAL_SLIDE
            }
            var setAcitveSlide = function (index, slides) {
                index = index || 0;
                if (index >= 3) {
                    $abaSlidesWrapper.scrollTop = 700
                } else {
                    $abaSlidesWrapper.scrollTop = 0

                }

                slides.forEach(($slide, i) => {

                    if (i === index) {
                        console.log('focus on', i);
                        return $slide.classList.add(ACTIVE_CLASS_NAME);
                    }

                    if (i !== index) {
                        return $slide.classList.remove(ACTIVE_CLASS_NAME);
                    }
                })
            }
            // set active element
            setAcitveSlide(state.focusIndex, $abaSlides)
            $up.addEventListener('click', function () {
                if (state.focusIndex === 0) {
                    state.focusIndex = 5;
                } else {
                    state.focusIndex = state.focusIndex - 1;
                }

                setAcitveSlide(state.focusIndex, $abaSlides)

            })

            $down.addEventListener('click', function () {
                if (state.focusIndex === 5) {
                    state.focusIndex = 0;
                } else {
                    state.focusIndex = state.focusIndex + 1;
                }
                setAcitveSlide(state.focusIndex, $abaSlides)

            })
        }
    )

})()
$('.reviews-carousel').owlCarousel({
    loop:true,
    margin:30,
    responsiveClass:true,
    dots: false,
    autoplay: true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        768:{
            items:2,
            nav:true
        },
        1000:{
            items:3,
            nav:true
        }
    }
});
$(document).ready(function(){
    $('.mobile-button').click(function(e){
        e.preventDefault();
        $(this).toggleClass('opened');
        $('.desktop').slideToggle();
    });
    $('.go-to-top').click(function (e){
        e.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll < 700) {
            $(".go-to-top").fadeOut(100);
        }else if (scroll > 700) {
            $(".go-to-top").fadeIn(100);
        }
    });
    $("div.w-controlls ul li a").click(function(e){ 
        e.preventDefault();       
        var href = $(this).attr('href');
        console.log(href);
        $('.w-content > div').removeClass('active');
        $('.w-content > div'+href).addClass('active');
        $("div.w-controlls ul li").removeClass('active');
        $(this).parent('li').addClass('active');
    });
    $('a.theme').click(function(e){
        e.preventDefault();
        if($(this).hasClass('dark')){
            $('link[href="css/light.css"]').attr("href","css/dark.css");
            $(this).removeClass('dark').addClass('light');
        }else{
            $('link[href="css/dark.css"]').attr("href","css/light.css");
            $(this).removeClass('light').addClass('dark');
        }
    });
});


