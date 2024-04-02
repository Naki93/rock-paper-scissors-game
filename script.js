//Temporary player choice variable
let playerChoice = "rock";
//Store playerscore within the playerScore variable
let playerScore = 0;
//Store computerscore within the computerscore variable
let computerScore = 0;
//A function that will choose a random selection
function computerSelection(){
    let randomSelection = ["rock", "paper", "scissors"]
    return randomSelection[Math.floor(Math.random() * randomSelection.length)]
}
//Call the function computerSelection() and store it in a variable computerChoice
let computerChoice = computerSelection()

function updatePlayerScore(){
    const playerScoreElement = document.querySelector('.playerScore span')
    playerScoreElement.textContent = playerScore
}

updatePlayerScore()

function updateComputerScore() {
    const computerScoreElement = document.querySelector('.computerScore span');
    computerScoreElement.textContent = computerScore;
}

// function showResultMessage(message) {
//     const resultElement = document.querySelector('.result');
//     resultElement.textContent = message;
//     resultElement.classList.add('visible');
//     setTimeout(() => {
//         resultElement.classList.remove('visible');
//         console.log("Message hidden");
//     }, 2000); // Display message for 2 seconds
// }

function showResultMessage(message) {
    const resultElement = document.querySelector('.result');
    resultElement.textContent = message;
    resultElement.style.visibility = 'visible'; // Make the message visible
    setTimeout(() => {
        resultElement.style.visibility = 'hidden'; // Hide the message after 2 seconds
    }, 4000);
}


function determineWinner(playerChoice, computerChoice){
    if(playerChoice === computerChoice){
        showResultMessage( `It is a draw 🤷 
        `)
        return `It is a tie`
    } else if((playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
    ){
        
        playerScore++
        // updatePlayerScore()

        showResultMessage(`You win! 😊 ${playerChoice} beats ${computerChoice}
        `)
        return `You win! 😊 ${playerChoice} beats ${computerChoice}
        `
    } else{
        
        computerScore++
        // updateComputerScore()
        showResultMessage( `Computer Wins🤣
${computerChoice} beats ${playerChoice}
        `)
        return `Computer Wins🤣
        ${computerChoice} beats ${playerChoice}
                `
    }
}

// Function to simulate a round of the game
function playRound() {
    // Get player and computer choices
    let playerChoice = "rock"; // Change this to test different player choices
    let computerChoice = computerSelection();

    // Determine the winner and update scores
    let result = determineWinner(playerChoice, computerChoice);

    // Log the result to the console
    console.log(result);

    // Update scores in the DOM
    updatePlayerScore();
    updateComputerScore();
}

// Call playRound to simulate a single round of the game
playRound();
