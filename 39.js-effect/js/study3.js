$(document).ready(function(){
    //윈도우스크롤이 400 이상으로 내려가면 header태그의 스타일이 작은 스타일이 되고,
    //그렇지 않다면 기본 스타일이 적용될 수 있도록
    $(window).scroll(function(){
        //스크롤바가 움직일 때마다 실행되는 소스코드
       let winTop =  $(window).scrollTop() //스크롤바가 위에서 얼만큼 내려와있는지를 계산
       if(winTop>=400){
        $("header").addClass("sma")
       }else{
        $("header").removeClass("sma")
       }
    })
    // btnTop을 클릭하면 스크롤바가 가장 최상단으로 부드럽게 이동될 수 있도록
    $(".btntop").click(function(){

        // $("html,body").stop().animate({scrollTop:0},1000)
        // moveScroll(0,1000)

        //함수를 사용해서 적용한 것
        moveScroll({
            top:0,
            speed:2000
        })
    })

    //각각의 메뉴리스트를 클릭했을 때 해당되는 영역으로 부드럽게 스크롤 이동될 수 있도록
    $(".gnb>li>a").click(function(e){
        //e 이벤트 약자
        e.preventDefault() //a태그가 갖고있는 기본기능을 제어
        let target = $(this).attr("href")
       //클릭한 a태그의 href속성에 저장된 속성값이 리턴되어target 변수에 저장된다. 
       //(문자데이터형태로 "#s1" "#s2" ...)
        let target_top = $(target).offset().top
        
        // moveScroll(target_top,1000)
        // $("html,body").stop().animate({scrollTop:target_top},1000)
        
        //함수를 사용해서 적용한 것
        moveScroll({top:target_top,speed:1000})
    })

    // function moveScroll(top,speed){
    //     $("html,body").stop().animate({scrollTop:top},speed)    
    // }


    //함수 만든 것
    function moveScroll(option){
        $("html,body").stop().animate({scrollTop:option.top},option.speed)    
     }
    
})