const userScore = document.getElementById('score-user');
const compScore = document.getElementById('score-comp');
const compMove = document.getElementById('compMove');
const userMove = document.getElementById('userMove');
const _result = document.getElementById('result');
const startbtn = document.getElementById('startBtn');
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorBtn = document.getElementById('scissors');

function randomCompChoice(){
    const choices = ["Rock", "Paper" ,"Scissors"];
    var randomNum = Math.floor(Math.random() * 3);  
    compMove.innerHTML = choices[randomNum]
}

function start() {
    _result.innerText = "Make your move."
    compMove.style.visibility = "hidden";
    userMove.style.visibility = "hidden";
    randomCompChoice();

    
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
}

function playerChoiceRock() {
    if(compMove.innerHTML === "Rock"){
        _result.innerHTML = "Rock does not do anything to Rock try again"
    } else if(compMove.innerHTML === "Paper"){
        _result.innerHTML = "Paper beats Rock. You lose this round!"
        compScore.innerHTML++                                                                                                                                                                                                         
    } else {
        _result.innerHTML = "Rock beats Scissor. You win this round!"
        userScore.innerHTML++
    }
    startbtn.innerHTML = "Next Round"
    userMove.innerHTML = "Rock"
    compMove.style.visibility = "visible";
    userMove.style.visibility = "visible";

    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;

}

function playerChoicePaper() {
    if(compMove.innerHTML === "Rock"){
        _result.innerHTML = "Paper beats Rock. You win this round!"
        userScore.innerHTML++
    } else if(compMove.innerHTML === "Paper"){
        _result.innerHTML = "Paper does not do anything to Paper  try again"
    } else {
        _result.innerHTML = "Scissors beat Paper. You lose this round!"
        compScore.innerHTML++
    }
    startbtn.innerHTML = "Next Round"
    userMove.innerHTML = "Paper"
    compMove.style.visibility = "visible";
    userMove.style.visibility = "visible";

    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}

function playerChoiceScissors() {
    if(compMove.innerHTML === "Rock"){
        _result.innerHTML = "Rock beats Scissor. You lose this round!"
        compScore.innerHTML++;
    } else if(compMove.innerHTML === "Paper"){
        _result.innerHTML = "Scissors beat Paper. You win this round!"
        userScore.innerHTML++;
    } else {
        _result.innerHTML = "Scissors does not do anything to scissors. Try again"
    }
    startbtn.innerHTML = "Next Round"
    userMove.innerHTML = "Scissors"
    compMove.style.visibility = "visible";
    userMove.style.visibility = "visible";

    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
}
