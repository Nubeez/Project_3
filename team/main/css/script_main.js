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
