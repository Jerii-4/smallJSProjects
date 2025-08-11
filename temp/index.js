
const textbox=document.getElementById("textbox");
const tof=document.getElementById("tof");
const toc=document.getElementById("toc");
const result=document.getElementById("result");
let temp;

function Convert(){
    if(tof.checked){
      temp=Number(textbox.value);
      temp=temp*9/5 +32
      result.textContent=`its ${temp.toFixed(1)} fahrenheit`
    }else if(toc.checked){
      temp=Number(textbox.value);
      temp=(temp-32) *(5/9)
      result.textContent=`its ${temp.toFixed(1)} celcius`
    }else{
        result.textContent="select unit"
    }
}