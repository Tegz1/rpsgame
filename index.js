"use strict";

let answer = "";
let score = 0;
let result = ""

function computerPlay(){
    let randomIndex = Math.floor(Math.random() * 3)
    const answerArray = ['Rock', 'Paper', 'Scissors']
    answer = answerArray[randomIndex]
    
}

function playRound( playerSelection = "", computerSelection){
    playerSelection = window.event.target.value

    computerPlay()
    if(playerSelection.toLowerCase() === answer.toLowerCase()){
        score += 1
        result = "You win! Your score is: "
    }else{
        result = "You lose! Your score is "
    }

    return document.getElementById("score-div").innerHTML = result + score;
}







