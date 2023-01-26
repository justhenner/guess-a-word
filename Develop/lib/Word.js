const Letter = require("./Letter");

class Word  {
    constructor(word) {
        this.letters = word.split("").map(letter => new Letter(letter));
    };
    
    guessLetter(guess){
        let foundLetter = false;
        this.letters.forEach( letter => {
           if(letter.guess(guess)) {
                foundLetter = true;
            } 
             
            
        });
        return foundLetter;
        // letter = false;
        // for (var i = 0; i < this.letters.length; i ++){
        //     if (this.letters[i] == letter) {
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }
        // if (this.letters.includes(guess)){
        //     return true;
        // } else {
        //     return false;
        // }
    };

    guessedCorrectly() {
        // if (this.letters.forEach(guessLetter(letter))){
        //     return true;
        // }
        if(this.letters.every((letter)=> letter.visible)) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Word;
