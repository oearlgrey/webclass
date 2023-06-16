$(document).ready(function(){

    let count = 0;

    setInterval(function(){
        count++;
        if(count>2){count=0}
        $(".train>li").removeClass("on")
        $(".train>li").eq(count).addClass("on")
        // $(".train>li:nth-of-type("+(count+1)+")").addClass("on")
    },2500)

    $(".tabmenu>dt").click(function(){
        $(".tabmenu>dt").removeClass("on")
        $(this).addClass("on")
    
        $(".tabmenu>dd").removeClass("on")
        $(this).next().addClass("on")
    })

    $(".btnpopup").click(function(){
        $(".popup").addClass("on")
    })

    $(".popclose").click(function(){
        $(".popup").removeClass("on")
    })
})