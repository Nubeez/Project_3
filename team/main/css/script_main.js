$(function () {
  $(function slide() {
    $(".slide")
      .stop()
      .animate({ marginLeft: "100%" }, 1200, function () {
        $(".slide li:first").appendTo(".slide");
        $(".slide").css({ marginLeft: 0 });
      });
    setInterval(slide, 5000);
  });
});
