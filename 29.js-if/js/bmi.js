function getbmi(uheight,uweight){
    let result;
    result = uweight / Math.pow((uheight/100),2)
    return result
}

function getbmi_result(bminum){
    let result
    if(bminum>=25){
        result = "비만"
    }else if(bminum>=23 && bminumi<=24.9){
        result = "과체중"
    }else if(bminum>=18.5 && bminum<=22.9){
        result = "정상"
    }else{
        result = "저체중"
    }
    return result
}  

function showresult(uname,uheight,uweight,ubmi,ubmiresult){
    document.write(
       `<table class="gradestyle">
           <caption>${uname}님의 비만도 검사 결과</caption>
           <tr>
               <th>신장</th>
               <td>${uheight}</td>
           </tr>
           <tr>
               <th>체중</th>
               <td>${uweight}</td>
           </tr>
           <tr>
               <th>BMI</th>
               <td>${ubmi}</td>
           </tr>
           <tr>
               <th>결과</th>
               <td>${ubmiresult}</td>
           </tr>
       </table>`)   
   }