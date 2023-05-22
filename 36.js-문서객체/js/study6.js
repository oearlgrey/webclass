window.onload=function(){
    let menustate = false
    //문서를 끝까지 읽은 뒤 실행할 소스코드
    let btnmenu = document.querySelector(".btnmenu")
    let navTag = document.querySelector("nav")
    btnmenu.addEventListener("click",function(){
        if(menustate==false){
            //메뉴가 닫혀있는 경우 실행되는 코드
            btnmenu.classList.add("close")
            navTag.classList.add("show")
            menustate = true
        }else{
            //메뉴가 열려있는 경우 실행되는 코드
            btnmenu.classList.remove("close")
            navTag.classList.remove("show")
            menustate = false
        }
    })   
    
}