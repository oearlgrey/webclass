$(document).ready(function(){

        let count = 0;
        let perView;
        // let perView = 1;
        //train클래스 너비를 변경 = > train클래스의 너비를 불러와서 perView로 나눈 후 결과를 다시 적용
       
        // let stationWidth = $(".station").width()
        let stationWidth;
        let trainWidth;
        // let trainWidth = stationWidth*5 / perView
        // $(".train").width(trainWidth)   
     

        if($(window).width()>=1024){
            perView = 2.5
            stationWidth = $(".station").width()
            trainWidth = stationWidth*5 / perView
            $(".train").width(trainWidth)   
        }else if($(window).width()>=768){
            perView =2
            stationWidth = $(".station").width()
            trainWidth = stationWidth*5 / perView
            $(".train").width(trainWidth)   
        }else{
            perView =1
            stationWidth = $(".station").width()
            trainWidth = stationWidth*5 / perView
            $(".train").width(trainWidth)   
        }


       $(window).resize(function(){
        let winWidth = $(window).width()
    
        if(winWidth>=1024){
            console.log("pc사이즈 입니다.")
            perView =2.5
            stationWidth = $(".station").width()
            trainWidth = stationWidth*5 / perView
            $(".train").width(trainWidth)   
          
        }else if(winWidth>=768){
            console.log("태블릿사이즈 입니다.")
            perView =2
            stationWidth = $(".station").width()
            trainWidth = stationWidth*5 / perView
            $(".train").width(trainWidth)   
        }
        else{
            console.log("모바일사이즈 입니다.")
            perView =1
            stationWidth = $(".station").width()
            trainWidth = stationWidth*5 / perView
            $(".train").width(trainWidth)   
        }
        
       })



    $(".btnNext").click(function(e){
        count++; //1, 2 ...
        e.preventDefault()
        //기차가 왼쪽으로 500픽셀
        if(count>4){count=0} //넣으면 마지막에서 멈춤
        //  $(".train").css("transform","translateX("+(-20*count)+"%)")
         moveSlider(count)       
    })

    $(".btnPrev").click(function(e){
        e.preventDefault()
        count--; 
        // -1, -2... //+주면 오른쪽으로 이동 왼쪽으로 이동 클릭시 오른쪽 클릭 하며 플러스 된 값에서 -1씩 감소 됨 그래서 prev버튼은 -가 붙을 수 없음 
        if(count<0){count=4} 
        // $(".train").css("transform","translateX("+(-20*count)+"%)") 
        //-20 *-1 =20%
        moveSlider(count)
    })

    //자동슬라이드기능
     let timer = setInterval(function(){
        count++; //1, 2 ...
        if(count>4){count=0} 
        moveSlider(count)    
     },2000)

     //마우스오버아웃
     $(".station").mouseover(function(){
        clearInterval(timer)
     })

     $(".station").mouseout(function(){
        timer = setInterval(function(){
            count++; //1, 2 ...
            if(count>4){count=0} 
            moveSlider(count)    
         },2000)
    
     })
     


     //함수값
    function moveSlider(idx){
        $(".train").css("transform","translateX("+(-20*idx)+"%)")
    }
})