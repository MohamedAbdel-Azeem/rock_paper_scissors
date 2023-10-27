let win = 0;
let lose = 0;

function getComputerChoice(){
    let choices = ["Rock","Paper","Scissors"];
    let index = Number.parseInt(Math.random()*3);
    return choices[index];
}

function playRound(){
    let userInput = prompt("Choose Rock, Paper or Scissors").toLowerCase();
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

function Game(){
    for (let i = 0 ; i < 5 ; i++){
        console.log(playRound());
        console.log(`Score: User ${win} - PC ${lose}`);
    }
    if (win > lose){
        console.log("You Won!");
    } else if (win < lose) {
        console.log("You Lose!");
    } else {
        console.log("Ugh, it's a Tie!");
    }
}


Game();