;(function($){
"use strict";
$(function(){
    $('.ba-salon__img').slick({
        slide: "img",
        infinity: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        dots: false,
        prevArrow: ".ba-slider__prev",
        nextArrow: ".ba-slider__next",
        variableWidth: true,
        centerMode: true,
        adaptiveHeight: true,
        
    })
});
})(jQuery);

