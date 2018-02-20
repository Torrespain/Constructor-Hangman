// index.js: The file containing the logic for the course of the game, which depends on Word.js and:

// Randomly selects a word and uses the Word constructor to store it
// Prompts the user for each guess and keeps track of the user's remaining guesses

var Letter = require ("./Letter");
var Word = require ("./Word");

var guessedBands=[];
var gessedWord=[];

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


startGame();

function startGame(){
	console.log("Welcome to the HangGame!");

	
	var newBand=assignBand();
	
	var test = new Word(newBand, emptyArray(newBand));

	console.log(test.band);
	console.log(test.guessedWord);
}


