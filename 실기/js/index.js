$(document).ready(function(){

    $(".tabMenu>dt").click(function(){
        $(".tabMenu>dt").removeClass("on")
        $(this).addClass("on")

        $(".tabMenu>dd").removeClass("on")
        $(this).next().addClass("on")

    })

})