$(document).ready(function(){

    //특정 지역에서 부드럽게 이동이 되지 않는 것을 해결하기 위하여 만든 state 
    let state = false
    let state2 = false

    $(window).scroll(function(){
        let winst = $(window).scrollTop() //스크롤바가 위에서 얼만큼 내려왔는지 계산
        let winHeight = $(window).height()*1 // 브라우저화면의 높이를 계산
        // console.log(winst)
        $(".videopart h1, .Right>ul").each(function(){
            if(winst+winHeight>$(this).offset().top){ 
                $(this).addClass("on")

            }else{
                $(this).removeClass("on")
            }
        })

        //banner영역 스크롤 조절 및 트레인 
        let fixedTop = Math.floor($(".bannerstation").offset().top)
        let distance = winst - fixedTop
        let movingAreaHeight = $(".movingArea").height()
        // console.log(distance)
        if (distance < 0) {
          state = true
          $(".movingArea").css("position", "absolute")
          $(".movingArea").css("top", "0")
          $(".movingArea").css("left", "0")
          
        }

        if (distance >= 0 && distance <= 5000 - movingAreaHeight) {
            state = false
          $(".movingArea").css("position", "fixed")
          $(".movingArea").css("top", "0")
          $(".movingArea").css("left", "0")

          let percent2 = (distance / (5000 - movingAreaHeight) * 75) // 0~87.5 까지의 수
          
          let percent3 = percent2 / 75 * 100
          let idx = Math.floor(percent3/25)
          $(".bannavi ul li").removeClass("on")
          $(".bannavi ul li").eq(idx).addClass("on")
        
          $(".bannertrain").css("transform","translateX(-"+percent2+"%)") 
        //   $(".bannavi li").removeClass("on")
        }
    
        if (distance > 5000 - movingAreaHeight) {
          state = true
          $(".movingArea").css("position", "absolute")
          $(".movingArea").css("top", (5000 - movingAreaHeight) + "px")
          $(".movingArea").css("left", "0")
        }



        //contact영역 자연스럽게 스크롤 조절
        let contactTop = Math.floor($(".contact").offset().top)
        let distance2 = winst - contactTop
        // console.log(distance2)
        // if (distance2 < 8852) {
        //     state2= true
        // }
       





        


        //mydesign 영역 네비게이션 생성 
        let mydesignTop = Math.floor($(".mydesign").offset().top)
        let distance3 = winst - mydesignTop

        if(distance3 < 0){
            $(".naviflower").removeClass("on")
        }
        
        if(distance3 >= 0){
            $(".naviflower").addClass("on")          
            // $("#flowerpath path").each(function(){
            //     let path = $(this)
            //     let idx = path.index()
            //     let secondTerm = 0.2
            //     let delay = idx*secondTerm

            //     let pathLength = $(this).get(0).getTotalLength()
            //     $(this).css("stroke-dasharray",pathLength)
            //     $(this).css("stroke-dashoffset",pathLength)

            //     setTimeout(function(){
            //         path.css("transition",`stroke-dashoffset 1s ease ${delay}s, fill 1s ease ${delay+1}s`)
            //         // path.css("transition","all 1s ease "+delay+"s")
            //     },100)
            // })   
            
            // setTimeout(function(){
            //     $("#flowerpath").addClass("on")
            // },100)
        }

        // console.log(distance3)
    });



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
            if(state == false){
                // true가되면 -> 한바닥씩 이동
                // false가되면 -> 스크롤로 굴러가
                return
            }
        }


        if($(this).attr("class") =="webdesign"){
            if(state2 == true){
                return
            }
                
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
    
    

    //하나 하나 클릭해서 네비게이션
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





    $(".btnpopup").click(function(e){
        e.preventDefault();
        $(".bookpopdetail").addClass("on")
        $(".blackdiv").addClass("on")
        
    })

    $(".popclose").click(function(e){
        e.preventDefault();
        $(".bookpopdetail").removeClass("on")
        $(".modal").removeClass("on")
        $(".blackdiv").removeClass("on")
    });






    $(".reportup").click(function(e){
        e.preventDefault();
        $(".benport").addClass("on")
        state2 = true
    })

    $(".portclose").click(function(e){
        e.preventDefault();
        $(".benport").removeClass("on")
        state2 = false
    });

    // $(".report").scroll(function(){
    //     return true
    // })





     
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
         $(".popupmove li").removeClass("on")
         $(".popupmove li").eq(count).addClass("on")
        //  moveSlider(count)       
    })

    $(".popprev").click(function(e){
        // alert("test")
        e.preventDefault()
        count--; 
        // -1, -2... //+주면 오른쪽으로 이동 왼쪽으로 이동 클릭시 오른쪽 클릭 하며 플러스 된 값에서 -1씩 감소 됨 그래서 prev버튼은 -가 붙을 수 없음 
        if(count<0){count=7} 
        $(".poptrain").css("transform","translateX("+(-(100/8)*count)+"%)") 
        $(".popupmove li").removeClass("on")
        $(".popupmove li").eq(count).addClass("on")
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



    
})