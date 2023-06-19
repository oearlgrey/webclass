$(document).ready(function(){

    // let animationTerm = 0.5
    // let animationDuration = 0.1
    // $(".floatingTxt h1 b").length //선택한 태그들은 배열형태로 리턴된다 그래서 배열의 원소의 개수를 .length를 통해 구해볼 수 있다.
    // // alert($(".floatingTxt h1 b").length)
    // for(let i=0; i<$(".floatingTxt h1 b").length ; i++){
    //     $(".floatingTxt h1 b:nth-of-type("+(i+1)+")").css("animation","introAni "+animationDuration+"s ease "+(animationTerm*i)+"s forwards")
    //     // console.log("TT")
    // }


    function textAni(cssSelector, option) {
        let animationTerm = option.aniDelay
        let animationDuration = option.aniSpeed
        $(cssSelector).css("font-size", "0")
        $(cssSelector + " b").css("opacity","0").css("line-height","1").css("display","inline-block").css("font-size", option.textsize+"px")


        for (let i = 0; i < $(cssSelector + " b").length; i++) {
          $(cssSelector + " b:nth-of-type("+(i + 1)+")").css("animation", "introAni " + animationDuration + "s ease " + (animationTerm * i) + "s forwards")
        }
      }

      textAni(".floatingTxt", {
        aniDelay: 0.2,
        aniSpeed: 5,
        textsize: 100
      })

    

    textAni(".txtbox",{
        aniDelay:0.2,
        aniSpeed:0.5,
        textsize:90
    })

})
