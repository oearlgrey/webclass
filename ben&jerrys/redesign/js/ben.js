$(document).ready(function(){
    $(".nationSelect").click(function(){
        if($(".nationList").hasClass("on")==false){
            //메뉴가 닫혀있는 상태 -> 여는 기능
            $(".nationList").addClass("on")

        }else{
            //메뉴가 열려있는 상태 -> 메뉴를 닫는 기능
            $(".nationList").removeClass("on")
         
        }
    });
    // $(".nationList").click(function(){
    //     return false;
    // })
    $(".com1st>dl>dt").click(function(){
        if($(this).next().hasClass("ddon")==false){
            $(".com1st>dl>dd").removeClass("ddon")
            $(this).next().addClass("ddon")
        }else{
            $(this).next().removeClass("ddon")
        }
            
    })


    //slide시작
    $(window).scroll(function(){
        let winst = $(window).scrollTop() //스크롤바가 위에서 얼만큼 내려왔는지 계산
        let winHeight = $(window).height()*0.65 //화면의 65% // 브라우저화면의 높이를 계산
        // console.log(winst)
        $(".com1st,.com2nd,.com3rd,.fbanner1,.iceproli1,.iceproli2,.iceproli3,.iceproli4,.stdecon,.firbh1,.bannerh1").each(function(){
            if(winst+winHeight>$(this).offset().top){ //500을 더한 이유 : 효과가 적용되는 것이 top에 걸렸을 때 나타나기 때문에 시간차를 주기 위해 500픽셀만큼 내려오게 한 것(화면하단에 걸리게)
                $(this).addClass("on")

            }else{
                $(this).removeClass("on")
            }
        })
    
    })



    $(window).scroll(function(){
        let winst = $(window).scrollTop()
      
        let fbanner2Top = $(".fbanner2").offset().top
        
        
        console.log(winst - fbanner2Top)

      
        if(winst-fbanner2Top<0){
            $(".spiral").css("position","absolute")
            $(".spiral").css("top","0")
        }

        //footer높이 뺀값 4100


        if(winst - fbanner2Top >=0 && winst-fbanner2Top < 4100){//4180
            // console.log(winst - fbanner2Top)
            $(".spiral").css("position","fixed")
            $(".spiral").css("top","0")
            $("#textP").attr("startOffset",winst - fbanner2Top)
        }   

        if(winst-fbanner2Top>=4100){
            $(".spiral").css("position","absolute")
            $(".spiral").css("top","4100px")
        }
    })

    $(".topbtn").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });
})