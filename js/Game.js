/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

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

        //start a new game
        // overlay.style.display = 'none'
        // const randomPhrase = this.getRandomPhrase()
        // this.activePhrase = randomPhrase
        // this.activePhrase.addPhraseToDisplay()   

    }

    // resetGame() {
	// 	const keyList = document.querySelector('#phrase ul');
	// 	const keys = document.getElementsByClassName('key');
	// 	const buttonReset = document.getElementById('btn__reset');
	// 	const scoreboard = document.querySelector('#scoreboard ol').children;
	// 	//const heartPng = scoreboard[i].querySelector('img');
	// 	keyList.innerHTML = '';
	// 	for (let i = 0; i < keys.length; i++) {
	// 		keys[i].className = 'key';
	// 		keys[i].disabled = false
	// 	}
	// 	buttonReset.textContent = 'Play Again';
	// 	for (let i = 0; i < scoreboard.length; i++) {
	// 		scoreboard[i].querySelector('img').src = 'images/liveHeart.png';
	// 	}
	// }



    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
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
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver() {
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'inline';
        const gameOverShow = document.querySelector('#game-over-message');

        if (this.checkForWin()) {
            gameOverShow.textContent = 'Nice one, you win!'
            overlay.className ='win'
            this.resetGame();   
        } else {
            gameOverShow.textContent = 'Sorry, you lost the game!'
            overlay.className ='lose'  
            this.resetGame();        
        }

    }

    //this needs checking  https://github.com/mifch21/Project-4-OOP-Game-Show/blob/main/js/Game.js
    resetGame() {
        const ul = document.querySelector('#phrase ul');
        ul.innerHTML = '';
        key.innerHTML = '';

    }

    // running game.gameOver(true) shows a lost game! This may need fixing

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

}