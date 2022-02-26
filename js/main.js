$(function () {
    
    "use strict";
    
    
    //=========MENU FIX JS=========   
    if ($('.main_menu').offset() != undefined) {
        var navoff = $('.main_menu').offset().top;
        $(window).scroll(function () {
            var scrolling = $(this).scrollTop();

            if (scrolling > navoff) {
                $('.main_menu').addClass('menu_fix');
            } else {
                $('.main_menu').removeClass('menu_fix');
            }
        });
    }
    
    
    
    //*=======BANNER SLIDER====== 
    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: false,

    }); 
    
    
    //*==========SEARCH==========  
    $('.search').on('click', function(){
        $('.wsus__search_form').addClass('.show_search');
    });
        
    $('.close_search').on('click', function(){
        $('.wsus__search_form').removeClass('.show_search');
    });



    //*==========COUNTER==========  
    $('.counter').countUp();



    //*==========ISOTOPE============== 
    var $grid = $('.grid').isotope({});

    $('.wsus__portfolio_filter').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        });
    });

    //active class
    $('.wsus__portfolio_filter button').on("click", function (event) {

        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();

    });  
        
    
    //*=======BANNER SLIDER====== 
    $('.testi_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrows: false,


        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }   
        ]

    }); 

});
