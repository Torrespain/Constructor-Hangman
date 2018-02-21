// index.js: The file containing the logic for the course of the game, which depends on Word.js and:

// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses

var Letter = require ("./Letter");
var Word = require ("./Word");

var guessedBands=[];
var gessedWord=[];
var guessedArray=[];


var charCounter=7;
var word={};

var miniPoint;

var bandObject={
	0: "Red Hot Chili Peppers",
	1: "The Beattles",
	2: "Radiohead",
	3: "Linkin Park",
	4: "Ill Nino",
	5: "Modest Mouse",
	6: "The National",
	7: "Slipknot",
	8: "Mushroomhead",
	9: "Mudvayne"
}

function assignBand(){
	var newBand = Math.floor(Math.random()*10);
	if (guessedBands.length===10) {
		return(console.log("Finished!"));
	}
	else if (guessedBands.indexOf(newBand)===-1){
		guessedBands.push(newBand);
		var selectedBand = ((bandObject[newBand]).toUpperCase()).split("");
		return(selectedBand);
	}
}

function emptyArray(band){
	for (var i = 0; i < band.length; i++) {
		gessedWord.push("_");
	}
	return gessedWord;
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
			if ((/^[a-zA-Z]/.test(char)||char==" ") && (char.length===1)){
				char=char.toUpperCase();
				var guess = new Letter(char, compare(char));
				if (guess.alreadyGuessed===false) {
					findChar(guess.char);
				}
				else{
					inquire();
				}
			}
			else {
				console.log("Please choose just one letter between A-Z");
				inquire();
			}
		})
}

function startGame(){
	console.log("Welcome to the HangGame!");

	var newBand=assignBand();
	
	word = new Word(newBand, emptyArray(newBand));

	console.log(word.band);
	console.log(word.guessedWord);

	inquire();
}

function findChar(sample){
	if ((word.band).indexOf(sample)!==-1) {
		for (var i = 0; i < word.band.length; i++) {
			if (word.band[i]===sample) {
				word.guessedWord[i]=sample;
				// word.band[i]="#";
				miniPoint++;
			}
		}
		inquire();
		console.log(word.guessedWord);
		console.log(word.band);
		if (word.band.length===miniPoint) {



		}
	}
	else{
		console.log("you missed!")

		charCounter--;
		console.log(charCounter);
		if (charCounter>0) {
			inquire();
		}
		else{
			console.log("Sorry you are hanged")
		}
	}

}


startGame();