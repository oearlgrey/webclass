$(document).ready(function(){
    $(".container>div").on("wheel DOMMouseScroll",function(event){
        // console.log(event)
        let E = event.originalEvent
        let delta = 0;

        //if 파이어폭스 라면
        if(E.detail){
            delta = E.detail * -40 //파이어폭스에서 휠 내렸을 때 3이 나왔기 때문에 -120이 나왔던 크롬과 값을 맞추기 위해 곱해준것
        }else{
            delta = E.wheelDelta

        }

       
        if(delta<0){
            if($(this).next().length!=0){
                let posTop = $(this).next().offset().top
                $("html,body").stop().animate({scrollTop:posTop},1000)
            }
            //마우스 휠을 내렸을 때

        }else{
            if($(this).prev().length!=0){
                let posTop = $(this).prev().offset().top
                $("html,body").stop().animate({scrollTop:posTop},1000)
            }
            //마우스 휠을 올렸을 때
        }
        return false;
    })
    

    $(".navi1").click(function(){
        // alert("test")
        let abouttop = $(".aboutme").offset().top
        $("html,body").animate({scrollTop:abouttop},1000)
	    // $('.aboutme').animate({scrollTop : offset.top}, 400);
    })
    
    $(".navibg>a").click(function(e){
        e.preventDefault(); //a태그의 기본 기능 제거
        let targetHref = $(this).attr("href")
        let posTop = $(targetHref).offset().top;
        $("html,body").stop().animate({scrollTop:posTop},800)
      })



    $(".popupmove li").click(function(){
        $(this).removeClass("on")
        $(this).addClass("on")
    })


    $(".btnpopup").click(function(){
        $(".bookpopdetail").addClass("on")
    })

    $(".popclose").click(function(){
        $(".bookpopdetail").removeClass("on")
    })




    $(window).scroll(function(){
        let winst = $(window).scrollTop()
      
        let fbanner2Top = $(".popstation").offset().top
        
        
        // console.log(winst - fbanner2Top)

      
        // if(winst-fbanner2Top<0){
        //     $(".spiral").css("position","absolute")
        //     $(".spiral").css("top","0")
        // }

        // //footer높이 뺀값 4100


        // if(winst - fbanner2Top >=0 && winst-fbanner2Top < 4100){//4180
        //     // console.log(winst - fbanner2Top)
        //     $(".spiral").css("position","fixed")
        //     $(".spiral").css("top","0")
        //     $("#textP").attr("startOffset",winst - fbanner2Top)
        // }   

        // if(winst-fbanner2Top>=4100){
        //     $(".spiral").css("position","absolute")
        //     $(".spiral").css("top","4100px")
        // }
    })
})