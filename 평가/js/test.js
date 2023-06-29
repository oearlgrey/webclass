$(document).ready(function(){

    let count = 0
    setInterval(function(){
        count++;
        if(count>3){count=0}
         $(".train").css("transform","translateX("+(-800*count)+"px)")
    },2500)

    $(".next").click(function(){
        count++;
        if(count>3){count=0}
         $(".train").css("transform","translateX("+(-800*count)+"px)")
    })

    $(".prev").click(function(){
        count--;
        if(count<0){count=3}
         $(".train").css("transform","translateX("+(-800*count)+"px)")
    })
})