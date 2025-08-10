const minNum =1
const Maxnum =100
const ans=Math.floor(Math.random() * (Maxnum-minNum+ 1)) + minNum

let attempts=0
let guess
let running =true

while(running){
guess= window.prompt(`guess number btw ${minNum}  and ${Maxnum}`)
guess=Number(guess)

if(isNaN(guess)){
    window.
    alert("invalid")
}
else if(guess<minNum || guess>Maxnum){
window.alert("invalid")
}
else{
    attempts++
    if(guess<ans){
        window.alert("low")
    }else if(guess>ans){
        window.alert("high")
    }else{
      window.alert("congrats")
      window.alert(`it took you ${attempts}`)
      running=false
    }
}
}