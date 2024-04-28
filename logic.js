let userScore = 0;
let deviceScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const deviceScorePara = document.querySelector("#device-score");

const genDeviceChoice = () => { //Genrating computer's choice 
    let options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() *3);
    return options[randomIdx];

}

const drawGame = () => {  //Draw game logic
    msg.innerText = `It's a Draw, Play again`;
    msg.style.backgroundColor = "#4C3957";
}

const showWinner = (userWin, userChoice, deviceChoice) => { //Updating score and printing winner
    if(userWin){
       userScore++;
       userScorePara.innerText = userScore;
       msg.innerText = `You won, ${userChoice} beats ${deviceChoice}`;
       msg.style.backgroundColor = "green";
    }
    else{
    deviceScore++;
    deviceScorePara.innerText = deviceScore;
    msg.innerText = `You  lost, ${deviceChoice} beats ${userChoice}` ;
    msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => { //Selecting the winner 
    const deviceChoice = genDeviceChoice();

    if(userChoice === deviceChoice){
       drawGame();
    }else {
        let userWin;

        if (userChoice === "rock") {
            userWin = deviceChoice === "scissor" ? true : false;
        } else if (userChoice === "paper") {
            userWin = deviceChoice === "rock" ? true : false;
        } else {
            userWin = deviceChoice === "paper" ? true : false;
        }

        showWinner(userWin, userChoice, deviceChoice);
    }

    
}

choices.forEach((choice) => { //Getting user's input
    choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");    
    playGame(userChoice);
    })
})