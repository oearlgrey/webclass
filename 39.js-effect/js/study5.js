$(document).ready(function(){

        let count = 0;

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
        if(count<0){count=0} 
        // $(".train").css("transform","translateX("+(-20*count)+"%)") 
        //-20 *-1 =20%
        moveSlider(count)
    })

    function moveSlider(idx){
        $(".train").css("transform","translateX("+(-20*idx)+"%)")
    }
})