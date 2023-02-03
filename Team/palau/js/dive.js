 
 //스크롤 탑
 $(window).ready(function() {
    var isOn = false;
    $(window).scroll(function() {
       if($(this).scrollTop() > 100){
           if(!isOn) {
            $("#up").addClass("on");
               isOn = true;
           }                   
       }else{
           if(isOn) {
               $("#up").removeClass("on");
               isOn = false;
           }                   
       }
    });
    $("#up a").click(function() {
        $(window).scrollTop(0);                
    });
});

//스크롤 이동시 글자 이동
$(function(){
    // 위에서
    $('#kaiten').css("transform","translateY(0px)").css("opacity","1");
    $('article').css("transform","translateY(0px)").css("opacity","1");
    $(window).scroll(function () {
        var ws = $(this).scrollTop();
        if (window.matchMedia("(min-width: 768px)").matches) {

            if (0 < ws < 300) {
                $('#kaiten').css("transform", "translateY(0px)").css("opacity", "1");
                $('article').css("transform", "translateY(0px)").css("opacity", "1");
                $('.s1').css("transform", "translateY(-200px)").css("opacity", "0");
                $('.s2').css("transform", "translateY(100px)").css("opacity", "0");
            }
            // 아래에서
            if (360 < ws) {
                $('#kaiten').css("transform", "translateY(-200px)").css("opacity", "0");
                // $('article').css("transform", "translateY(300px)").css("opacity", "0");
                $('.s1').css("transform", "translateY(0px)").css("opacity", "1");
                $('.s2').css("transform", "translateY(0px)").css("opacity", "1");
            }
            if (600 < ws) {
            $('article').css("transform", "translateY(300px)").css("opacity", "0");
            }
            // 위에서
            if (ws > 1600) {
                
                $('.s1').css("transform", "translateY(-200px)").css("opacity", "0");
                $('.s2').css("transform", "translateY(100px)").css("opacity", "0");
                $('.s3').css("transform", "translateY(0px)").css("opacity", "1");
            }
            if (ws > 3000) {
                $('.s3').css("transform", "translateY(-200px)").css("opacity", "0");
            }

        } else if (window.matchMedia("(max-width: 767px)").matches) {

            // 위쪽에서
            if (0 < ws < 100) {
                $('#kaiten').css("transform", "translateY(0px)").css("opacity", "1");
                $('article').css("transform", "translateY(0px)").css("opacity", "1");
                $('.s1').css("transform", "translateY(-200px)").css("opacity", "0");
                $('.s2').css("transform", "translateY(100px)").css("opacity", "0");
            }
            // 아래에서
            if (360 < ws) {
                $('.s1').css("transform", "translateY(0px)").css("opacity", "1");
                $('.s2').css("transform", "translateY(0px)").css("opacity", "1");
            }
            if (1000 < ws) {
                $('#kaiten').css("transform", "translateY(-200px)").css("opacity", "0");
                $('article').css("transform", "translateY(300px)").css("opacity", "0");
            }
            // 위에서
            if (ws > 1600) {
                $('.s1').css("transform", "translateY(-200px)").css("opacity", "0");
                $('.s2').css("transform", "translateY(100px)").css("opacity", "0");
               
            }
            if (ws > 1800) {
                $('.s3').css("transform", "translateY(0px)").css("opacity", "1");
            }
            if (ws > 2500) {
                $('.s3').css("transform", "translateY(-200px)").css("opacity", "0");
            }

        }
    });
  });

//포토호버
$(function(){
    $(".photo_list li a").hover(
        function(){
            $(this).children(".anibox").stop().fadeIn();
        },
        function () {
            $(this)
              .children(".anibox")
              .stop()
              .fadeOut();
          }
        );
});

//안내문
$(function(){
    let index
    $(".tab_menu").click(function(){
        index=$(this).index();
        console.log(index);

    $(".tab_sub").eq(index).slideToggle(1000).siblings().hide();
    $(this).addClass("port_back").siblings().removeClass("port_back");
    });
});

//돌아가는 문자
window.onload = function () {
    var kaiten = document.getElementById("kaiten");
    var timerID = setInterval(doRotate, 350);
        kaiten.onclick = function (e) {
            clearInterval(timerID);
    }
    function doRotate() {
        var str = kaiten.innerHTML;
        var firstChar = str.substr(0, 1);
        var remains = str.substr(1, str.length - 1);
        str = remains + firstChar;
        kaiten.innerHTML = str;
    };
};   

//지도 호버
$(function(){
    $('.palau_map_left ul li:nth-of-type(1)').hover(function(){
        $(".palau_map_right").children(".text_01").stop().animate({'opacity':'1','top': '15%',},800);
    }, function(){
        $(".palau_map_right").children(".text_01").stop().animate({'opacity':'0','top': '-10%', },800);
    });

    $('.palau_map_left ul li:nth-of-type(2)').hover(function(){
        $(".palau_map_right").children(".text_02").stop().animate({'opacity':'1','top': '15%',},800);
    }, function(){
        $(".palau_map_right").children(".text_02").stop().animate({'opacity':'0','top': '-10%', },800);
    });

    $('.palau_map_left ul li:nth-of-type(3)').hover(function(){
        $(".palau_map_right").children(".text_03").stop().animate({'opacity':'1','top': '15%',},800);
    }, function(){
        $(".palau_map_right").children(".text_03").stop().animate({'opacity':'0','top': '-10%', },800);
    });

    $('.palau_map_left ul li:nth-of-type(4)').hover(function(){
        $(".palau_map_right").children(".text_04").stop().animate({'opacity':'1','top': '15%',},800);
    }, function(){
        $(".palau_map_right").children(".text_04").stop().animate({'opacity':'0','top': '-10%', },800);
    });

    $('.palau_map_left ul li:nth-of-type(5)').hover(function(){
        $(".palau_map_right").children(".text_05").stop().animate({'opacity':'1','top': '15%',},800);
    }, function(){
        $(".palau_map_right").children(".text_05").stop().animate({'opacity':'0','top': '-10%', },800);
    });

    $('.palau_map_left ul li:nth-of-type(6)').hover(function(){
        $(".palau_map_right").children(".text_06").stop().animate({'opacity':'1','top': '15%',},800);
    }, function(){
        $(".palau_map_right").children(".text_06").stop().animate({'opacity':'0','top': '-10%', },800);
    });

    $('.palau_map_left ul li:nth-of-type(7)').hover(function(){
        $(".palau_map_right").children(".text_07").stop().animate({'opacity':'1','top': '15%',},800);
    }, function(){
        $(".palau_map_right").children(".text_07").stop().animate({'opacity':'0','top': '-10%', },800);
    });

    $('.palau_map_left ul li:nth-of-type(8)').hover(function(){
        $(".palau_map_right").children(".text_08").stop().animate({'opacity':'1','top': '15%',},800);
    }, function(){
        $(".palau_map_right").children(".text_08").stop().animate({'opacity':'0','top': '-10%', },800);
    });

    $('.palau_map_left ul li:nth-of-type(9)').hover(function(){
        $(".palau_map_right").children(".text_09").stop().animate({'opacity':'1','top': '15%',},800);
    }, function(){
        $(".palau_map_right").children(".text_09").stop().animate({'opacity':'0','top': '-10%', },800);
    });

    $('.palau_map_left ul li:nth-of-type(10)').hover(function(){
        $(".palau_map_right").children(".text_10").stop().animate({'opacity':'1','top': '15%',},800);
    }, function(){
        $(".palau_map_right").children(".text_10").stop().animate({'opacity':'0','top': '-10%', },800);
    });

    $('.palau_map_left ul li:nth-of-type(11)').hover(function(){
        $(".palau_map_right").children(".text_11").stop().animate({'opacity':'1','top': '15%',},800);
    }, function(){
        $(".palau_map_right").children(".text_11").stop().animate({'opacity':'0','top': '-10%', },800);
    });
});