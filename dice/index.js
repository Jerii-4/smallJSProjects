function rollDice(){

    const numofdice=document.getElementById("numofdice").value
    const diceRes=document.getElementById("diceRes")
    const diceImg=document.getElementById("diceImg")
    const values=[]
    const images =[]

    for( let i=0;i<numofdice;i++){

    const value=Math.floor(Math.random() * 6) +1
    values.push(value)
    images.push(`<img src="img/${value}.png" alt="dice ${value}">`)
    }
diceRes.textContent =`dice: ${values.join(', ')}` 
diceImg.innerHTML=images.join('')
}