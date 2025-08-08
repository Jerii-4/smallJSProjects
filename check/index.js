const mycheckbox=document.getElementById("mycheckbox");
const radbtn=document.getElementById("radbtn");
const masbtn=document.getElementById("masbtn");
const paybtn=document.getElementById("paybtn");
const mysubmit=document.getElementById("mysubmit");
const subresult=document.getElementById("subresult");
const payresult=document.getElementById("payresult");

mysubmit.onclick=function(){
    if(mycheckbox.checked){
  subresult.textContent="subscribed"
    }
    else{
        subresult.textContent="not subscribed"
    }

    if(radbtn.checked){
        payresult.textContent="visa payment"
    }
    else if(masbtn.checked){
        payresult.textContent="mastercard payment"
    }
      else if(paybtn.checked){
        payresult.textContent="paypal payment"
    }
    else{
        payresult.textContent="select payment"
    }
}
