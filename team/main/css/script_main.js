$(function () {
  var i = 0;
  var w = window.innerWidth;

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
  }

  setInterval(slide, 5000);
  
  // Initialize Swiper
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
