'use strict';
/*
document.querySelector('.message').textContent='🎊 Congrats Bro';
document.querySelector('.number').textContent = 15;
document.querySelector('.score').textContent = 25;
	document.querySelector('.message').textContent='🎊 Congrats Bro';
	const random = Math.floor(Math.random()*20)+1;
	
	document.querySelector('.number').textContent = document.querySelector('.guess').value;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value=30;*/

// const dialogueBox = document.querySelector('.message').textConten;
// console.log(dialogueBox);
// console.log(random);
// console.log(guess)

const check = document.querySelector(".check")
//const dialogueBox = document.querySelector('.message');
let scoreBox = document.querySelector('.score');
const resulBox = document.querySelector('.number');
const body = document.querySelector(".body")
const big = document.querySelector(".big");
// const highScore = document.querySelector(".highscore");
let score = 20;
let highscore = 0;
let random = Math.floor(Math.random()*20)+1;

const displayMessage = function(message){
	document.querySelector('.message').textContent = message;
}


console.log(random);

check.addEventListener('click',function(){
	let guess = Number(document.querySelector('.guess').value);
	// WHEN THE PLAYER WINS
 	if(guess === random){
	displayMessage("🎊 YOU WON THE GAME BRO ");
	big.textContent = "CONGRATULATION !!!";
	resulBox.textContent ='THE ANSWER IS : '+ guess;
	document.body.style.backgroundColor = "green";
	resulBox.style.width = '20em';

    if (score > highscore) {
		highscore = score;
		document.querySelector('.highscore').textContent = highscore;
	  }
	
	//  NO INPUT VALUES
	} else if(!guess){
		displayMessage('⛔ EMPTY VALUE DEDUCTED 👎🏻');

	// GUESS VALUE SMALLER THAN RANDOM VALUE
	} else if(random>guess){
		displayMessage('📉 Too low');
		document.body.style.backgroundColor = 'rgb(0, 0, 102)';
		if (score > 1){
		score--;
		scoreBox.textContent = score;
		} else {
			displayMessage('👎🏻 YOU LOSE');
			big.textContent = " 🤣 YOU LOST THE GAME BRO ";
			resulBox.textContent = '🖕';
			resulBox.background = "eee";
		}

	// GUESS VALUE GREATER THAN RANDOM VALUE
	} else if (guess>random){
		displayMessage('📈 Too high');
		document.body.style.backgroundColor = "maroon";
		if (score > 1){
		score--;
		scoreBox.textContent = score;
		} else {
		displayMessage('👎🏻 YOU LOSE');
		big.textContent = " 🤣 YOU LOST THE GAME BRO ";
		resulBox.textContent = '🖕';
		}
	}
	// else if (guess !== random) {
	// 	if(score > 1){
	// 		displayMessage(guess > random ? '📈 Too high !':'📉 Too low!');
	// 		score --;
	// 		scoreBox.textContent = score;
	// 	}else {
	// 		displayMessage("👎🏻 YOU LOSE'");
	// 		resulBox.textContent = '🖕';
	// 		big.textContent = " 🤣 YOU LOST THE GAME BRO ";
	// 	}
	// } 
})

let refreshBtn = document.querySelector('.again');

refreshBtn.addEventListener('click',function(){
	score = 20;
	random = Math.trunc(Math.random()*20)+1;
	displayMessage('Star Guess Again !!!');
	scoreBox.textContent = score;
	resulBox.textContent='?';
	document.body.style.backgroundColor = '#222';
	big.textContent= 'Guess My Number';
	document.querySelector('.guess').value = '';
	resulBox.style.width = '2em';
	console.log(random);
})

// document.querySelector('.btn again').addEventListener('click',function( ){
// 	score = 20;
// 	random = Math.floor(Math.random()*20)+1;
// 	dialogueBox.textContent = 'Start Guess again';
// 	scoreBox.textContent = score;
// 	resulBox.textContent = '?';
// });

