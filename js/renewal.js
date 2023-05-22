$(function(){

    if(matchMedia("screen and (max-width:1339px) and (min-width:768px)").matches){

        $("#visual .p1").on("click",function(){
            $("#visual video").trigger("play");
        })
        $("#visual .p2").on("click",function(){
            $("#visual video").trigger('pause');
        })
        let baseline = -720;
        let position1 = $(".banner").offset().top+baseline;
        let position2 = $(".product").offset();
        $(window).scroll(function(){
            let b=$(this).scrollTop();
            //alert(b)
            if(b>=position1){
                $(".cls-1").addClass("on")
            }else if(b>=position2){
                $(".cls-1").removeClass("on")
            }
        })
    
        setInterval(function(){
            $("header,.blackbg,.tit,.visualicion,.myDiv").fadeIn();           
        },10000)

        
        let baseline1 = -650;
        let baseline2 = -250;
        let position3 = $(".product").offset().top+baseline1;   
        let position4 = $(".story").offset().top+baseline1;   
        let position5 =$(".banner").offset().top+baseline2; 
        $(window).scroll(function(){
            let b=$(this).scrollTop();
            //alert(b)
            if(b>=position3 && b<=position4){
                $(".list1").addClass("on")
                $(".but1").addClass("on")
                $(".list2").addClass("on")              
            }else if(b<=position4){
              $(".list1").removeClass("on")
              $(".but1").removeClass("on")
              $(".list2").removeClass("on")
            }else if(b>=position4){
              $(".story").animate({left:"0",opacity:"1"},"linear",function(){
                  $(".story .tit2").animate({top:"0px",opacity:"1"},2000)
                  $(".story .detail").delay(400).animate({top:"0px",opacity:"1"},2000)
              })
            }

            if(b>position5){
                $("#scrolltop").fadeIn();
              }else if(position5<b){
                $("#scrolltop").fadeOut();
              }
        })

        $("#scrolltop").on("click",function(){
            $('html, body').animate({scrollTop:"0"},500);
          })

        let c = 0;
        $(".gnb li").on("mouseenter",function(){
            c=$(this).index();
            $(".under div").eq(c).stop().animate({width:"100%"})
        })
        $(".gnb li").on("mouseleave",function(){
            $(".under div").stop().animate({width:"0%"})
        })

        let d =$(".page button").length;
        let e =0;
        $(".page button").on("click",function(){
              e=$(this).index();
              if(e == d-1){                
                  $(".page button").removeClass("on")
                  $(".page button").eq(e).addClass("on")
                  $(".fe1").stop().animate({left:-e*50+"%"},function(){                    
                      $(".fe1").stop().css({"left": "-150%"})
                  })                          
              }else{
                  $(".page button").removeClass("on")
                  $(".page button").eq(e).addClass("on")
                  $(".fe1").stop().animate({left:-e*50+"%"})
              }
        })

    }
    if(matchMedia("screen and (max-width:767px) and (min-width:301px)").matches){
        let baseline = -720;
        let position3 = $(".product").offset().top
        +baseline;   
        let position4 = $(".story").offset().top
        +baseline;   
        $(window).scroll(function(){
            let b=$(this).scrollTop();
            //alert(b)
            if(b>=position4){
                $(".story").addClass("on")
                $(".tit2").addClass("on")
                $(".gnb").addClass("on")
                $(".de1_1").addClass("on")
                $(".de2").delay(2200).animate({transform: "translateY(0px)",opacity:"1"},2000)
            }else if(b<=position4){

            }
        })
        setInterval(function(){
            $(".listmo1").animate({left:"-23%"},3000,function(){
                $(".listmo1 li").first().appendTo(".listmo1")
                $(".listmo1").css({left:"0%"})
            })               
        },1000)

        setInterval(function(){
            $(".listmo2").animate({left:"-23%"},3000,function(){
                $(".listmo2 li").first().appendTo(".listmo2")
                $(".listmo2").css({left:"0%"})
            })               
        },1000)


        let a=0;
        $("#menu").on("click",function(){
            if(a==0){
                $(".gnb3").slideDown();
                $(".gnb3 li").addClass("on")

                $("#menu .clo2").removeClass("off").animate({opacity:"1"});
                $("#menu div").fadeOut();
                $(this).animate({width:"35px",height:"35px"}).addClass("on")
                $("#menu .clo1").addClass("on").animate({opacity:"1"},function(){
                    $("#menu .clo2").delay(800).addClass("on")
                })                
                a=1;
            }else{
                $(".gnb3 li").removeClass("on",function(){
                    $(".gnb3").slideUp();
                })
                $("#menu .clo1").animate({opacity:"0"})
                $("#menu .clo2").removeClass("on")
                $("#menu .clo2").addClass("off").animate({opacity:"0"},function(){
                    $("#menu .clo1").removeClass("on")
                })
                $(this).animate({width:"100px"}).removeClass("on")
                $("#menu div").fadeIn();
                a=0;
            }
        })
        let c = 0;
        $(".gnb li").on("mouseenter",function(){
            c=$(this).index();
            $(".under div").eq(c).stop().animate({width:"100%"})
        })
        $(".gnb li").on("mouseleave",function(){
            $(".under div").stop().animate({width:"0%"})
        })

        let d =$(".page button").length;
        let e =0;
        $(".page button").on("click",function(){
              e=$(this).index();
              if(e == d-1){                
                  $(".page button").removeClass("on")
                  $(".page button").eq(e).addClass("on")
                  $(".fe1").stop().animate({left:-e*50+"%"},function(){                    
                      $(".fe1").stop().css({"left": "-150%"})
                  })                          
              }else{
                  $(".page button").removeClass("on")
                  $(".page button").eq(e).addClass("on")
                  $(".fe1").stop().animate({left:-e*50+"%"})
              }
        })
    }
    

    if(matchMedia("screen and (min-width:1340px)").matches){
        $("#visual .p1").on("click",function(){
            $("#visual video").trigger("play");
        })
        $("#visual .p2").on("click",function(){
            $("#visual video").trigger('pause');
        })
        let baseline = -720;
        let position1 = $(".banner").offset().top+baseline;
        let position2 = $(".product").offset();
        $(window).scroll(function(){
            let b=$(this).scrollTop();
            //alert(b)
            if(b>=position1){
                $(".cls-1").addClass("on")
            }else if(b>=position2){
                $(".cls-1").removeClass("on")
            }
        })
    
        setInterval(function(){
            $("header,.blackbg,.search,.tit,.visualicion,.myDiv").fadeIn();
            $(".search").animate({opacity:"1"});
        },10000)
    
        let c = 0;
        $(".gnb li").on("mouseenter",function(){
            c=$(this).index();
            $(".under div").eq(c).stop().animate({width:"100%"})
        })
        $(".gnb li").on("mouseleave",function(){
            $(".under div").stop().animate({width:"0%"})
        })
    
        $(".arrowleft1").on("mouseenter",function(){      
            $(".arrowleft").stop().animate({opacity:"0"})  
            $(".arrowleft1").addClass("on");
            
        })
        $(".arrowleft1").on("mouseleave",function(){   
            $(".arrowleft").stop().animate({opacity:"1"})       
            $(".arrowleft1").removeClass("on");        
        })
        $(".arrowright1").on("mouseenter",function(){      
            $(".arrowright").stop().animate({opacity:"0"})  
            $(".arrowright1").addClass("on");
            
        })
        $(".arrowright1").on("mouseleave",function(){   
            $(".arrowright").stop().animate({opacity:"1"})       
            $(".arrowright1").removeClass("on");        
        }) 
        
    
        $(".arrowright1").on("click", function() {
            e++;
            if(e==d){
                e=0
            }
            $(".page button").removeClass("on")
            $(".page button").eq(e).addClass("on")
            $(".fe1").stop().animate({"left": "-50%"}, function() {
                $(".fe1>li").first().appendTo(".fe1");
                $(this).stop().css({"left":"0%"});          
            });
          });
          
          $(".arrowleft1").on("click", function() {
            e--
            if(e<0){
            }
            $(".page button").removeClass("on")
            $(".page button").eq(e).addClass("on")
            $(".fe1>li").last().prependTo(".fe1");
            $(".fe1").stop().css({"left":"-50%"});
            $(".fe1").stop().animate({"left": "0%"})        
          });
    
          let d =$(".page button").length;
          let e =0;
          $(".page button").on("click",function(){
                e=$(this).index();
                if(e == d-1){                
                    $(".page button").removeClass("on")
                    $(".page button").eq(e).addClass("on")
                    $(".fe1").stop().animate({left:-e*50+"%"},function(){                    
                        $(".fe1").stop().css({"left": "-150%"})
                    })                          
                }else{
                    $(".page button").removeClass("on")
                    $(".page button").eq(e).addClass("on")
                    $(".fe1").stop().animate({left:-e*50+"%"})
                }
          })
    
          
          let position3 = $(".product").offset().top
          +baseline;   
          let position4 = $(".story").offset().top
          +baseline; 
          let position5 =$(".fe1").offset().top+baseline  
          $(window).scroll(function(){
              let b=$(this).scrollTop();
              //alert(b)
              if(b>=position3 && b<=position4){
                  $(".list1").addClass("on")
                  $(".but1").addClass("on")
                  $(".list2").addClass("on")              
              }else if(b<=position4){
                $(".list1").removeClass("on")
                $(".but1").removeClass("on")
                $(".list2").removeClass("on")
              }else if(b>=position4){
                $(".story").animate({left:"0",opacity:"1"},"linear",function(){
                    $(".story .tit2").animate({top:"0px",opacity:"1"},1000)
                    $(".story .detail").delay(400).animate({top:"0px",opacity:"1"},2000)
                })
              }
    
              if(b>=position5){
                let good1 = 0; 
                let good2 = 0;
                let good3 = 0;
                let good4 =0;         
                start1 = setInterval(function(){
                    good1++;
                    if(good1<=53){
                    $(".good1").text(good1)
                    }else{
                        clearInterval(start1);
                    }
                },50)
                start2 =setInterval(function(){
                    good2++;
                    if(good2<=58){
                    $(".good2").text(good2)
                    }else{
                        clearInterval(start2);
                    }
                },50)
                start3 =setInterval(function(){
                    good3++;
                    if(good3<=69){
                    $(".good3").text(good3)
                    }else{
                        clearInterval(start3);
                    }
                },50)
                start4 =setInterval(function(){
                    good4++;
                    if(good4<=41){
                    $(".good4").text(good4)
                    }else{
                        clearInterval(start4);
                    }
                },50)
    
              }
    
              if(b<500){
                $("#scrolltop").fadeOut();
              }else{
                $("#scrolltop").fadeIn();
              }
    
          })
    
          $("#scrolltop").on("click",function(){
            $('html, body').animate({scrollTop:"0"},500);
          })

    }

    if(matchMedia("screen and (max-width:300px)").matches){
        let baseline = -720;
        let position3 = $(".product").offset().top
        +baseline;   
        let position4 = $(".story").offset().top
        +baseline;   
        $(window).scroll(function(){
            let b=$(this).scrollTop();
            //alert(b)
            if(b>=position4){
                $(".story").addClass("on")
                $(".tit2").addClass("on")
                $(".gnb").addClass("on")
                $(".de1_1").addClass("on")
                $(".de2").delay(2200).animate({transform: "translateY(0px)",opacity:"1"},2000)
            }else if(b<=position4){

            }
        })
        setInterval(function(){
            $(".listmo1").animate({left:"-23%"},3000,function(){
                $(".listmo1 li").first().appendTo(".listmo1")
                $(".listmo1").css({left:"0%"})
            })               
        },1000)

        setInterval(function(){
            $(".listmo2").animate({left:"-23%"},3000,function(){
                $(".listmo2 li").first().appendTo(".listmo2")
                $(".listmo2").css({left:"0%"})
            })               
        },1000)


        let a=0;
        $("#menu").on("click",function(){
            if(a==0){
                $(".gnb3").slideDown();
                $(".gnb3 li").addClass("on")

                $("#menu .clo2").removeClass("off").animate({opacity:"1"});
                $("#menu div").fadeOut();
                $(this).animate({width:"35px",height:"35px"}).addClass("on")
                $("#menu .clo1").addClass("on").animate({opacity:"1"},function(){
                    $("#menu .clo2").delay(800).addClass("on")
                })                
                a=1;
            }else{
                $(".gnb3 li").removeClass("on",function(){
                    $(".gnb3").slideUp();
                })
                $("#menu .clo1").animate({opacity:"0"})
                $("#menu .clo2").removeClass("on")
                $("#menu .clo2").addClass("off").animate({opacity:"0"},function(){
                    $("#menu .clo1").removeClass("on")
                })
                $(this).animate({width:"30%"}).removeClass("on")
                $("#menu div").fadeIn();
                a=0;
            }
        })
        let c = 0;
        $(".gnb li").on("mouseenter",function(){
            c=$(this).index();
            $(".under div").eq(c).stop().animate({width:"100%"})
        })
        $(".gnb li").on("mouseleave",function(){
            $(".under div").stop().animate({width:"0%"})
        })

        let d =$(".page button").length;
        let e =0;
        $(".page button").on("click",function(){
              e=$(this).index();
              if(e == d-1){                
                  $(".page button").removeClass("on")
                  $(".page button").eq(e).addClass("on")
                  $(".fe1").stop().animate({left:-e*50+"%"},function(){                    
                      $(".fe1").stop().css({"left": "-150%"})
                  })                          
              }else{
                  $(".page button").removeClass("on")
                  $(".page button").eq(e).addClass("on")
                  $(".fe1").stop().animate({left:-e*50+"%"})
              }
        })

    }
    
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


