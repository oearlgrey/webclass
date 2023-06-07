$(document).ready(function(){
    //문서가 다 읽힌 뒤 한 번 실행되는 소스코드
    $(".box").click(function(){
        alert("test")
    })
    $(".btn").click(function(){
        alert("span태그를 클릭하였습니당.")
        return false;
    })

})