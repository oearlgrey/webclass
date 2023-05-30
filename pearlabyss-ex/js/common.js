window.onload = function(){

    let newsSlider = new Swiper(".news_station",{
        pagination: {
            el: '.swiper-pagination',
        },
        breakpoints:{
            280:{
                slidesPerView:1,
            },
            768:{
                slidesPerView:3,
            },
        }
    })
    let footSlider2 = new Swiper(".foot_station",{
        pagination: {
            el: '.swiper-pagination',
        },
        breakpoints:{
            280:{
                slidesPerView:1,
            },
            768:{
                slidesPerView:3,
            },
        }

    })
        
}

