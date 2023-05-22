$(function(){
    /*모바일 버전 메뉴바효과*/
    if(matchMedia("screen and (max-width:767px)").matches){

        $(window).scroll(function(){
            let b=$(this).scrollTop();  
            if(b<300){
              $("#scrolltop").fadeOut();
            }else{
              $("#scrolltop").fadeIn();
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
        $(".gnb li").on("click",function(){
            a=$(this).index();
            /*$(".under li").children("div").eq(a).stop().animate({width:"100%"})*/
            $(".under li").stop().removeClass("on");
            $(".under li").eq(a).stop().addClass("on")
        });


    }

    if(matchMedia("screen and (max-width:1339px) and (min-width:768px)").matches){

        $(window).scroll(function(){
            let b=$(this).scrollTop();  
            if(b<300){
              $("#scrolltop").fadeOut();
            }else{
              $("#scrolltop").fadeIn();
            }  
        })

        welcome();
        function welcome(){
            $("#visual .t1 .wel1")
            .delay(1000)    
            .animate({ transform: "translateY(0px)"},1000,"easeOutBack");
            $("#visual .t1 .wel2")
            .delay(1200)
            .animate({ transform: "translateY(0px)"}, 1000,"easeOutBack");
            $("#visual .t1 .wel3")
            .delay(1400)
            .animate({ transform: "translateY(0px)"}, 1000,"easeOutBack");
            $("#visual .t1 .wel4")
            .delay(1600)
            .animate({ transform: "translateY(0px)",color:"#ff6600"},1000,"easeOutBack");
            $("#visual .t1 .wel5")
            .delay(1800)
            .animate({ transform: "translateY(0px)" }, 1000,"easeOutBack");
            $("#visual .t1 .wel6")
            .delay(2000)
            .animate({ transform: "translateY(0px)" }, 1000,"easeOutBack");
            $("#visual .t1 .wel7")
            .delay(2200)
            .animate({ transform: "translateY(0px)" }, 1000,"easeOutBack");
            $("#visual .t1 .wel8")
            .delay(2400)
            .animate({ transform: "translateY(0px)" }, 1000,"easeOutBack");
        }
        welcomeoff();
        function welcomeoff(){
            $("#visual .t1 .wel1")
            .delay(1000)    
            .animate({ transform: "translateY(100px)" },1000,"easeInOutBack");
            $("#visual .t1 .wel2")
            .delay(1200)
            .animate({ transform: "translateY(100px)" }, 1000,"easeInOutBack");
            $("#visual .t1 .wel3")
            .delay(1400)
            .animate({ transform: "translateY(100px)"}, 1000,"easeInOutBack");
            $("#visual .t1 .wel4")
            .delay(1600)
            .animate({ transform: "translateY(100px)",color:"#000"  },1000,"easeInOutBack");
            $("#visual .t1 .wel5")
            .delay(1800)
            .animate({ transform: "translateY(100px)" }, 1000,"easeInOutBack");
            $("#visual .t1 .wel6")
            .delay(2000)
            .animate({ transform: "translateY(100px)" }, 1000,"easeInOutBack");
            $("#visual .t1 .wel7")
            .delay(2200)
            .animate({ transform: "translateY(100px)" }, 1000,"easeInOutBack");
            $("#visual .t1 .wel8")
            .delay(2400)
            .animate({ transform: "translateY(100px)" }, 1000,"easeInOutBack");
        }
        
        /*WELCOME 나타나기 효과 */
        let b=0;
        setInterval(function(){
    
            if(b == 0){
                welcome();
                b+=1;   
            }else{
                welcomeoff();
                b=0;
            }
            },4800)
    }
    if(matchMedia("screen and (min-width:1340px)").matches){

        $(window).scroll(function(){
            let b=$(this).scrollTop();  
            if(b<500){
              $("#scrolltop").fadeOut();
            }else{
              $("#scrolltop").fadeIn();
            }  
        })

        welcome();
        function welcome(){
            $("#visual .t1 .wel1")
            .delay(1000)    
            .animate({ transform: "translateY(0px)"},1000,"easeOutBack");
            $("#visual .t1 .wel2")
            .delay(1200)
            .animate({ transform: "translateY(0px)"}, 1000,"easeOutBack");
            $("#visual .t1 .wel3")
            .delay(1400)
            .animate({ transform: "translateY(0px)"}, 1000,"easeOutBack");
            $("#visual .t1 .wel4")
            .delay(1600)
            .animate({ transform: "translateY(0px)",color:"#ff6600"},1000,"easeOutBack");
            $("#visual .t1 .wel5")
            .delay(1800)
            .animate({ transform: "translateY(0px)" }, 1000,"easeOutBack");
            $("#visual .t1 .wel6")
            .delay(2000)
            .animate({ transform: "translateY(0px)" }, 1000,"easeOutBack");
            $("#visual .t1 .wel7")
            .delay(2200)
            .animate({ transform: "translateY(0px)" }, 1000,"easeOutBack");
            $("#visual .t1 .wel8")
            .delay(2400)
            .animate({ transform: "translateY(0px)" }, 1000,"easeOutBack");
        }
        welcomeoff();
        function welcomeoff(){
            $("#visual .t1 .wel1")
            .delay(1000)    
            .animate({ transform: "translateY(100px)" },1000,"easeInOutBack");
            $("#visual .t1 .wel2")
            .delay(1200)
            .animate({ transform: "translateY(100px)" }, 1000,"easeInOutBack");
            $("#visual .t1 .wel3")
            .delay(1400)
            .animate({ transform: "translateY(100px)"}, 1000,"easeInOutBack");
            $("#visual .t1 .wel4")
            .delay(1600)
            .animate({ transform: "translateY(100px)",color:"#000"  },1000,"easeInOutBack");
            $("#visual .t1 .wel5")
            .delay(1800)
            .animate({ transform: "translateY(100px)" }, 1000,"easeInOutBack");
            $("#visual .t1 .wel6")
            .delay(2000)
            .animate({ transform: "translateY(100px)" }, 1000,"easeInOutBack");
            $("#visual .t1 .wel7")
            .delay(2200)
            .animate({ transform: "translateY(100px)" }, 1000,"easeInOutBack");
            $("#visual .t1 .wel8")
            .delay(2400)
            .animate({ transform: "translateY(100px)" }, 1000,"easeInOutBack");
        }
        
        /*WELCOME 나타나기 효과 */
        let b=0;
        setInterval(function(){
    
            if(b == 0){
                welcome();
                b+=1;   
            }else{
                welcomeoff();
                b=0;
            }
            },4800)
    }
    


    let baseline = -650;
    let position1= $(".event").offset().top + baseline;
    let position2= $(".custom").offset().top + baseline;
    $(window).scroll(function(){
        let c = $(this).scrollTop();
        //alert(c)
            if(c>=position1){    
                $(".event").stop().animate({opacity:"1",bottom:"0"},2000,function(){
                    $(".event2").addClass("on")
                })
            }
            
            if(c>=position2){
                $(".cls-1").addClass("on")
                $(".custom").addClass("on")
            }
    })

    $(".custom ul li").on("click",function(){
        d=$(this).index();
        $(".custom ul li .text4>h3").removeClass("on")
        $(".custom ul li .text4>h3").eq(d).addClass("on")
        $(".custom ul li .text4").children("div").removeClass("on")
        $(".custom ul li .text4").eq(d).children(".lin1").addClass("on",function(){
            $(".custom ul li .text4").eq(d).children(".lin2").addClass("on")
        })
    })

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