var Letter = require ("./Letter");
var Word = require ("./Word");
var storedArray = require ("./Letter");

var guessedBands=[];
var guessedWord=[];
var guessedArray=[];

var charCounter=7;
var word={};
var guess={};

var miniPoint=0; //User gets one minipoint every time the letter matches

var bandObject={
	0: "RedHot",
	1: "TheBeattles",
	2: "Radiohead",
	3: "LinkinPark",
	4: "IllNino",
	5: "ModestMouse",
	6: "TheNational",
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
		guessedWord.push("_");
	}
	return guessedWord;
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
			guessedArray.push(char);
			if ((/^[a-zA-Z]/.test(char)/*||char===" "*/) && (char.length===1)){
				char=char.toUpperCase();
				guess = new Letter(char, compare(char));
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
	console.log("\nWelcome to the HangGame!\n");
	var newBand=assignBand();
	word = new Word(newBand, emptyArray(newBand));
	// console.log(word.band);
	console.log(word.guessedWord);
	inquire();
}

function nextWord(){
	guess.reset();
	guess.guessed=false;
	guess.alreadyGuessed=false;
	storedArray=[];
	guessedBands=[]; //If I dont empty the array I get an error after 3 or 4 words, this fixes it but sometimes the word repeats
	guessedWord=[];
	guessedArray=[];
	charCounter=7;
	miniPoint=0;

	var newBand=assignBand();
	word = new Word(newBand, emptyArray(newBand));
	// console.log(word.band);
	console.log(word.guessedWord);

}

function findChar(sample){
	if ((word.band).indexOf(sample)!==-1) {
		for (var i = 0; i < word.band.length; i++) {
			if (word.band[i]===sample) {
				word.guessedWord[i]=sample;
				miniPoint++; 
			}
		}
		inquire();
		console.log(word.guessedWord);
		// console.log(word.band);
		if (word.band.length===miniPoint) {//If minipoint===word lenght it means the word is completed
			console.log("\nGreat job! \nLoading next word...\n");
			console.log("------------------------------------------\n");
			nextWord();
		}
	}
	else{
		console.log("You missed!");
		charCounter--;
		console.log("Remaining guesses: " + charCounter+"\n");
		if (charCounter>0) {
			inquire();
		}
		else{
			console.log("\nSorry you are hanged")
			console.log("The word was: " + word.band);
		}
	}

}

startGame();