const decrease= document.getElementById("decbtn")
const reset= document.getElementById("reset")
const increase= document.getElementById("inbtn")
const countlabel = document.getElementById("countl")

let count=0

increase.onclick=function(){
    count++;
    countlabel.textContent=count;
}
decrease.onclick=function(){
    count--;
    countlabel.textContent=count;
}

reset.onclick=function(){
    count=0
    countlabel.textContent=count;
}