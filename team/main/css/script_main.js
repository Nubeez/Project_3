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

    $(".banners").eq(i).addClass("banner_bg");

    $(".banners")
      .eq(i - 1)
      .removeClass("banner_bg");
  }

  setInterval(slide, 5000);

  // Initialize Swiper
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,

    breakpoints: {
      320: {
        slidesPerView: 1, //브라우저가 768보다 클 때
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2, //브라우저가 1024보다 클 때
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 3, //브라우저가 1024보다 클 때
        spaceBetween: 10,
      },
    },
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

  //텍스트 flow 효과 (실패)

  $(window).on("load", function () {
    setFlowBanner();
  });

  function setFlowBanner() {
    const $wrap = $(".flow_wrap");
    const $list = $(".flow_wrap .flow_list");
    let wrapWidth = ""; //$wrap의 가로 크기
    let listWidth = ""; //$list의 가로 크기
    const speed = 92; //1초에 몇픽셀 이동하는지 설정

    //리스트 복제
    let $clone = $list.clone();
    $wrap.append($clone);
    flowBannerAct();

    //반응형 :: 디바이스가 변경 될 때마다 배너 롤링 초기화
    let oldWChk =
      window.innerWidth > 1279 ? "pc" : window.innerWidth > 767 ? "ta" : "mo";
    $(window).on("resize", function () {
      let newWChk =
        window.innerWidth > 1279 ? "pc" : window.innerWidth > 767 ? "ta" : "mo";
      if (newWChk != oldWChk) {
        oldWChk = newWChk;
        flowBannerAct();
      }
    });

    //배너 실행 함수
    function flowBannerAct() {
      //배너 롤링 초기화
      if (wrapWidth != "") {
        $wrap.find(".flow_list").css({ animation: "none" });
        $wrap.find(".flow_list").slice(2).remove();
      }
      wrapWidth = $wrap.width();
      listWidth = $list.width();

      //무한 반복을 위해 리스트를 복제 후 배너에 추가
      if (listWidth < wrapWidth) {
        const listCount = Math.ceil((wrapWidth * 2) / listWidth);
        for (let i = 2; i < listCount; i++) {
          $clone = $clone.clone();
          $wrap.append($clone);
        }
      }
      $wrap.find(".flow_list").css({
        animation: `${listWidth / speed}s linear infinite flowRolling`,
      });
    }
  }
  //   $(".button-next").click(function () {
  //     $(".button-prev").removeClass("disabled");
  //     if ($(".swiper-slide").hasClass("prev_one") == "true") {
  //       $(".button-prev").removeClass("disabled");
  //     }
  //   });
});
