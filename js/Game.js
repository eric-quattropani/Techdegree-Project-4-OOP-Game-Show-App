/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Eric Quattropani
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        //found it easier to write out the pgrases like this (clean up p)
        this.phrases = [
            new Phrase('A Dime a Dozen'),
            new Phrase('A Piece of Cake'),
            new Phrase('When in Rome'),
            new Phrase('Barking Up The Wrong Tree'),
            new Phrase('Beating Around the Bush')
        ];
        this.activePhrase = null;
    }
    /**
    * Selects random phrase from phrases property
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
    }

    /**
    * Checks for winning move
    */
    checkForWin() {
        const hidden = document.querySelectorAll('.hide');
        
        if (hidden.length > 0) {
            return false;
        } else {
            return true;
        }
    }


    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
     removeLife() {
        if (this.missed < 5) {
            document.querySelectorAll('img')[this.missed].src = 'images/lostHeart.png'
            this.missed++
        } else {
            this.gameOver()
        }
    }

    /**
    * Resets the game when the player clicks 'Play Again'
    */
    resetGame() {
        const ul = document.querySelector("ul")
        ul.innerHTML = "";
        this.missed = 0;
        const keyboard = document.querySelectorAll(".key");
        const heart = document.querySelectorAll('.tries img');

        for (let i = 0; i < keyboard.length; i++) {
            if (keyboard[i].disabled = true) {
                keyboard[i].disabled = false;
            }
            if (keyboard[i].classList.contains("chosen")) {
                keyboard[i].classList.remove("chosen")
            }
            if (keyboard[i].classList.contains("wrong")) {
                keyboard[i].classList.remove("wrong")
            }
        }

        for (let i = 0; i < heart.length; i++) {
            heart[i].src = `images/liveHeart.png`
        }
    }

    /**
    * Displays game over message
    */
    gameOver() {
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'inline';
        const gameOverShow = document.querySelector('#game-over-message');

        if (this.checkForWin()) {
            gameOverShow.textContent = 'Nice one, you win!'
            overlay.className ='win'
            
        } else {
            gameOverShow.textContent = 'Sorry, you lost the game!'
            overlay.className ='lose'  
        }
        this.resetGame();

    }

    handleInteraction(key) {
        key.disabled = true;

        if (!this.activePhrase.checkLetter(key.innerHTML)) {
            key.classList.add("wrong");
            this.removeLife();
        } else {
            key.classList.add("chosen");
            this.activePhrase.showMatchedLetter(key.innerHTML);

            if (this.checkForWin()) {
                this.gameOver(this.checkForWin);
            }
        }
    } 
};