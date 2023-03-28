let rock = document.getElementById("image_rock");
let paper = document.getElementById("image_paper");
let scissors = document.getElementById("image_scissors");
let user = "";
let button = document.getElementById("play_button");
let winner = document.getElementById("winner_text");
let looser = document.getElementById("looser_text");
let tie = document.getElementById("tie_text");

let playerTextScore = document.getElementById("player_score");
let computerTextScore = document.getElementById("computer_score");

let playerScore = 0;
let computerScore = 0;

let array = ["rock", "paper", "scissors"];

rock.addEventListener("click", daClick1);

function daClick1() {
    user = "rock";
    rock.className = "selected-image";
    paper.className = "";
    scissors.className = "";
}


paper.addEventListener("click", daClick2);

function daClick2() {
    user = "paper";
    paper.className = "selected-image";
    rock.className = "";
    scissors.className = "";
}


scissors.addEventListener("click", daClick3);

function daClick3() {
    user = "scissors";
    scissors.className = "selected-image";
    rock.className = "";
    paper.className = "";
}

button.addEventListener("click", play);


function play() {
    let computer = array[Math.floor(Math.random() * 3)];
   

    if ( user == "rock" && computer == "rock") {
        tie.className = "display-text";
        winner.className = "hide-text";
        looser.className = "hide-text";
      } else if ( user == "rock" && computer == "paper") {
        computerTextScore.innerText = computerScore + 1;
        computerScore = computerScore + 1;
        looser.className = "display-text";
        winner.className = "hide-text";
        tie.className =  "hide-text";
      } else if ( user == "rock" && computer == "scissors") {
        playerTextScore.innerText = playerScore + 1;
        playerScore = playerScore + 1;
        winner.className = "display-text";
        looser.className = "hide-text";
        tie.className =  "hide-text";
      } else if ( user == "paper" && computer == "rock") {
        playerTextScore.innerText = playerScore + 1;
        playerScore = playerScore + 1;
        winner.className = "display-text";
        looser.className = "hide-text";
        tie.className =  "hide-text";
      } else if ( user == "paper" && computer == "paper") {
        tie.className = "display-text";
        winner.className = "hide-text";
        looser.className = "hide-text";
      } else if ( user == "paper" && computer == "scissors") {
        computerTextScore.innerText = computerScore + 1;
        computerScore = computerScore + 1;
        looser.className = "display-text";
        winner.className = "hide-text";
        tie.className =  "hide-text";
      } else if ( user == "scissors" && computer == "rock") {
        computerTextScore.innerText = computerScore + 1;
        computerScore = computerScore + 1;
        looser.className = "display-text";
        winner.className = "hide-text";
        tie.className =  "hide-text";
      } else if ( user == "scissors" && computer == "paper") {
        playerTextScore.innerText = playerScore + 1;
        playerScore = playerScore + 1;
        winner.className = "display-text";
        looser.className = "hide-text";
        tie.className =  "hide-text";
      } else if ( user == "scissors" && computer == "scissors") {
        tie.className = "display-text";
        winner.className = "hide-text";
        looser.className = "hide-text";
      } 
      
      rock.className = "";
      paper.className = "";
      scissors.className = "";
      user = "";
    
    }
