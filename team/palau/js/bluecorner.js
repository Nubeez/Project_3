 
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
    // 위 아래쪽에서
    $('.sld_1').css("transform","translateY(0px)").css("opacity","1");
    $('.sld_2').css("transform","translateY(0px)").css("opacity","1");
    $(window).scroll(function(){
      var ws=$(this).scrollTop();
      // 왼쪽에서
      if(ws>0){
        $('.sld_1').css("transform","translateY(0px)").css("opacity","1");
        $('.sld_2').css("transform","translateY(0px)").css("opacity","1");
      }
      if(ws<600){
        $('.photo_1').css("transform","translateY(-100px)").css("opacity","0");
      }
      //오른쪽에서
      if(ws>400){
        $('.photo_1').css("transform","translateY(0px)").css("opacity","1");
        $('.photo_2').css("transform","translateY(100px)").css("opacity","0");
        $('.photo_3').css("transform","translateY(-100px)").css("opacity","0");
        $('.photo_4').css("transform","translateY(100px)").css("opacity","0");
      }
      if(ws>800){
        $('.photo_2').css("transform","translateY(0px)").css("opacity","1");
      }
      // 왼쪽에서
      if(ws>1200){
        $('.photo_3').css("transform","translateY(0px)").css("opacity","1");
        $('.sld_1').css("transform","translateY(-100px)").css("opacity","0");
        $('.sld_2').css("transform","translateY(100px)").css("opacity","0");
        
      }
      //오른쪽에서
      if(ws>2000){
        $('.photo_4').css("transform","translateY(0px)").css("opacity","1");
        $('.photo_1').css("transform","translateY(-100px)").css("opacity","0");
      }
      // 오른쪽위에서
      if(ws>2400){
        $('.topsite').css("transform","translateY(0px)").css("opacity","1");
      }
      if(ws>2600){
        $('.photo_3').css("transform","translateY(-100px)").css("opacity","0");
        
      }
      if(ws>3200){
        $('.photo_4').css("transform","translateY(100px)").css("opacity","0");
      }

    });
  });



