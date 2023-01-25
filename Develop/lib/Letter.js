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
}

module.exports = Letter;
