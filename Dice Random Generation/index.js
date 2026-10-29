var randomNumber1 = Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
var randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");

//results//

if(randomNumber1>randomNumber2){
    document.querySelector(".results h2").textContent= "Player 1 wins!"
} else if (randomNumber1<randomNumber2){
    document.querySelector(".results h2").textContent= "Player 2 wins!"
} else {
    document.querySelector(".results h2").textContent= "Draw!"
}