var randomNum1 = Math.floor((Math.random() * 6) + 1);
var randomNum2 = Math.floor((Math.random() * 6) + 1);
var image1Changed = false;

function changeImage1() {
    diceAnimation(".img1");
    document.querySelector(".img1").setAttribute("src", "./dice" + randomNum1 + ".png");
    document.querySelector(".dice1 p").innerHTML = "Player 1 rolled " + randomNum1;
    image1Changed = true;
}

function changeImage2() {
    if (!image1Changed) {
        return; // exits this function. ensures player 1 goes first
    }
    diceAnimation(".img2");
    document.querySelector(".img2").setAttribute("src", "./dice" + randomNum2 + ".png");
    document.querySelector(".dice2 p").innerHTML = "Player 2 rolled " + randomNum2;
    changeHeading();
}

function diceAnimation(selector) {
    document.querySelector(selector).classList.add("clicked");
    setTimeout(function() {
        document.querySelector(selector).classList.remove("clicked");
    }, 100);
}

function changeHeading() {
    document.querySelector("h1").style.color = "#F5E8C7";
    if (randomNum1 > randomNum2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins! 🏆";
        var win = new Audio("./win.mp3");
        win.play(); 
    }
    else if (randomNum1 < randomNum2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆";
        win = new Audio("./win.mp3");
        win.play(); 
    }
    else {
        document.querySelector("h1").innerHTML = "Draw Game";
        var draw = new Audio("./draw.mp3");
        draw.play(); 
    }
}
