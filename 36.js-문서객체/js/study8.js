window.onload=function(){
    let tabTitles = document.querySelectorAll(".tabTit>li")
    let tabDes = document.querySelector(".tabDes")
    let tabDescription = [
        `<h3>title1</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita architecto officiis dolores repellat, repudiandae beatae. Ab ea cum similique id eos rerum velit voluptatibus, quam nulla tempore? Autem, culpa aspernatur.</p>`,
    `<h3>title2</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita architecto officiis dolores repellat, repudiandae beatae. Ab ea cum similique id eos rerum velit voluptatibus, quam nulla tempore? Autem, culpa aspernatur.</p>`,
    `<h3>title3</h3>
    <ul>
        <li>des1</li>
        <li>des2</li>
    </ul>`
]
    for(let i=0 ; i<tabTitles.length ; i++){
        tabTitles[i].addEventListener("click",function(){
            for(let j = 0 ; j<tabTitles.length ; j++){
                tabTitles[j].classList.remove("on")
            }
        this.classList.add("on")
        tabDes.innerHTML = tabDescription[i]
        })        
   }
}