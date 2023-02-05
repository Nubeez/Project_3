// section 이미지 전환
$(function () {
    function prev() {

        $('#slidewrap .slide li:last').prependTo('#slidewrap .slide');

        $('#slidewrap .slide').css('margin-left', 1100);

        $('#slidewrap .slide').stop().animate({ marginLeft: 0 }, 800);

    }

    function next() {

        $('#slidewrap .slide').stop().animate({ marginLeft: -1100 }, 800, function () {

            $('#slidewrap .slide li:first').appendTo('#slidewrap .slide');

            $('#slidewrap .slide').css({ marginLeft: 0 });

        });

    }

    // setInterval(next, 3000);


    //버튼 슬라이드

    $('.prev').click(function () {

        prev();

    });


    $('.next').click(function () {

        next();

    });
});


// 스크롤에 따른 이미지 나타내기

$(document).ready(function () {
    $(window).scroll(function () {
        $('.hotel_1').each(function () {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({'opacity': '1'}, 750);
            }
        });

        $('.hotel_2').each(function () {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({'opacity': '1'}, 750);
            }
        });

        $('.hotel_3').each(function () {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({'opacity': '1'}, 750);
            }
        });

        $('.hotel_4').each(function () {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({'opacity': '1'}, 750);
            }
        });

        $('.hotel_5').each(function () {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 2;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_element) {
                $(this).animate({'opacity': '1'}, 750);
            }
        });
    });
});