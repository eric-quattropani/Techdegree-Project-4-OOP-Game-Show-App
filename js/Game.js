/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
//https://github.com/gintareauks/oop_game-v2/blob/master/js/Game.js

class Game {
    constructor() {
        this.missed = 0;
        //found it easier to write out the pgrases like this (clean up p)
        this.phrases = [
            new Phrase('A Dime a Dozen'),
            new Phrase('A Piece of Cake'),
            new Phrase('An Arm and a Leg'),
            new Phrase('Barking Up The Wrong Tree'),
            new Phrase('Beating Around the Bush')
        ];
        this.activePhrase = null;
    }
    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return randomPhrase;
    };
    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        //hiding div element
        const overlay = document.getElementById("overlay");
        overlay.style.display = "none";

        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();

    };

    // UP TO Part II

    handleInteraction(key) {
        // key.disabled = true; check if this is needed

        if (!this.activePhrase.checkLetter()) {
        }
    };

}