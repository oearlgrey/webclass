$(document).ready(function(){

    //부드럽게 이동
    $(".container>div").on("wheel DOMMouseScroll",function(event){
        // console.log(event)
        let E = event.originalEvent
        let delta = 0;

        //if 파이어폭스 라면
        if(E.detail){
            delta = E.detail * -40 //파이어폭스에서 휠 내렸을 때 3이 나왔기 때문에 -120이 나왔던 크롬과 값을 맞추기 위해 곱해준것
        }else{
            delta = E.wheelDelta

        }

        if($(this).attr("class") =="bannerstation"){
            return
        }

       
        if(delta<0){
            if($(this).next().length!=0){
                let posTop = $(this).next().offset().top
                $("html,body").stop().animate({scrollTop:posTop},1000)
            }
            //마우스 휠을 내렸을 때

        }else{
            if($(this).prev().length!=0){
                let posTop = $(this).prev().offset().top
                $("html,body").stop().animate({scrollTop:posTop},1000)
            }
            //마우스 휠을 올렸을 때
        }
        return false;
    })
    

    // $(".navi1").click(function(){
    //     // alert("test")
    //     let abouttop = $(".aboutme").offset().top
    //     $("html,body").animate({scrollTop:abouttop},1000)
	//     // $('.aboutme').animate({scrollTop : offset.top}, 400);
    // })
    
    //navigation기능
    $(".navibg>a").click(function(e){
        e.preventDefault(); //a태그의 기본 기능 제거
        let targetHref = $(this).attr("href")
        let posTop = $(targetHref).offset().top;
        $("html,body").stop().animate({scrollTop:posTop},800)
      })



    $(".btnpopup").click(function(){
        $(".bookpopdetail").addClass("on")
        $(".modal").addClass("on")
    })

    $(".popclose").click(function(){
        $(".bookpopdetail").removeClass("on")
        $(".modal").removeClass("on")
    });


     
    $(".bannavi li").click(function(){
    
        $(".bannavi li").removeClass("on")
        $(this).addClass("on")
        let idx = $(this).index() //클릭한 리스트의 순번을 리턴함
        // count = idx*5 //정해진 순번에 5를 곱한 값을 전역변수 count에 저장함으로써 휠을 내렸을 때 이동되는 기능이 정상적으로 작도오디게끔 해주는 코드
        $(".bannertrain").css("transform","translateX("+(-(100/4)*idx)+"%)")        
    });
    
    

    $(".popupmove li").click(function(){
    
        $(".popupmove li").removeClass("on")
        $(this).addClass("on")
        let idx = $(this).index() //클릭한 리스트의 순번을 리턴함
        // count = idx*5 //정해진 순번에 5를 곱한 값을 전역변수 count에 저장함으로써 휠을 내렸을 때 이동되는 기능이 정상적으로 작도오디게끔 해주는 코드
        $(".poptrain").css("transform","translateX("+(-(100/8)*idx)+"%)")        
    });
    






    let count = 0;
    $(".popnext").click(function(e){
        // alert("test")
        e.preventDefault()
        count++; //1, 2 ...
        //기차가 왼쪽으로 500픽셀
        if(count>7){count=0} //넣으면 마지막에서 멈춤
         $(".poptrain").css("transform","translateX("+(-(100/8)*count)+"%)")
        //  moveSlider(count)       
    })

    $(".popprev").click(function(e){
        // alert("test")
        e.preventDefault()
        count--; 
        // -1, -2... //+주면 오른쪽으로 이동 왼쪽으로 이동 클릭시 오른쪽 클릭 하며 플러스 된 값에서 -1씩 감소 됨 그래서 prev버튼은 -가 붙을 수 없음 
        if(count<0){count=7} 
        $(".poptrain").css("transform","translateX("+(-(100/8)*count)+"%)") 
        //-20 *-1 =20%
        // moveSlider(count)
    })
    // function moveSlider(idx){
    //     $(".poptrain").css("transform","translateX("+(-100*idx)+"%)")
    // }


    $(".bnext").click(function(e){
        // alert("test")
        e.preventDefault()
        count++; //1, 2 ...
        //기차가 왼쪽으로 500픽셀
        if(count>3){count=0} //넣으면 마지막에서 멈춤
         $(".bannertrain").css("transform","translateX("+(-(100/4)*count)+"%)")
        //  moveSlider(count)       
    })

    $(".bprev").click(function(e){
        // alert("test")
        e.preventDefault()
        count--; 
        // -1, -2... //+주면 오른쪽으로 이동 왼쪽으로 이동 클릭시 오른쪽 클릭 하며 플러스 된 값에서 -1씩 감소 됨 그래서 prev버튼은 -가 붙을 수 없음 
        if(count<0){count=3} 
        $(".bannertrain").css("transform","translateX("+(-(100/4)*count)+"%)") 
        //-20 *-1 =20%
        // moveSlider(count)
    })
    // function moveSlider(idx){
    //     $(".poptrain").css("transform","translateX("+(-100*idx)+"%)")
    // }




    $(window).scroll(function () {
        let winTop = $(window).scrollTop()
        let fixedTop = $(".fixedFrame").offset().top
        let distance = winTop - fixedTop
        let movingAreaHeight = $(".bannerstation").height()
         
        if (distance < 0) {
          $(".bannerstation").css("position", "absolute")
          $(".bannerstation").css("top", "0")
          $(".bannerstation").css("left", "0")
        }
    
        if (distance >= 0 && distance <= 8000 - movingAreaHeight) {
          $(".bannerstation").css("position", "fixed")
          $(".bannerstation").css("top", "0")
          $(".bannerstation").css("left", "0")
          // console.log(distance)
  
          let percent2 = (distance / (8000 - movingAreaHeight) * 87.5) // 0~87.5 까지의 수
          $(".bannertrain").css("transform","translateX("+(-(100/4)*count)+"%)")  
        }
    
        if (distance > 8000 - movingAreaHeight) {
          $(".bannerstation").css("position", "absolute")
          $(".bannerstation").css("top", (8000 - movingAreaHeight) + "px")
          $(".bannerstation").css("left", "0")
        }
      })
})