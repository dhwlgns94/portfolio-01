$(document).ready(function () {
    $(window).scroll(function () {

        if ($(this).scrollTop() > 400 && $(this).scrollTop() <= 4500) {
            $(".main_logo svg path").attr('fill', '#f7f8fa');
        }
        else {
            $(".main_logo svg path").attr('fill', '#333333');

        }



        if ($(this).scrollTop() > 4500 && $(this).scrollTop() <= 7566) {
            $("body").addClass("on");
            $("#works h3").addClass("on");
            $("#header").addClass("on");
            $("#header2").addClass("on");
        }
        else {
            $("body").removeClass("on");
            $("#works h3").removeClass("on");
            $("#header").removeClass("on");
            $("#header2").removeClass("on");
        }


        //gnb li 위치에 따른 밑줄

        if ($(this).scrollTop() >= 0 && $(this).scrollTop() < 700) {
            $("#header .en_p1:nth-child(1)").addClass("on");
        }
        else {
            $("#header .en_p1:nth-child(1)").removeClass("on");

        }
        if ($(this).scrollTop() >= 700 && $(this).scrollTop() < 1800) {
            $("#header .en_p1:nth-child(2)").addClass("on");
        }
        else {
            $("#header .en_p1:nth-child(2)").removeClass("on");

        }
        if ($(this).scrollTop() >= 1800 && $(this).scrollTop() < 7138) {
            $("#header .en_p1:nth-child(3)").addClass("on");
        }
        else {
            $("#header .en_p1:nth-child(3)").removeClass("on");

        }
        if ($(this).scrollTop() >= 1800 && $(this).scrollTop() < 7138) {
            $("#header2 .en_p1:nth-child(3)").addClass("on");
        }
        else {
            $("#header2 .en_p1:nth-child(3)").removeClass("on");

        }
        if ($(this).scrollTop() >= 7138) {
            $("#header .en_p1:nth-child(4)").addClass("on");
        }
        else {
            $("#header .en_p1:nth-child(4)").removeClass("on");

        }






        // windowscroll이벤트종료

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

    });



    const ani1 = gsap.timeline();
    ani1
        .from("#wish .wish_text h2", { xPercent: 500 }, "text")
        .from("#wish .wish_text p", { xPercent: -300 }, "text");
    ScrollTrigger.create({
        animation: ani1,
        trigger: "#wish",
        start: "top top",
        end: "+=1000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        markers: 0,
    });


    const ani2 = gsap.timeline();
    ani2
        .from(".works_imgwrap", { yPercent: 500 }, "text")

    ScrollTrigger.create({
        animation: ani2,
        trigger: "#works",
        start: "top top",
        end: "+=1000",
        scrub: true,
        pin: true,
        anticipatePin: 1,
        markers: 0,
    });


    // const ani2 = gsap.timeline();
    // ani1.from("#wish .wish_text p", {xPercent: 300}, "text")

    // ScrollTrigger.create({
    //     animation: ani1,
    //     trigger: "#wish",
    //     start: "top top",
    //     end: "-=1500",
    //     scrub: true,
    //     pin: true,
    //     // anticipatePin: 1,
    //     markers: true
    // });
    // gsap.registerPlugin(ScrollTrigger);

    // gsap.to(".wish_text h2",{
    //     trigger: "#wish",
    //     start:"0% 30%",
    //     end: "100% 80%",
    //     scrub: 1,
    //     markers: true,
    //     x: 300,
    // } );


    // 반응형선언(최우선 선언되어야함)
    $(window).resize(function () {


        if (window.innerWidth <= 1550) {
            // 반응형맥북



            $(window).scroll(function () {

                if ($(this).scrollTop() > 4500 && $(this).scrollTop() <= 6519) {
                    $("body").addClass("on");
                    $("#works h3").addClass("on");
                    $("#header").addClass("on");
                    $("#header2").addClass("on");
                }
                else {
                    $("body").removeClass("on");
                    $("#works h3").removeClass("on");
                    $("#header").removeClass("on");
                    $("#header2").removeClass("on");
                }

            });

        } else {

        }

        if (window.innerWidth <= 825) {



            $(window).scroll(function () {

                if ($(this).scrollTop() > 4500 && $(this).scrollTop() <= 8500) {
                    $("body").addClass("on");
                    $("#works h3").addClass("on");
                    $("#header").addClass("on");
                    $("#header2").addClass("on");
                }
                else {
                    $("body").removeClass("on");
                    $("#works h3").removeClass("on");
                    $("#header").removeClass("on");
                    $("#header2").removeClass("on");
                }

            });

        } else {




            /* 스크립트내용*/

        }

        if (window.innerWidth <= 520) {



            $(window).scroll(function () {

                if ($(this).scrollTop() > 4500 && $(this).scrollTop() <= 7800) {
                    $("body").addClass("on");
                    $("#works h3").addClass("on");
                    $("#header").addClass("on");
                    $("#header2").addClass("on");
                }
                else {
                    $("body").removeClass("on");
                    $("#works h3").removeClass("on");
                    $("#header").removeClass("on");
                    $("#header2").removeClass("on");
                }

            });

        } else {

        }

        if (window.innerWidth <= 414) {



            $(window).scroll(function () {

                if ($(this).scrollTop() > 4500 && $(this).scrollTop() <= 7823) {
                    $("body").addClass("on");
                    $("#works h3").addClass("on");
                    $("#header").addClass("on");
                    $("#header2").addClass("on");
                }
                else {
                    $("body").removeClass("on");
                    $("#works h3").removeClass("on");
                    $("#header").removeClass("on");
                    $("#header2").removeClass("on");
                }

            });

        } else {

        }
        if (window.innerWidth <= 320) {



            $(window).scroll(function () {

                if ($(this).scrollTop() >= 4405 && $(this).scrollTop() <= 6500) {
                    $("body").addClass("on");
                    $("#works h3").addClass("on");
                    $("#header").addClass("on");
                    $("#header2").addClass("on");
                }
                else {
                    $("body").removeClass("on");
                    $("#works h3").removeClass("on");
                    $("#header").removeClass("on");
                    $("#header2").removeClass("on");
                }

            });

        } else {

        }

    }).resize();



    var img_width = $(".project_img_wrap").width();
    $(".project_img_wrap").height(img_width);
    // 이미지 가로길이만큼 세로길이 적용(정사각형)


    //문서준비이벤트종료
});
