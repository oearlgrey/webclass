$(document).ready(function(){

    $("dt").click(function(){
        $("dt").removeClass("on")
        $(this).addClass("on")
   
        $("dd").removeClass("on")
        $(this).next().addClass("on")
    })

})