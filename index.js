

function showDice(){
    
    var randomNumber1 = Math.floor(Math.random()*6)+ 1;
    var randomNumber2 = Math.floor(Math.random()*6)+ 1;

    if ((randomNumber1 === 1) || (randomNumber2 === 1)) {
        if (randomNumber1 === 1){
            var dice1 = document.querySelector(".img1");
            dice1.getAttribute("src");
            dice1.setAttribute("src", "images/dice1.png");
            dice1.classList.add("visible");
        } 
        else {
            var dice1 = document.querySelector(".img2");
            dice1.getAttribute("src");
            dice1.setAttribute("src", "images/dice1.png");
            dice1.classList.add("visible");
        }
        
    } else if ((randomNumber1 === 2) || (randomNumber2 === 2))
    {
        if (randomNumber1 === 2){
            var dice2 = document.querySelector(".img1");
            dice2.getAttribute("src");
            dice2.setAttribute("src", "images/dice2.png");
            dice2.classList.add("visible");
        }
        else {
            var dice2 = document.querySelector(".img2");
            dice2.getAttribute("src");
            dice2.setAttribute("src", "images/dice2.png");
            dice2.classList.add("visible");
        }
    }
    else if ((randomNumber1 === 3) || (randomNumber2 === 3))
    {
        if (randomNumber1 === 3){
            var dice3 = document.querySelector(".img1");
            dice3.getAttribute("src");
            dice3.setAttribute("src", "images/dice3.png")
            dice3.classList.add("visible");
        } else {
            var dice3 = document.querySelector(".img2");
            dice3.getAttribute("src");
            dice3.setAttribute("src", "images/dice3.png");
            dice3.classList.add("visible");
        }
        
    }
    else if ((randomNumber1 === 4) || (randomNumber2 === 4))
    {
        if (randomNumber1 === 4){
            var dice4 = document.querySelector(".img1");
            dice4.getAttribute("src");
            dice4.setAttribute("src", "images/dice4.png")
            dice4.classList.add("visible");
        } else {
            var dice4 = document.querySelector(".img2");
            dice4.getAttribute("src");
            dice4.setAttribute("src", "images/dice4.png");
            dice4.classList.add("visible");
        }
    }
    else if ((randomNumber1 === 5) || (randomNumber2 === 5))
    {
        if (randomNumber1 === 5){
            var dice5 = document.querySelector(".img1");
            dice5.getAttribute("src");
            dice5.setAttribute("src", "images/dice5.png")
            dice5.classList.add("visible");
        } else {
            var dice5 = document.querySelector(".img2");
            dice5.getAttribute("src");
            dice5.setAttribute("src", "images/dice5.png");
            dice5.classList.add("visible");
        }
    }
    else if ((randomNumber1 === 6) || (randomNumber2 === 6))
    {
        if (randomNumber1 === 6){
            var dice6 = document.querySelector(".img1");
            dice6.getAttribute("src");
            dice6.setAttribute("src", "images/dice6.png")
            dice6.classList.add("visible");
        } else {
            var dice6 = document.querySelector(".img2");
            dice6.getAttribute("src");
            dice6.setAttribute("src", "images/dice6.png");
            dice6.classList.add("visible");
        }
    }

    diceWinner(randomNumber1, randomNumber2);
}

function diceWinner(num1, num2){
    if (num1 === num2){
        var message = document.querySelector("h1");
        message.innerHTML = "DRAW!!";
    }
    else if (num1 < num2) {
        var message = document.querySelector("h1");
        message.innerHTML = "Player 2 Wins!";
    }
    else if (num1 > num2) {
        var message = document.querySelector("h1");
        message.innerHTML = "Player 1 Wins!";
    }
}