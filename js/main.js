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
    

    //*=======POPUP TOP COUNTDOWN====== 
    var d = new Date(),
        countUpDate = new Date();
    d.setDate(d.getDate() + 365);

    // default example
    simplyCountdown('.simply-countdown-one', {
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: d.getDate(),
        enableUtc: true
    });


    //*==========POPUP TOP CLOSE==========  
    $('.delete').on('click', function(){
        $('.wsus__popup_top').addClass('.hide_popup');
    });
    

    //===========POPUP SUBSCRIBE===========    
    $(".subscribe_close").on("click", function(){
        $(".wsus__popup_subscribe").fadeOut();
    });
    

    //*=======BANNER SLIDER====== 
    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
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
        autoplay: false,
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


    //*==========STICKY SIDEBAR========= 
    $("#sticky_sidebar").stickit({
        top:85,
    })
            

    //*==========SCROLL BUTTON==========  
    $('.wsus__scroll_btn').on('click', function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 500);
    });

    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 300) {
            $('.wsus__scroll_btn').fadeIn();
        } else {
            $('.wsus__scroll_btn').fadeOut();
        }
    });



    // =========venobox.js===========
    $('.venobox').venobox(); 
    

    //=======SELECT2====== 
    $(document).ready(function() {
        $('.select_2').select2();
    });














});
