$(document).ready(function(){
    let slider1ResultEl = "";
    for(let i=1 ; i<=20 ; i++){
        slider1ResultEl+=
        `<li class="small"><a href="#"><img src="./img/s${i}.jpg" alt="갤러리${i}이미지"></a></li>
        <li class="small"><a href="#"><img src="./img/pic${i}.jpg" alt="갤러리${i}이미지"></a></li>`
        }
    document.querySelector(".train").innerHTML = slider1ResultEl
                   
})
