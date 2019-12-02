$(function () {

    "use strict";

    // scroll it
    $.scrollIt({
        upKey: 38,             // key code to navigate to the next section
        downKey: 40,           // key code to navigate to the previous section
        easing: 'linear',      // the easing function for animation
        scrollTime: 600,       // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null,    // function(pageIndex) that is called when page is changed
        topOffset: -150           // offste (in px) for fixed top navigation
      });


    //===== Jquery inisialization
    //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".header-area").removeClass("sticky");
        } else {
            $(".header-area").addClass("sticky");
        }
    });

    //===== Mobile Menu 

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });


    //Service-Read More Buttons
    $('.read_more_btn_2 button').on('click', function () {
        $('.list_2').toggleClass('active');
        $('.list_1').toggleClass('active');

    });

    // popup form js
    // for popup 
    $('.order_now').on('click', function () {
        $('.order_popup').css('display', 'flex');
        $('body').css('overflow', 'hidden');
    });
    // for popup close
    $('.popup_close').on('click', function () {
        $('.order_popup').css('display', 'none');
        $('body').css('overflow-y', 'scroll');
    });




    //Service-Read More Buttons
    $('.read_more_btn button').on('click', function () {
        $('.list_text_2').toggleClass('active');
        $('.list_text_1').toggleClass('active');

        $('.service_item_last').toggleClass('pb-112');

    });

    //=====  VenoBox Js
    $('.venobox').venobox({
        border: '3px',
        numeratio: true,
        infinigall: true
    });
    // niceSelect activation
    $('.input_select').niceSelect();

    //==== Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(300)
        } else {
            $('.back-to-top').fadeOut(300)
        }
    });


    //==== Animate the scroll to top
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1000);
    });



});