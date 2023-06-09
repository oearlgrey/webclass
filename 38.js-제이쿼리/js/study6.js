$(document).ready(function(){

    $(window).scroll(function(){
        let winst = $(window).scrollTop()
        let con2top = $(".con2").offset().top

        if(winst>=con2top){
            $(".con2").addClass("on")            
        }else{
            $(".con2").removeClass("on")
        }
    })
    //$(".wrap>div").click(function(){})
    // ㄴ> = $(".wrap>div").on("click",function(){})

    //파이어폭스 브라우저는 wheel 용어 대신 DOMMouseScroll라 표현
    $(".wrap>div").on("wheel DOMMouseScroll",function(event){
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
    




})