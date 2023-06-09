$(document).ready(function(){
    // $(".list>li").addClass("mltr")
    $(".list>li").each(function(){
        let result = Math.round(Math.random())
        if(result){
            $(this).addClass("mltr")
        }else{
            $(this).addClass("mrtl")
        }
        
    })

    $(window).scroll(function(){
        let winst = $(window).scrollTop() //스크롤바가 위에서 얼만큼 내려왔는지 계산
        let winHeight = $(window).height()*0.65 //화면의 65% // 브라우저화면의 높이를 계산
        console.log(winHeight)
        $(".mrtl,.mltr").each(function(){
            if(winst+winHeight>$(this).offset().top){ //500을 더한 이유 : 효과가 적용되는 것이 top에 걸렸을 때 나타나기 때문에 시간차를 주기 위해 500픽셀만큼 내려오게 한 것(화면하단에 걸리게)
                $(this).addClass("on")

            }else{
                $(this).removeClass("on")
            }
        })
    
    })
    
})