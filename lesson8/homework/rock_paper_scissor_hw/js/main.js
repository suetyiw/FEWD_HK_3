console.log("123");
// this is a way to test your code are linked to javascript 

var human = document.getElementById("humanScore");
var computer = document.getElementById("computerScore");
var rockBtn = document.getElementById("rock");
var paperBtn = document.getElementById("paper");
var scissorBtn = document.getElementById("scissors");
var statusMsg = document.getElementById("status");
var userInput;

// Get user input
rockBtn.onclick = rockIsClicked;
paperBtn.onclick = paperIsClicked;
scissorBtn.onclick = scissorsIsClicked;

// Get robot input
function getRobotInput(){
	var choices = {
		1:"paper",
		2:"scissors",
		3:"rock"
	};

var randomNumber=Math.ceil(Math.random()*3);
	// console.log(randomNumber);
	// console.log(choices[randomNumber]);

	return choices[randomNumber];
}

// Compare the inputs
function compare(userInput, computerInput){
console.log("user: " + userInput);
console.log("computer: " + computerInput);
if(
	(userInput == "scissors" && computerInput =="paper") || 
	(userInput == "rock" && computerInput =="scissors") ||
	(userInput == "paper" && computerInput =="rock")
) {
	console.log("user win");
} else if (
	(computerInput == "scissors" && userInput =="paper") || 
	(computerInput == "rock" && userInput =="scissors") || 
	(computerInput == "paper" && userInput =="rock") 
	) { 
	console.log("user lose")
	} else {
		console.log("Draw")
	}
}


function rockIsClicked(){
	userInput="rock";
	compare(userInput, getRobotInput());
}

function paperIsClicked(){
	userInput="paper"
	compare(userInput, getRobotInput());
}
function scissorsIsClicked(){
	userInput="scissors"
	compare(userInput, getRobotInput());
}


