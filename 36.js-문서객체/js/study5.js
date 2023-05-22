window.onload = function(){
    let btn1 = document.querySelector(".btnClick")
    btn1.addEventListener("click",function(){
        //클릭했을 때 실행되는 소스코드
        document.querySelector('.txtbox').style.color='black'
    })
    let btnopen = document.querySelector(".btnpopup")
    btnopen.addEventListener("click",function(){
      document.querySelector(".hiddenpopup").classList.add("show")
    })
    let btnclose = document.querySelector(".btnpopclose")  
    btnclose.addEventListener("click",function(){
        document.querySelector(".hiddenpopup").classList.remove("show")
    })
}   

