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