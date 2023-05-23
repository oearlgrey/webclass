window.onload = function(){

    let nextBtn = document.querySelector(".btnNext")
    let prevBtn = document.querySelector(".btnPrev")
    let train = document.querySelector(".train")
    let trainlist = train.children
    let count = 0 
        nextBtn.addEventListener("click",function(){
            //train클래스를 선택해서 왼쪽으로 500픽셀 이동
            count++
            if(count>3){count = 0}
            train.style.transform = "translateX(-"+25*count+"%)"

            for(let i = 0 ; i <trainlist.length ; i++){
                trainlist[i].classList.remove("on")
            }
            trainlist[count].classList.add("on")
        })
        prevBtn.addEventListener("click",function(){
            count--
            if(count<0){count=3}
            train.style.transform = "translateX(-"+25*count+"%)"

            for(let i = 0 ; i <trainlist.length ; i++){
                trainlist[i].classList.remove("on")
            }
            trainlist[count].classList.add("on")
        })

}