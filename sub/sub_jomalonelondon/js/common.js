$(document).ready(function(){
    
$(".depth2").hide();

$("#header .gnb li:nth-child(3)").mouseenter(function(){
    $(this).find(".depth2").stop().slideDown();
});

$("#header .gnb li:nth-child(3)").mouseleave(function(){
    $(this).find(".depth2").stop().slideUp();
});

$("#header2 .gnb li:nth-child(3)").mouseenter(function(){
    $(this).find(".depth2").stop().slideDown();
});

$("#header2 .gnb li:nth-child(3)").mouseleave(function(){
    $(this).find(".depth2").stop().slideUp();
});

$('.info_btn').click(function(){
    var offset = $('#div1').offset(); 

    $('html').animate({scrollTop : 5701}, 2000);

});


$(window).scrollTop();
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 1000 && $(this).scrollTop() <= 9300) {
    //       $(".gobottom").fadeIn("slow");
    //     } else {
    //       $(".gobottom").fadeOut("slow");
    
    //     };
        
    //     if ($(this).scrollTop() > 6420 && $(this).scrollTop() <= 9662) {
    //       $(".gobottom").css( "color", "#ffffff" );
    //       $('.gobottom').mouseenter(function(){
    //         $(this).css("background-color","#E7D264");
    //         $(this).css("color" , "#000000");
    
    //       });
    //       $('.gobottom').mouseleave(function(){
    //         $(this).css('background-color','rgba(0,0,0,0)');
    //         $(this).css("color" , "#ffffff");
    
    //       });
    //     }
    
    
    //      else {
    //       $(".gobottom").css({ "color": "#333333" });
    //       $('.gobottom').mouseenter(function(){
    //         $(this).css("background-color","#00046E");
    //         $(this).css("color" , "#ffffff");
    
    //       });
    //       $('.gobottom').mouseleave(function(){
    //         $(this).css("background-color" , "rgba(255,255,255,0)");
    //         $(this).css("color" , "#333333");
    
    //       });
    //     };
      
    //   });

    // 문서준비이벤트종료
});