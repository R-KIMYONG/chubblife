$(function(){
    setInterval(function(){
        $(".slid1").stop().animate({marginLeft:"-100%"},function(){
            $(".slid1").css({marginLeft:"0px"})
            $(".slid2").first().appendTo(".slid1")
        })
    },2000)

    $("button").on("click",function(){
        $(".top").hide()
    })
    $(".check").on("click",function(){
        $(".done").toggle()
    })

    $(".a2_1").mouseenter(function(){
        $(".a2_1_1").animate({width:"100%"})
    })
    $(".a2_1").mouseleave(function(){
        $(".a2_1_1").animate({width:"0%"})
    })

    $(".a2_2").mouseenter(function(){
        $(".a2_1_2").animate({width:"100%"})
    })
    $(".a2_2").mouseleave(function(){
        $(".a2_1_2").animate({width:"0%"})
    })

    $(".a2_3").mouseenter(function(){
        $(".a2_1_3").animate({width:"100%"})
    })
    $(".a2_3").mouseleave(function(){
        $(".a2_1_3").animate({width:"0%"})
    })

    $(".a2_4").mouseenter(function(){
        $(".a2_1_4").animate({width:"100%"})
    })
    $(".a2_4").mouseleave(function(){
        $(".a2_1_4").animate({width:"0%"})
    })

    $(".a2_5").mouseenter(function(){
        $(".a2_1_5").animate({width:"100%"})
    })
    $(".a2_5").mouseleave(function(){
        $(".a2_1_5").animate({width:"0%"})
    })

})