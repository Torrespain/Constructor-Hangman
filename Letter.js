// Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

// A string value to store the underlying character for the letter
// A boolean value that stores whether that letter has been guessed yet
// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly



var guessedArray=[];

var Letter = function(char, guessed){
	this.char=char;
	this.guessed=guessed;

	if (this.guessed===false){
		console.log("Not gessed!");
		guessedArray.push(this.char);
	}
	else {
		console.log("Ops! you already guessed that letter, try with another!");
	}
	console.log(guessedArray);
	inquire();
}

function compare(letter){
	for (var i = 0; i <= guessedArray.length; i++) {
		if (letter===guessedArray[i]) {
			return(true);
		}
		else if (i===guessedArray.length) {
			if (letter===guessedArray[i]) {
				return (true);
			}
			else {
				return (false);
			}
		}
	}
}

var inquire= function(){
	var inquirer = require("inquirer");
	inquirer
		.prompt([
			{
				type: "input",
				message: "Please guess a letter",
				name: "letter"
			}
		])
		.then(function(inquirerResponse){
			var char=inquirerResponse.letter;
			if ((/^[a-zA-Z]/.test(char)) && (char.length===1)){
				char=char.toUpperCase();
				var guess = new Letter(char, compare(char));
			}
			else {
				console.log("Please choose just one letter between A-Z");
				inquire();
			}
		})
}


module.exports = Letter;