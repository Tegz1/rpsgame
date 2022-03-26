
 let score = 0;



function computerPlay(){
    let randomIndex = Math.floor(Math.random() * 3)
    const answerArray = ['Rock', 'Paper', 'Scissors']
    return answerArray[randomIndex]
    
}

function playRound(){
   
    let result;
    playerSelection = window.event.target.value

    const answer = computerPlay()
    if(playerSelection.toLowerCase() === answer.toLowerCase()){
        score += 1
        result = "You win! Your score is: "
    }else{
        result = "You lose! Your score is "
    }

    return document.getElementById("score-div").innerHTML = result + score;
}







