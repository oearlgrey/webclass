function Dog(dogname,dogage){

    this.name = dogname
    this.age = dogage
    this.feel = Math.floor(Math.random()*3)
    this.say =  function(){
        if(this.feel==0){
            document.write(`멍멍! 나는 ${this.name} 기분이가 좋다 멍멍!<br>`)
        }else if(this.feel==1){
            document.write(`${this.name}는 오늘 심심하군! 먹을 거 거 없나~ 멍멍~<br>`)
        }else{
            document.write(`${this.name} 지금 굉장히 화가난다! 왈왈오아앙라!<br>`)
        }
    }


    //return this 가 자동으로 생성되어 있음 
}
//new 키워드를 써줘야 생성자함수가 실행되면 이러한 객체 함수가 리턴된다.
//이 함수를 위와같이 표현할 수 있다.
