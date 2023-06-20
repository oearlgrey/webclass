$(document).ready(function(){

    // let a = [1,2,3,"hi"]
    // a[0] //1
    // a[1] //2
    // a[3] //1
    // a[4] //hi

    textAni(".title",{
        textSize:500,
        aniSpeed:0.5,
        effect:"fadeInOut"
    })

    textAni(".title2",{
        textSize:20,
        aniSpeed:0.5,
        effect:"moveToptoBottom"
    })
})
