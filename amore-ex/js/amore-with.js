window.onload=function(){
//     let bannerDT = document.querySelectorAll(".bannertabmenu>dt")

//     for(let i = 0 ; i<bannerDT.length ; i++){
//         bannerDT[i].addEventListener("click", function(){

//             for(let j=0 ; j<bannerDT.length ; j++){
//                 bannerDT[j].classList.remove("on")    
//             }
//             this.classList.add("on")
//         })    
//     }

//     let tabmenuDT = document.querySelectorAll(".tabmenu>dt")

//     for(let i = 0 ; i<tabmenuDT.length ; i++){
//         tabmenuDT[i].addEventListener("click", function(){
//             for(let j=0 ; j<tabmenuDT.length ; j++){
//                 tabmenuDT[j].classList.remove("on")    
//             }
//             this.classList.add("on")
//         })    
//     }
// }

    //함수를 넣어서 표현
    function tab(classname){
        let tab = document.querySelectorAll("."+classname+">dt")
        for(let i = 0 ; i<tab.length ; i++){
            tab[i].addEventListener("click", function(){
                for(let j=0 ; j<tab.length ; j++){
                    tab[j].classList.remove("on")    
                }
                this.classList.add("on")
            })    
        }
    }
    tab("tabmenu")
    tab("bannertabmenu")
}