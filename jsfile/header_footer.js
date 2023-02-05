// header active 효과
$(function () {
  function nsj() {
    if (window.innerWidth > 1199) {
      $(".spMenu_btn_sj").hide();
      $("#side-nav_sj").hide();
      $("header .sns_sj").show();
      $(".nav_sj, .nav_R_sj .navL_sj").show();
    } else {
      $(".spMenu_btn_sj").show();
      $("header .sns_sj").hide();
      $(".nav_sj, .nav_R_sj .navL_sj").hide();
    }
  }

  nsj();

  $(window).resize(function () {
    nsj();
  });
});
$(function () {
  function nsj() {
    if (window.innerWidth > 1199) {
      $(".spMenu_btn_sj").hide();
      $("#side-nav_sj").hide();
      $("header .sns_main_sj").show();
      $(".nav_sj, .nav_R_sj .navL_sj").show();
    } else {
      $(".spMenu_btn_sj").show();
      $("header .sns_main_sj").hide();
      $(".nav_sj, .nav_R_sj .navL_sj").hide();
    }
  }

  nsj();

  $(window).resize(function () {
    nsj();
  });
});

// 미디어 중간, 모바일 사이즈 메뉴바
// 버튼 클릭 시 왼쪽에서 메뉴바 나오는 효과
$(function () {
  $(".spMenu_btn_sj").click(function () {
    $("#side-nav_sj").css("display", "block");

    $("#side-nav_sj").toggleClass("wow");

    if ($("#side-nav_sj").hasClass("wow")) {
      $("#side-nav_sj").animate({left: "0px"}, "187%");
    } else {
      $("#side-nav_sj").animate({left: "-10000px"}, "100%");
    }
  });
});

// product, activities 슬라이드 효과

$(function () {
  $(".navL_M_sj > li:first-child > .navL_S_sj").hide();

  $(".navL_M_sj > li:first-child, .navL_M_sj > li:nth-of-type(2)").hover(
    function () {
      $(this).children(".navL_S_sj").stop().fadeIn(200);
    },
    function () {
      $(this).children(".navL_S_sj").stop().fadeOut(200);
    }
  );
});

//  마우스 포인터 효과
const cursor = document.querySelector(".cursor_sj");
const contentEm = document.querySelectorAll("header");
// const infoLi = document.querySelectorAll(".info.bottom li");

// 움직임 효과
$(function () {
  $("header").mousemove(function (e) {
    gsap.to(".cursor_sj", {duration: 0.4, left: e.clientX, top: e.clientY});
  });

  $("header").mouseover(function (e) {
    $(".cursor_sj").css("display", "block");
  });
  $("header").mouseout(function (e) {
    $(".cursor_sj").css("display", "none");
  });

  // 오버 효과
  $(".nav_sj .navL_sj .navL_M_sj li, header .logo_1_sj, .sns_sj a, header .spMenu_btn_sj ul").hover(
    function () {
      $(".cursor_sj").addClass("active");
    },
    function () {
      $(".cursor_sj").removeClass("active");
    }
  );
  $(".nav_sj .navL_sj .navL_M_sj li, header .logo_1_sj, .sns_main_sj a, header .spMenu_btn_sj ul").hover(
    function () {
      $(".cursor_sj").addClass("active");
    },
    function () {
      $(".cursor_sj").removeClass("active");
    }
  );

  // 제목에 마우스 오버 했을 때
  $("header .sns_sj ul li").hover(
    function () {
      $(this).children().css({color: "silver", transition: "all 0.5s ease-in"});
    },
    function () {
      $(this).children().css({color: "#434343", transition: "all 0.5s ease-in"});
    }
  );

  $("header .sns_main_sj ul li").hover(
    function () {
      $(this).children().css({color: "silver", transition: "all 0.5s ease-in"});
    },
    function () {
      $(this).children().css({color: "white", transition: "all 0.5s ease-in"});
    }
  );
});

// 메뉴바
$(function () {
  $("#side-nav_sj > ul:first-child li:first-child > .navT_S_sj").hide();

  $("#side-nav_sj > ul:first-child li:first-child").click(function () {
    $(this).children(".navT_S_sj").stop().slideToggle(800);
  });
});

// top버튼
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      $(".topbtn_sj").stop().fadeIn(500);
    } else {
      $(".topbtn_sj").stop().fadeOut(500);
    }
  });

  // 탑 버튼 속도 조절
  $(".topbtn_sj").click(function (event) {
    event.preventDefault();
    $("html, body").animate({scrollTop: 0}, 1800);
  });
});
