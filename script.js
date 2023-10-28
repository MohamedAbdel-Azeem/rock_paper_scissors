let win = 0;
let lose = 0;

const resultBoard = document.querySelector('#winner');
const scoreBoard = document.querySelector('#score');
const endDiv = document.querySelector('#end');

const winStatment = 'Congrats, You Won!';
const loseStatment = 'Game Over! PC Won!';

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
    if (win == 5 || lose == 5){
        result = 'Play Again?';
        showGameOver();
    }
    return result;
}



const buttons = document.querySelectorAll('#buttons');
buttons.forEach((button) => {
    button.addEventListener('click', (e)=>{
        console.log(e.target.id);
        Game(e.target.id);
    });
});



function displayScore(){
    let score = `Score: User ${win} - PC ${lose}`;
    scoreBoard.textContent = score;
}

function displayResults(result){
    resultBoard.textContent = result;
}

function Game(input){
    if (win < 5 && lose < 5){
        let result = playRound(input);
        displayResults(result);
        displayScore();
    }
}


function showGameOver(){
    const endStatment = document.createElement("h3");
    if (win > lose){
        endStatment.textContent = winStatment;
        endStatment.style.color = '#52b788';
    } else {
        endStatment.textContent = loseStatment;
        endStatment.style.color = 'red';
    }
    const playAgain = document.createElement("Button");
    playAgain.innerText = 'Play Again?';
    playAgain.classList.add('button-78');
    playAgain.addEventListener('click',(e) => {
        win = 0;
        lose = 0;
        resultBoard.textContent = 'Play Now!';
        scoreBoard.textContent = '';
        endDiv.removeChild(playAgain);
        endDiv.removeChild(endStatment);
    });
    endDiv.appendChild(endStatment);
    endDiv.appendChild(playAgain);
}
