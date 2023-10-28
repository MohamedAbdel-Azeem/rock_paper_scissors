let win = 0;
let lose = 0;



function getComputerChoice(){
    let choices = ["Rock","Paper","Scissors"];
    let index = Number.parseInt(Math.random()*3);
    return choices[index];
}


function playRound(buttonInput){
    let userInput = buttonInput.toLowerCase();
    let result = "";
    let computerChoice = getComputerChoice();
    switch (userInput) {
        case 'rock':
            if (computerChoice == 'Rock'){
                result = "It's a Tie! You two chose Rock.";
            } else if (computerChoice == 'Paper'){
                result = "You Lose! Paper beats Rock.";
                lose++;
            } else {
                result = "You Win! Rock beats Scissors.";
                win++;
            }
            break;
        case 'paper':
            if (computerChoice == 'Rock'){
                result = "You Win! Paper beats Rock.";
                win++;
            } else if (computerChoice == 'Paper'){
                result = "It's a Tie! You two chose Paper.";
            } else {
                result = "You Lose! Scissors beats Paper.";
                lose++;
            }
            break;
        default: // case Scissors
            if (computerChoice == 'Rock'){
                result = "You Lose! Rock beats scissors.";
                lose++;
            } else if (computerChoice == 'Paper'){
                result = "You Win! Scissors beats Paper.";
                win++;
            } else {
                result = "It's a Tie! You two chose Scissors.";
            }
            break;
    }
    return result;
}



const buttons = document.querySelectorAll('#buttons');
buttons.forEach((button) => {
    button.addEventListener('click', (e)=>{
        let result = playRound(e.target.id);
        displayResults(result);
        displayScore();
    });
});



function displayScore(){
    let score = `Score: User ${win} - PC ${lose}`;
    const scoreBoard = document.querySelector('#score');
    scoreBoard.textContent = score;
}

function displayResults(result){
    const resultBoard = document.querySelector('#winner');
    resultBoard.textContent = result;
}