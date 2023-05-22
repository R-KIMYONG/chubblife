$(function(){

    $(window).scroll(function(){
        let b=$(this).scrollTop();  
        if(b<500){
          $("#scrolltop").fadeOut();
        }else{
          $("#scrolltop").fadeIn();
        }  
    })
    let a = 0;
    $(".nav1 li").on("click",function(){
        a = $(this).index();
        $(".nav2 li").removeClass("on")
        $(".nav2 li").eq(a).addClass("on")
    })

    $(".menu img").on("click",function(){
        if(a==0){
            $(".gnb3").slideDown();
            a=1;
        }else{
            $(".gnb3").slideUp();
            a=0;
        }
    })

   /* $(".con3 ul li").on("mouseenter",function(){
        b=$(this).index();        
        $(".con3 ul li .con4_1").eq(b).children(".cir2").stop().animate({width:"100%",height:"100%"}).fadeOut();
        $(".con3 ul li .con4_1").eq(b).children(".content1").stop().fadeIn();
      
    })

    $(".con3 ul li").on("mouseleave",function(){
        b=$(this).index();        
        $(".con3 ul li .con4_1").eq(b).children(".content1").fadeOut(function(){
            $(".cir2").eq(b).fadeIn(function(){
                $(".cir2").stop().animate({opacity:"0",width:"0",height:"0"})
            });            
        });

    })*/
    


    let baseline = -650;
    let position1= $("#container .con3").offset().top + baseline;
    let position2= $(".ex").offset().top + baseline;
    let position3=$(".con3").offset().top
    $(window).scroll(function(){
        let c = $(this).scrollTop();
        //alert()
            if(c>=position1){    
                $("#container .con3 ul li").addClass("on");
                $(".con3 ul li .con4_1").children(".content1").stop().animate({opacity:"1"})
            }else if(c<position1){
                
            }
            
            if(c>=position2){
                $(".ex").addClass("on")
            }else if(c>=position3){
                $(".ex").removeClass("on")
            }
    })


    if(matchMedia("screen and (max-width:1339px) and (min-width:768px)").matches){
        let baseline = -850;
        let position1= $("#container .con3").offset().top + baseline;
        let position2=$("#container").offset().top+baseline;        
        $(window).scroll(function(){
            let c = $(this).scrollTop();
            //alert()
                if(c>=position1){    
                    $("#container .con3 ul li").addClass("on");
                    $(".con3 ul li .con4_1").children(".content1").stop().animate({opacity:"1"})
                }else if(c<position1){
                    $("#container .con3 ul li").removeClass("on");
                    $(".con3 ul li .con4_1").children(".content1").stop().animate({opacity:"0"})
                }else if(c<=position2){
                    $("#scrolltop").fadeOut();
                }else{
                    $("#scrolltop").fadeIn();
                }  

        })
    }



    if(matchMedia("screen and (max-width:767px)").matches){

        let baseline = -500
        let position1=$(".mo").offset().top+baseline;
        let position2=$(".con3").offset().top+baseline;
        $(window).scroll(function(){
            let a =$(window).scrollTop();
            if(a>=position1){
                $(".mo").addClass("on")
            }else if(a>=position2){
                $(".mo").removeClass("on")
            }
        })

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
        $(".info div").on("click",function(){
            $("#container .mo1 .ex").animate({left:"0"})            
        })        
        $(".nav1 li").on("click",function(){
            a=$(this).index();
            //alert(a)
            $(".nav1 li").removeClass("on");
            $(this).addClass("on");
            $(".nav2 li").removeClass("as")
            $(".nav2 li").eq(a).addClass("as")            
        })



        $("#container .mo1 .ex .amount").on("click",function(){
            $("#container .mo1 .ex").animate({left:"-100%"})            
        })

        $(".info ul li").on("click",function(){
            $(".info ul li").removeClass("on");
            $(this).addClass("on");
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
});


