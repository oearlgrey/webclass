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

})