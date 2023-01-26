class Letter {
    constructor(letter) {
        this.letter = letter;
        const regex = new RegExp('[a-z0-9A-Z]')
        if (regex.test(this.letter)) {
            this.visible = false;
        } else {
            this.visible = true;
        };
    }
    toString(){
        if (this.visible === true) {
            return this.letter
        } else {
            return '_'
        }
    }
    guess(guess){
        if (guess.toLowerCase() === this.letter.toLowerCase()){
           this.visible = true;
            return true;
        } else {
            return false;
        }
    }
    getSolution(){
        return this.letter;
    }
}

module.exports = Letter;
