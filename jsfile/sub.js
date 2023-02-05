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


// // 호텔 스크롤 이벤트
// $(document).ready(function () {
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 6100) {
//             $('.hotel_1').addClass('active1');
//         } else {
//             $('.hotel_1').removeClass('active1');
//         }

//         if ($(this).scrollTop() > 7500) {
//             $('.hotel_2').addClass('active1');
//         } else {
//             $('.hotel_2').removeClass('active1');
//         }

//         if ($(this).scrollTop() > 8700) {
//             $('.hotel_3').addClass('active1');
//         } else {
//             $('.hotel_3').removeClass('active1');
//         }

//         if ($(this).scrollTop() > 10000) {
//             $('.hotel_4').addClass('active1');
//         } else {
//             $('.hotel_4').removeClass('active1');
//         }

//         if ($(this).scrollTop() > 11200) {
//             $('.hotel_5').addClass('active1');
//         } else {
//             $('.hotel_5').removeClass('active1');
//         }
//     });
// });

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