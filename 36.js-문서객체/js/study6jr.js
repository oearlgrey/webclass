$(document).ready(function(){

    //버튼을 클릭했을 때 만약에 메뉴가 열려있는 상태라면? -> 메뉴를 닫는 기능
    //버튼을 클릭했을 때 만약에 메뉴가 닫혀있는 상태라면? -> 매뉴를 여는 기능
    
    let menuState = false;
    //닫혀있는 의미

    $(".btnmenu").click(function(){

        if(menuState == false){
            //메뉴가 현재 닫혀 있는 상태 -> 여는 기능
            $(".btnmenu").addClass("close")
            $("nav").addClass("show")
            menuState = true
        }else{
            // 메뉴가 현재 열려 있는 상태 -> 닫는 기능
            $(".btnmenu").removeClass("close")
            $("nav").removeClass("show")
            menuState = false
        }
    })


})