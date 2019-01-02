;(function($){
// "use strict";
$(function(){
    $('.ba-salon__img').slick({
        slide: "img",
        infinity: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        dots: false,
        prevArrow: ".ba-slider__prev",
        nextArrow: ".ba-slider__next",
        // variableWidth: true,
        // centerMode: true,
        adaptiveHeight: true,
             responsive: [
            {
                breakpoint: 660,
                settings: {
                    
                    arrows: false,
                }
              },
        ],
        
        
    });
    // $('.ba-img__block').slick({
    //     slidesPerRow: 4,
    //     slide: (".ba-img-slid"),
    //     infinity: false,
    //     // slidesToScroll: 4,
    //     slidesToShow: 8,
    //     //variableWidth: true,
    //     // adaptiveHeight:true,
    //     vertical: true,
    //     // verticalSwiping: true,
    //     rows: 2,
    //     dots: false,
    //     prevArrow: ".ba-prev-hair",
    //     nextArrow: ".ba-next-hair",
   
    //     // responsive: [
    //     //     {
    //     //         breakpoint: 768,
    //     //         settings: {
    //     //             slidesToShow: 1,
                
    //     //         }
    //     //       },
    //     // ]
        
    // })
});
    $(document).ready(function(){
        let map;
        var mapContainer = $('#map')[0];
        var mapCenter = {lat: 49.5855864, lng: 34.549397};

            map = new google.maps.Map(mapContainer, {
                center: mapCenter,
                zoom: 17,
                
            });
           
        var marker = new google.maps.Marker({
            position: mapCenter,
            map: map,
            icon: 'img/icon_address.png',
           
        })    
    });
    const menuTogle = $('.menu-toggle, .ba-menu-resp');
    const mobNav = $('.ba-menu-adaptive');
    const burg = $('.menu-toggle');
    menuTogle.on('click', () => mobNav.toggleClass('ba-open'));
    menuTogle.on('click', () => burg .toggleClass('ba-click'));
   

})(jQuery);


 $(document).ready(function(){
    $('.ba-img__block').slick({
       
        // slidesPerRow: 2,
        slide: (".ba-img-vert"),
        // infinity: false,
        slidesToScroll: 1,
        slidesToShow: 2,
        // rows: 2,
        // variableWidth: true,
        // adaptiveHeight:true,
        vertical: true,
        verticalSwiping: true,
        dots: false,
        prevArrow: ".ba-prev-hair",
        nextArrow: ".ba-next-hair",
   
        responsive: [
            {
                breakpoint: 660,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                
                }
              },   
        ]
        
        
    })
    });