const textbox=document.getElementById("textbox")
const submitbtn=document.getElementById("submitbtn")

let ol=document.getElementById("ol")

submitbtn.onclick=function(){
    let list=document.createElement("list")
    list.textContent=textbox.value
   ol.appendChild(list); 
}

