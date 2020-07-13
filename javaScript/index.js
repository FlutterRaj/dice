var useName1 = prompt("Enter player one name :");
var useName2 = prompt("Enter player two name :");


document.getElementsByClassName("player1")[0].innerText = useName1 ;
document.getElementsByClassName("player2")[0].innerText = useName2;

var randomNumber1 = Math.round(Math.random() * 5 + 1);
var randomNumber2 = Math.round(Math.random() * 5 + 1);

document.getElementsByClassName("img1")[0].src = "images/dice" + randomNumber1 + ".png"
document.getElementsByClassName("img2")[0].src = "images/dice" + randomNumber2 + ".png"

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerText = useName1 + " win";
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerText = useName2 + " win";
}else{
    document.querySelector("h1").innerText = "DRAW";
}