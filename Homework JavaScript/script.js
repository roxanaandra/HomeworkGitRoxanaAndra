let array = ["rock", "paper", "scissors"];



function play() {
  let user = array[Math.floor(Math.random() * 3)];
  console.log("Userul a ales " + user);
  
  
  let computer = array[Math.floor(Math.random() * 3)];
  console.log("Computerul a ales " + computer);
 

  if ( user == "rock" && computer == "rock") {
    console.log("Tie");
  } else if ( user == "rock" && computer == "paper") {
    console.log("Computer wins");
  } else if ( user == "rock" && computer == "scissors") {
    console.log("User wins");
  } else if ( user == "paper" && computer == "rock") {
    console.log("User wins");
  } else if ( user == "paper" && computer == "paper") {
    console.log("Tie");
  } else if ( user == "paper" && computer == "scissors") {
    console.log("Computer wins");
  } else if ( user == "scissors" && computer == "rock") {
    console.log("Computer wins");
  } else if ( user == "scissors" && computer == "paper") {
    console.log("User wins");
  } else if ( user == "scissors" && computer == "scissors") {
    console.log("Tie");
  } 

}


play();
