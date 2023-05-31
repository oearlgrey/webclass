$(document).ready(function(){
    $(".tabmenu>dt").click(function(){
        //1.dt태그들이 on클래스가 지워져야함
        //2.내가 클릭한 dt 태그에만 on 클래스가 추가
        $(".tabmenu>dt").removeClass("on")
        $(this).addClass("on")
    })





})