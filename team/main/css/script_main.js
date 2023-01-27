$(function () {
  var i = 0;
  var w = window.innerWidth;

  // 슬라이드
  function slide() {
    i++;

    if (i > $(".slide li:last").index()) {
      i = 0;
    }

    $(".slide li")
      .eq(i - 1)
      .css({ zIndex: 3 })
      .stop()
      .animate({ left: w }, 700, function () {
        $(".slide li")
          .eq(i - 1)
          .css({ zIndex: 1, left: 0 });
      });
    $(".slide li").eq(i).css({ zIndex: 2 });
    $(".slide li")
      .eq(i + 1)
      .css({ zIndex: 1 });

    // 페이지 번호
    $(".slideInner1").eq(i).addClass("view");

    $(".slideInner1")
      .eq(i - 1)
      .removeClass("view");

    $(".txt_hide").eq(i).addClass("view");

    $(".txt_hide")
      .eq(i - 1)
      .removeClass("view");

    //메인 타이틀 내용
    $(".slideInner1").eq(i).addClass("view2");

    $(".slideInner1")
      .eq(i - 1)
      .removeClass("view2");

    $(".txt_hide").eq(i).addClass("view2");

    $(".txt_hide")
      .eq(i - 1)
      .removeClass("view2");
  }

  setInterval(slide, 5000);

  // Initialize Swiper
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,
    pagination: {
      //   el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
  });

  // 마우스오버,아웃 클래스추가
  $(".category").mouseover(function () {
    $(this).find(".category_info").addClass("on");
  });

  $(".category").mouseout(function () {
    $(this).find(".category_info").removeClass("on");
  });
});
