$(function(){
    $('.play').on("click",function() {
        $('.videointro').get(0).play();
        $('.play, .blackbg,.whitelogo').fadeOut();
        $('.whitelogo').delay(1000).fadeOut();
      });
    
      $('.videointro').on('ended pause', function() {
        $('.play, .blackbg,.whitelogo').fadeIn();
      });
      $('.videointro').on('play', function() {
        $('.play, .blackbg').fadeOut();
        $('.whitelogo').delay(1000).fadeOut();
      });


    let a = 0;
    $(".menu img").on("click",function(){
        if(a==0){
            $(".gnb3").slideDown();
            a=1;
        }else{
            $(".gnb3").slideUp();
            a=0;
        }
    })

    let c=0;
    let b=4;    
    $(".bg02 .right").on("click",function(){
        c++;
        if(c == b-1){            
            $(".area>div>ul").stop().animate({left:"-300%"},function(){
                $(".area>div>ul").css({left:"0px"})
            });
            c=0;
        }else{
            $(".area>div>ul").stop().animate({left:-c*100+"%"})
        }
        
    })
    $(".bg02 .left").on("click",function(){
        c--;
        if(c < 0){
            $(".area>div>ul").css({left:"-300%"})
            $(".area>div>ul").stop().animate({left:"-200%"})
            c=2;                   
        }else{          
            $(".area>div>ul").animate({left:-c*100+"%"})
        }
        
    })

    let baseline = -550;
    let position1= $(".ma1").offset().top + baseline;
    let position2 = $(".area").offset().top+baseline;
    //alert(position2)
    $(window).scroll(function(){
        let d = $(this).scrollTop();
        //alert(d)
            if(d>=position1){
                $(".ma1").addClass("on")
                $(".ma2").addClass("on")
                $(".ma3").addClass("on")
             }else{
                $(".ma1").removeClass("on")
                $(".ma2").removeClass("on")
                $(".ma3").removeClass("on")
             }
             if(d>position2){
                $("#scrolltop").stop().fadeIn();
              }else{
                $("#scrolltop").stop().fadeOut();
              }  
    })

    





    if(matchMedia("screen and (max-width:767px)").matches){
        let a=0;
        $("#menu").on("click",function(){
            if(a==0){
                $(".gnb3").slideDown();
                $(".gnb3 li").addClass("on")

                $("#menu .clo2").removeClass("off").animate({opacity:"1"});
                $("#menu div").fadeOut();
                $(this).animate({width:"35px"}).addClass("on")
                $("#menu .clo1").addClass("on").animate({opacity:"1"},function(){
                    $("#menu .clo2").delay(800).addClass("on")
                })                
                a=1;
            }else{
                $(".gnb3 li").removeClass("on",function(){
                    $(".gnb3").slideUp();
                })
                $("#menu .clo2").removeClass("on")
                $("#menu .clo2").addClass("off").animate({opacity:"0"},function(){
                    $("#menu .clo1").removeClass("on")
                })
                $(this).animate({width:"100px"}).removeClass("on")
                $("#menu div").fadeIn();
                a=0;
            }
        })
        let b=4;        
        setInterval(function(){
            a++;           
            if(a == b-1){
                $(".mobg05 .num5").stop().animate({left:"-300%"},function(){
                    $(".mobg05 .num5").stop().css({left:"0"})
                })
                
                a=0;
            }else{
                $(".mobg05 .num5").stop().animate({left:-a*100+"%"})
            }
        },2000)

        let baseline = -550;
        let position1= $(".manage1").offset().top + baseline;
        let position2 = $(".area").offset().top + baseline;
        $(window).scroll(function(){
            let d = $(this).scrollTop();
            //alert(position1)
            //alert(d)
                if(position1<=d){    
                    $(".ma1 .text2 p").stop().animate({left:"0",opacity:"1"},function(){
                        $(".ma1 .line div").stop().animate({width:"15vw"},function(){
                            $(".ma1 .small1 div").stop().animate({width:"1vw"},function(){
                                $(".ma1 .cir1").addClass("on",function(){
                                    $(".ma1 .cir1 h3").stop().animate({opacity:"1"})
                                })
                            })
                        })                        
                    })
                    $(".ma2_1 .text3 p").stop().animate({left:"0%",opacity:"1"},function(){
                            $(".ma2_1 .line div").stop().animate({width:"15vw"},function(){
                                $(".ma2_1 .small1 div").stop().animate({width:"1vw"},function(){
                                    $(".ma2_1 .cir1").addClass("on",function(){
                                        $(".ma2_1 .cir1 h3").stop().animate({opacity:"1"})
                                    })
                                })
                            })                        
                    })
                        $(".ma3 .text2 p").stop().animate({left:"0",opacity:"1"},function(){
                            $(".ma3 .line div").stop().animate({width:"15vw"},function(){
                                $(".ma3 .small1 div").stop().animate({width:"1vw"},function(){
                                    $(".ma3 .cir1").addClass("on",function(){
                                        $(".ma3 .cir1 h3").stop().animate({opacity:"1"})
                                    })
                                })
                            })                        
                        })               
                }else if(position1>d){
                    $(".ma1 .text2 p").stop().animate({right:"-100%",opacity:"0"},function(){
                        $(".ma1 .line div").stop().animate({width:"0vw"},function(){
                            $(".ma1 .small1 div").stop().animate({width:"0vw"},function(){
                                $(".ma1 .cir1").removeClass("on",function(){
                                    $(".ma1 .cir1 h3").stop().animate({opacity:"0"})
                                })
                            })
                        })                        
                    })
                    $(".ma2_1 .text3 p").stop().animate({left:"-100%",opacity:"0"},function(){
                            $(".ma2_1 .line div").stop().animate({width:"0vw"},function(){
                                $(".ma2_1 .small1 div").stop().animate({width:"0vw"},function(){
                                    $(".ma2_1 .cir1").removeClass("on",function(){
                                        $(".ma2_1 .cir1 h3").stop().animate({opacity:"0"})
                                    })
                                })
                            })                        
                    })
                        $(".ma3 .text2 p").stop().animate({right:"-100%",opacity:"0"},function(){
                            $(".ma3 .line div").stop().animate({width:"0vw"},function(){
                                $(".ma3 .small1 div").stop().animate({width:"0vw"},function(){
                                    $(".ma3 .cir1").removeClass("on",function(){
                                        $(".ma3 .cir1 h3").stop().animate({opacity:"0"})
                                    })
                                })
                            })                        
                        })
                }
                if(d>position2){
                    $("#scrolltop").stop().fadeIn();
                }else{
                    $("#scrolltop").stop().fadeOut();
                }


        })
    }

    $("#scrolltop").on("click",function(){
        $('html, body').animate({scrollTop:"0"},500);
      })

        /*---------chatbot-----------*/ 
        $("#chatbotoff").on("click",function(){
            $("#myDiv1").fadeOut();
          })
    
          $("#myDiv1").on("mouseenter",function(){
            $(".bl").fadeIn();
            $("#chatbotoff").fadeIn();
          })
          $("#myDiv1").on("mouseleave",function(){
            $(".bl").fadeOut();
            $("#chatbotoff").fadeOut();
          })
        /*---------chatbot-----------*/ 
        function draggable(elem) {
        var pos1 = 0, pos2 = 0; //이동한 xy좌표값
        var pos3 = 0, pos4 = 0; // xy좌표값
        
        if (document.getElementById(elem.id+"Header")) { //myDiv1Header 뜻함
            document.getElementById(elem.id+"Header").onmousedown = dragMouseDown;
        //onmouserdown할때 dragMouseDown함수를 등록하겠다
        }
        
        //클로저(중첩함수)
        function dragMouseDown(e) { //드래그하기위해 마우스 다운할때
            e = e || window.event; //브라우저따라 안먹을 수 있으니 두개 써주기
            
            //alert(e.button); //마우스 클릭 - 왼0 휠1 오2
            if(e.button==0){ //마우스 좌측 버튼 클릭시
            pos3 = e.clientX;
            pos4 = e.clientY;
            
            //드래그 드롭 작업을 위한 클릭한 위치좌표 얻어오기
            //console.log(pos3+" / "+pos4); //클릭한 위치값
            console.log(elem.offsetLeft+" / "+elem.offsetTop);  //위치값
            //left="8px" -> 8 변환 필요
            //offset= 8 (숫자형으로 돌려주기 때문에 변환 필요 없음)
            
            document.onmousemove= elementDrag; //문서 전체에서 마우스 move, up 일어남
            document.onmouseup= closeDragElement;
            }
        }
        
        function elementDrag(e) {
            //console.log("document.onmousemove...elementDrag");
            e=e||window.event;
            
            pos1 = pos3 - e.clientX; //이동한 거리x 
            pos2 = pos4 - e.clientY;  //이동한 거리y
            
            //console.log(pos1+" / "+pos2);
            
            elem.style.left =(elem.offsetLeft - pos1)+"px"; //+"px" 주의
            elem.style.top =(elem.offsetTop - pos2)+"px"; //+"px" 주의
            
            //원래 위치값도 옮겨줘야함 (3번쨰로 옮기면 2번째로 옮겨진 그 위치가 원래 위치값이 되니까 )
            pos3 = e.clientX;
            pos4 = e.clientY;
            
        }
        
        function closeDragElement(e) {
            //console.log("document.onmouseup...closeDragElement");
            
            document.onmousemove=null;
            document.onmouseup= null;
            $(".myDiv").css({"position":"fixed"})
        }
    }
    
    //$(".draggable").draggable();
    draggable(document.getElementById("myDiv1"));
    draggable(document.getElementById("myDiv1"));
    draggable(document.getElementById("myDiv1"));
})