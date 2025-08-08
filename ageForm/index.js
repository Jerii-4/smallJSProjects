const mytext = document.getElementById("mytext")
const mysubmit = document.getElementById("mysubmit")
const result = document.getElementById("result")

let age
mysubmit.onclick=function(){
age =mytext.value
age=Number(age)

    if(age>18){
        result.textContent="u are above 18"
    }
    else if(age==18){
    result.textContent="u are 18"
    }
    else{
        result.textContent="u are below 18"
    }
}