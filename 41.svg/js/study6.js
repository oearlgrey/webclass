$(document).ready(function(){

    let pathLength = $("#progress path").get(0).getTotalLength()
    $("#progress path").css("stroke-dasharray",pathLength)
    $("#progress path").css("stroke-dashoffset",pathLength)

    $(window).scroll(function(){
        let winst = $(window).scrollTop()
        let fixedTop = $(".fixedFrame").offset().top
        let distance = winst-fixedTop
        let movingAreaheight = $(".movingArea").height()
    

        if(distance<0){
            $(".movingArea").css("position","absolute")
            $(".movingArea").css("left","0")
            $(".movingArea").css("top","0")
        }

        if(distance >=0 && distance <= 8000 - movingAreaheight){
            $(".movingArea").css("position","fixed")
            $(".movingArea").css("left","0")
            $(".movingArea").css("top","0")
            let percent = (distance/(8000 - movingAreaheight)*100)
            $("#progress path").css("stroke-dashoffset",pathLength-(pathLength*percent/100))
            $(".per").text(Math.round(percent)+"%")
        }
        
        if(distance > 8000 - movingAreaheight){
            $(".movingArea").css("position","absolute")
            $(".movingArea").css("top",(8000 - movingAreaheight)+"px")
        }
    })
})
//winsTop-fixedTop >=0 && winsTop-fixedTop < 7200 ex 7200보다 작을 때까지 스크롤이벤트 적용