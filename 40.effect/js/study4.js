$(document).ready(function(){
    
    let result = "";
    for(let i=1 ; i<=20 ; i++){
        result+=`<li>
        <img class="small" src="./img/s${i}.jpg" alt="갤러리${i}이미지">
        <img class="big" src="./img/pic${i}.jpg" alt="갤러리${i}이미지">
        <h2 class="title">art work ${i}</h2>
        <p>Artwork description comes here.<br>2023.06.20</p>
        <span class="btnClose">close</span>
        </li>`
        }
    // document.querySelector(".train").innerHTML = result
    $(".train").html(result)

    $(".stationMenu>li").click(function(){
        let idx = $(this).index() //클릭한 리스트의 순번을 리턴함
        count = idx*5 //정해진 순번에 5를 곱한 값을 전역변수 count에 저장함으로써 휠을 내렸을 때 이동되는 기능이 정상적으로 작도오디게끔 해주는 코드

        $(".train").css("transform","translateX("+(-1000*idx)+"px)")        
        
        //0 -> 0px
        //06을 클릭했을 때는 -1000px이동
        // 11 -> -2000
        //16- 3-3000
    })


    let count=0;
    $(".station").on("wheel DOMMouseScroll",function(event){
        // console.log(event)
        let E = event.originalEvent
        let delta = 0;

        //if 파이어폭스 라면
        if(E.detail){
            delta = E.detail * -40 //파이어폭스에서 휠 내렸을 때 3이 나왔기 때문에 -120이 나왔던 크롬과 값을 맞추기 위해 곱해준것
        }else{
            delta = E.wheelDelta

        }

        
        if(delta<0){
            count++;
            if(count>15){count=15}
            $(".train").css("transform","translateX("+(-200*count)+"px)") 
            //마우스 휠을 내렸을 때

        }else{
            count--;
            if(count<0){count=0}
            $(".train").css("transform","translateX("+(-200*count)+"px)") 
            //마우스 휠을 올렸을 때
        }
        return false;

    })

    //클릭한 리스트(기차칸)의 활성화 스타일 기능
    $(".train>li").click(function(){
        $(".train>li").removeClass("on")
        $(this).addClass("on")
        let idx = $(this).index()
        count = idx
        
        $(".train").css("transform","translateX("+(-200*idx)+"px)") 

    })

    //닫는버튼 기능
    $(".btnClose").click(function(){
        $(".train>li").removeClass("on")
        return false; //상위태그로 클릭이벤트가 전달되지 않게 (버블링되지 않게) 설정
    })

})
