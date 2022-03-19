"use strict";

let answer;
let score = 0;

function computerPlay(){
    let randomIndex = Math.floor(Math.random() * 3)
    const answerArray = ['Rock', 'Paper', 'Scissors']
    
    answer = answerArray[randomIndex]
    console.log(answer)
    console.log(score)
}



function playRound(playerSelection, computerSelection){
    computerPlay()
    playerSelection = prompt()
    if(playerSelection.toLowerCase() === answer.toLowerCase()){
        score += 1
       return 'You win!'
    }else{
        return 'You lose'
    }
}


function game(){
    for (let i = 0; i < 5; i++) {
        playRound()
     }
}
game()
