$(function(){

    // new Scrooth({
    //     strength : 20
    // })

    let targetTop = $(".fixedBox").offset().top
    let elevatorHeight = $(".elevator").height()
    
    let pathLength = $(".curvedLine").get(0).getTotalLength()
    $(".curvedLine").css("stroke-dasharray",pathLength)
    $(".curvedLine").css("stroke-dashoffset",pathLength)


    $(window).scroll(function(){
        let winTop = $(window).scrollTop()
        let distance = winTop - targetTop
        let percent = distance / (5000-elevatorHeight) *100

        if(distance >=0 && distance <5000-elevatorHeight){
            console.log(percent)
            $(".curvedLine").css("stroke-dashoffset",pathLength-(pathLength*percent/100))
            $("#txtPath").attr("startOffset",pathLength*percent/100)
        }

        
        // console.log(pathLength)


    })
})