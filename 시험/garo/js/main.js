// $(document).ready(function(){
//     //가로형
//     let count = 0;

//     setInterval(function(){
//         count++;
//         if(count>2){count=0}
//         $(".train").css("transform","translateX("+(-1200*count)+"px)")
//                                 //("transform","translateX("+(-33.333*count)+"%)")  
//     },2500)

//     //세로형
//     // setInterval(function(){
//     //     count++;
//     //     if(count>2){count=0}
//     //     $(".train").css("transform","translateY("+(-33.333*count)+"%)")  
//     // },2500)


//     $(".tabmenu>dt").click(function(){
//         $(".tabmenu>dt").removeClass("on")
//         $(this).addClass("on")
    
//         $(".tabmenu>dd").removeClass("on")
//         $(this).next().addClass("on")
//     })

//     $(".btnpopup").click(function(){
//         $(".popup").addClass("on")
//     })

//     $(".popclose").click(function(){
//         $(".popup").removeClass("on")
//     })
// })

$(document).ready(function(){

    let count = 0 ;
    
    setInterval(function(){
        count++;
        if(count>2){count=0}
         $(".train").css("transform","translateX("+(-1200*count)+"px)")
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
