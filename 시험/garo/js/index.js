$(document).ready(function(){
    let count=0;

    let timer = setInterval(function(){
        count++; //1, 2 ...
        if(count>2){count=0} 
        moveSlider(count)    
     },2000)

     
     function moveSlider(idx){
        $(".train").css("transform","translateX("+(-1200*idx)+"px)")
    }

    $(".notice>dl>dt").click(function(){
        if($(this).next().hasClass("on")==false){
            $(".com1st>dl>dd").removeClass("on")
            $(this).next().addClass("on")
        }else{
            $(this).next().removeClass("on")
        }
            
    })

})