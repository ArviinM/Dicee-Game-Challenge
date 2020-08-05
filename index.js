var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1);

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2);

var dices = ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];

document.getElementsByClassName("img1")[0].setAttribute("src", "images/" + dices[randomNumber1]);
document.getElementsByClassName("img2")[0].setAttribute("src", "images/" + dices[randomNumber2]);

if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Tied 🙄";
} else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins! 😍";
} else {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 😍";
}