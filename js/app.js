
$(document).ready(function(){
	
	newGame();
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});
  	$(".new").click(function(){
  		//on button click will reinitiate new Game 
  		newGame();
  	});
});

function newGame(){
	//resets game
	resetGame();
	// new game is the function that starts the game will need to be called again after button push 
	var randNum=generate();
	//clears and resets variables
	var list=" ";
	var count=0;
	var inputNum=0;
	clickGuess(randNum,inputNum, count,list);


}
function clickGuess(randNum,inputNum,count,list){
	// alert("at clickGuess"+" "+list);
	$('#guessButton').click(function(e){
		//prevents default behavior
		e.preventDefault();
		//increment count
		count++;
		// alert(count);
		$('#count').text(""+count);
		var inputNum=$('#userGuess').val();
		//add to guessList with inputted guessed number
		list+=inputNum+"  ";
		//display onto #guessList
		$('#guessList').text(list);
		//convert to guessed numberstring to integer
		var guess=parseInt(inputNum);
		//store how far away guess is and relay that to user;
		var distance=isClose(randNum, guess);
		//concatenate string response to feedback id
		$('#feedback').text("You are off by "+distance);
		//loop through clickGuess function if guess and random number are not same
		if (randNum!=guess){
			clickGuess(randNum,inputNum,count,list);
		}
		else{
		//otherwise congratulate user and reset game back to newGame
			$('#feedback').text("Congratulations, it is "+guess);
			//change text of Guess button to Play again
			$('#guessButton').val('Play again');
			$('#guessButton').click(function(e){
				e.preventDefault();
				newGame();
			});
		}
	});
}
function resetGame(){
	//resets count
	$('#count').text("0");
	//clears out userinput box
	$('#userGuess').text("");
	//reset text in #feedback
	$('#feedback').text("Make your Guess!");
	//clear guessList
	$('#guessList').text("");
	//reset placeholder text
	$('#guessButton').val('Guess');
}
function generate(){
	//generates a number between 1-100
	var target=Math.floor((Math.random()*100)+1);//way to pseudorandom generate nubmer
	return target;
}
function isClose(randNum,guess){
	var diff=randNum-guess;
	//convert to the absolute value of the difference between guess and random number
	diff=Math.abs(diff);
	// return varied string statements based on amount of difference-e.g. hot cold, etc
	if (diff<=5){
		return "Inferno";
	} 
	else if (diff<=10){
		return "Very hot";
	}
	else if (diff<=20){
		return "Hot"
	}
	else if (diff<=30){
		return "Very warm"
	}
	else if (diff<=40){
		return "Warm"
	}
	else if (diff<=50){
		return "Luke-warm"
	}
	else if (diff<=50){
		return "Cool"
	}
	else if (diff<=60){
		return "Very cool"
	}
	else if (diff<=70){
		return "Cold"
	}
	else if (diff<=80){
		return "Very cold"
	}
	else if (diff<=90){
		return "Freezing"
	}
	else {
		return "Remote area on dark-side of moon frigid"
	}

}
// overlay-is the instruction box
//during page load & when user clicks new game button, javascript should start new game.
//a secret number should be generated between 1-100, that user must guess-should be function
//user requires feedback about each guess.-function must take user guess and determine feedback
//initially use absolute values, then later convert to words like cold, warm, very hot, etc
//feedback should appear in div#feedback-for now text is set to make your guess
//game should track number of guess user has made- report back to user in span#count
//keep track of numbers they've already guessed in ul#guessList
//need to check for valid inputs only between 1-100
//need to add functionality to button in upper right hand corner.- just start new game.
