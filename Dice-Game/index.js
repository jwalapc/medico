var num1 = Math.floor(Math.random() * 6) + 1;
var num2 = Math.floor(Math.random() * 6) + 1;

var dice1Img = "images/dice" + num1 + ".png";
var dice2Img = "images/dice" + num2 + ".png";

document.querySelector("img.img1").src = dice1Img;
document.querySelector("img.img2").src = dice2Img;

// if (num1 === 1) {
//     document.querySelector("img.img1").src = "images/dice1.png";
// } else if (num1 === 2) {
//     document.querySelector("img.img1").src = "images/dice2.png";
// } else if (num1 === 3) {
//     document.querySelector("img.img1").src = "images/dice3.png";
// } else if (num1 === 4) {
//     document.querySelector("img.img1").src = "images/dice4.png";
// } else if (num1 === 5) {
//     document.querySelector("img.img1").src = "images/dice5.png";
// } else if (num1 === 6) {
//     document.querySelector("img.img1").src = "images/dice6.png";
// }


// if (num2 === 1) {
//     document.querySelector("img.img2").src = "images/dice1.png";
// } else if (num2 === 2) {
//     document.querySelector("img.img2").src = "images/dice2.png";
// } else if (num2 === 3) {
//     document.querySelector("img.img2").src = "images/dice3.png";
// } else if (num2 === 4) {
//     document.querySelector("img.img2").src = "images/dice4.png";
// } else if (num2 === 5) {
//     document.querySelector("img.img2").src = "images/dice5.png";
// } else if (num2 === 6) {
//     document.querySelector("img.img2").src = "images/dice6.png";
// }

if (num1 > num2) {
    document.querySelector("h1").textContent = "Player 1 won...";
} else if (num1 < num2) {
    document.querySelector("h1").textContent = "Player 2 won...";
} else {
    document.querySelector("h1").textContent = "Tie...";
}