$(document).ready(function(){
    
    $("#header .depth2").hide();
    $("#header2 .depth2").hide();

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
    // var offset = $('#div1').offset(); 

    $('html').animate({scrollTop : 5701}, 2000);

});


// header 클릭 시 해당 섹션 이동
$('#header .gnb .en_p1:nth-child(1)').click(function(){
    // var offset = $('#div1').offset(); 
    // $(this).hide();
    $('html').animate({scrollTop : 1}, 2000);

});
$('#header .gnb .en_p1:nth-child(2)').click(function(){
    // var offset = $('#div1').offset(); 
    // $(this).hide();
    $('html').animate({scrollTop : 900}, 2000);

});
$('#header .gnb .en_p1:nth-child(3)').click(function(){
    // var offset = $('#div1').offset(); 
    // $(this).hide();
    $('html').animate({scrollTop : 5705}, 2000);

});
$('#header .gnb .en_p1:nth-child(4)').click(function(){
    // var offset = $('#div1').offset(); 
    // $(this).hide();
    $('html').animate({scrollTop : 7514}, 2000);

});



// header2 클릭 시 해당 섹션 이동
$('#header2 .gnb .en_p1:nth-child(1)').click(function(){
    // var offset = $('#div1').offset(); 
    // $(this).hide();
    $('html').animate({scrollTop : 1}, 2000);

});
$('#header2 .gnb .en_p1:nth-child(2)').click(function(){
    // var offset = $('#div1').offset(); 
    // $(this).hide();
    $('html').animate({scrollTop : 900}, 2000);

});
$('#header2 .gnb .en_p1:nth-child(3)').click(function(){
    // var offset = $('#div1').offset(); 
    // $(this).hide();
    $('html').animate({scrollTop : 5705}, 2000);

});
$('#header2 .gnb .en_p1:nth-child(4)').click(function(){
    // var offset = $('#div1').offset(); 
    // $(this).hide();
    $('html').animate({scrollTop : 7514}, 2000);
});




// sitemap


$(".m_gnb > li").mouseenter(function(){
    $(this).find(".depth2").stop().slideDown();
});
$(".m_gnb > li").mouseleave(function(){
    $(this).find(".depth2").stop().slideUp();
});



$("#header .ham_btn_hover").click(function(){
    $(".m_gnb_wrap").addClass("on");
    $(".m_gnb_wrap").removeClass("off");
});

$(".m_gnb_close_area").click(function(){
    $(".m_gnb_wrap").addClass("off");
    $(".m_gnb_wrap").removeClass("on");

});

$(".m_gnb_wrap").addClass("off");




// header2

$(".m_gnb_2 > li").mouseenter(function(){
    $(this).find(".depth2_2").stop().slideDown();
});
$(".m_gnb_2 > li").mouseleave(function(){
    $(this).find(".depth2_2").stop().slideUp();
});



$("#header2 .ham_btn_hover").click(function(){
    $(".m_gnb_wrap_2").addClass("on");
    $(".m_gnb_wrap_2").removeClass("off");
});

$(".m_gnb_close_area_2").click(function(){
    $(".m_gnb_wrap_2").addClass("off");
    $(".m_gnb_wrap_2").removeClass("on");

});

$(".m_gnb_wrap_2").addClass("off");




// sitemap

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

    // m_gnb 클릭시 해당 섹션 이동



// header 클릭 시 해당 섹션 이동
$('.m_gnb_box .m_gnb .en_p1:nth-child(1)').click(function(){
    $(".m_gnb_wrap").addClass("off");
    $(".m_gnb_wrap").removeClass("on");
    $('html').animate({scrollTop : 1}, 2000);

});
$('.m_gnb_box .m_gnb .en_p1:nth-child(2)').click(function(){
    $(".m_gnb_wrap").addClass("off");
    $(".m_gnb_wrap").removeClass("on");
    $('html').animate({scrollTop : 900}, 2000);

});
$('.m_gnb_box .m_gnb .en_p1:nth-child(3)').click(function(){
    $(".m_gnb_wrap").addClass("off");
    $(".m_gnb_wrap").removeClass("on");
    $('html').animate({scrollTop : 5705}, 2000);

});

$('.m_gnb_box .m_gnb .en_p1:nth-child(4)').click(function(){
    $(".m_gnb_wrap").addClass("off");
    $(".m_gnb_wrap").removeClass("on");
    $('html').animate({scrollTop : 9083}, 2000);

});

$('.m_gnb_box_2 .m_gnb_2 .en_p1:nth-child(1)').click(function(){
    $(".m_gnb_wrap_2").addClass("off");
    $(".m_gnb_wrap_2").removeClass("on");
    $('html').animate({scrollTop : 1}, 2000);

});
$('.m_gnb_box_2 .m_gnb_2 .en_p1:nth-child(2)').click(function(){
    $(".m_gnb_wrap_2").addClass("off");
    $(".m_gnb_wrap_2").removeClass("on");
    $('html').animate({scrollTop : 900}, 2000);

});
$('.m_gnb_box_2 .m_gnb_2 .en_p1:nth-child(3)').click(function(){
    $(".m_gnb_wrap_2").addClass("off");
    $(".m_gnb_wrap_2").removeClass("on");
    $('html').animate({scrollTop : 5705}, 2000);

});
$('.m_gnb_box_2 .m_gnb_2 .en_p1:nth-child(4)').click(function(){
    $(".m_gnb_wrap_2").addClass("off");
    $(".m_gnb_wrap_2").removeClass("on");
    $('html').animate({scrollTop : 9083}, 2000);
});


// header2 클릭 시 해당 섹션 이동
$('.m_gnb_2 > li:nth-chlid(4)').click(function(){
    $('html').animate({scrollTop : 1}, 2000);

});
$('.m_gnb_2 > li:nth-chlid(4)').click(function(){
    $('html').animate({scrollTop : 900}, 2000);

});
$('.m_gnb_2 > li:nth-chlid(4)').click(function(){
    $('html').animate({scrollTop : 5705}, 2000);

});
$('.m_gnb_2 > li:nth-chlid(4)').click(function(){
    $('html').animate({scrollTop : 7514}, 2000);
});




$(window).resize(function () {

    if (window.innerWidth <= 532) {
        $('.m_gnb_box .m_gnb .en_p1:nth-child(4)').click(function(){
            $(".m_gnb_wrap").addClass("off");
            $(".m_gnb_wrap").removeClass("on");
            $('html').animate({scrollTop : 9273}, 2000);
        });
        $('.m_gnb_box_2 .m_gnb_2 .en_p1:nth-child(4)').click(function(){
            $(".m_gnb_wrap_2").addClass("off");
            $(".m_gnb_wrap_2").removeClass("on");
            $('html').animate({scrollTop : 9273}, 2000);
        });


    }
    else {
        
    }
    if (window.innerWidth <= 320) {
        $('.m_gnb_box .m_gnb .en_p1:nth-child(3)').click(function(){
            $(".m_gnb_wrap").addClass("off");
            $(".m_gnb_wrap").removeClass("on");
            $('html').animate({scrollTop : 1}, 2000);
        
        });
        $('.m_gnb_box_2 .m_gnb_2 .en_p1:nth-child(3)').click(function(){
            $(".m_gnb_wrap_2").addClass("off");
            $(".m_gnb_wrap_2").removeClass("on");
            $('html').animate({scrollTop : 1}, 2000);
        
        });


    }
    else {

    }

}).resize();

    // 문서준비이벤트종료
});