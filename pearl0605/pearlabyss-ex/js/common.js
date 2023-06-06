window.onload = function(){

    let newsSlider = new Swiper(".news_station",{
        pagination: {
            el: '.news_pagination',
            clickable: true,
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
    let noticeSlider= new Swiper(".notice_station",{
        pagination: {
            el: '.notice_pagination',
            clickable: true,
        },
        breakpoints:{
            280:{
                slidesPerView:1,
            },
            768:{
                slidesPerView:4,
                spaceBetween: 20,
            },
        }

    })
        
}

