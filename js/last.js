$(function(){
    let baseline = -1050;
    let position1=$(".con3").offset().top+ baseline;
    let position2=$(".con4").offset().top;
    let position3=$(".con1").offset().top-550;
    $(window).scroll(function(){
       let a=$(this).scrollTop();
       //alert(a)
       if(a>=position1){
        $(".con3 .org").addClass("on",function(){
            $(".con3 .org h2").addClass("on");
        })

        $(".con3 .blk").addClass("on",function(){
            $(".blk .icon1").stop().animate({opacity:"1"},function(){
                $(".blk .icon2").stop().animate({opacity:"1"},function(){
                    $(".blk .icon3").stop().animate({opacity:"1"})
                })
            })
        })
       }else if(a<=position2){
        $(".con3 .org").removeClass("on",function(){
            $(".con3 .org h2").removeClass("on");
        })

        $(".con3 .blk").removeClass("on",function(){
            $(".blk .icon1").stop().animate({opacity:"0"},function(){
                $(".blk .icon2").stop().animate({opacity:"0"},function(){
                    $(".blk .icon3").stop().animate({opacity:"0"})
                })
            })
        })
       }
        if(a>position3){
            $("#scrolltop").stop().fadeIn();
          }else{
            $("#scrolltop").stop().fadeOut();
          }  

    })
    $(".con2_2").on("mouseenter",function(){
        clearInterval(timer)
        $(".con2_2 .im").stop().addClass("on");
        
        auto();
    })
    $(".con2_2").on("mouseleave",function(){
        clearInterval(timer)        
        $(".con2_2 .im").stop().removeClass("on");
       
        auto();
    })

    auto();
    function auto(){
        let b =0;
        timer = setInterval(function(){
            if(b==1){
                b=0;
                $(".con2_2 .im").stop().addClass("on")                
            }else{
                $(".con2_2 .im").stop().removeClass("on")                
                b=1
            }
        },2000)

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