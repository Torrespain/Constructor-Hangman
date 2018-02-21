// Letter.js: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

// A string value to store the underlying character for the letter
// A boolean value that stores whether that letter has been guessed yet
// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly


var storedArray=[];

var Letter = function(char, guessed){
	this.char=char;
	this.guessed=guessed;
	this.alreadyGuessed=false;
	this.reset= function(){
		storedArray = [];
	}
	if (this.guessed===false && storedArray.indexOf(this.char)===-1){
		console.log("\nNot gessed!");
		storedArray.push(this.char);
	}
	else {
		console.log("\nOps! you already guessed that letter, try with another!");
		this.alreadyGuessed=true;
	}
	console.log("Guessed so far: " + storedArray);
}

module.exports = Letter;