var dicearray = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];

var player1 = Math.floor(Math.random() * 6)+1;
document.querySelectorAll("img")[0].setAttribute("src", "./images/dice"+player1+".png");

var player2 = Math.floor(Math.random() * 6);
document.querySelectorAll("img")[1].setAttribute("src", dicearray[player2]);

// winner

if (player1>player2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (player2>player1){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else{
    document.querySelector("h1").innerHTML = "It's a Draw!\nRefresh to roll again";
}