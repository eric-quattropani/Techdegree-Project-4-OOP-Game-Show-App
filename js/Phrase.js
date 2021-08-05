/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
    * Display phrase on game board
    */


    addPhraseToDisplay() {
        const ul = document.querySelector("ul");
        const characters = this.phrase.split("");
        
        characters.forEach((character) => {
            const li = document.createElement('li');
            li.textContent = character;
            ul.appendChild(li);

            if (character !== ' ') {
                li.classList.add("hide", "letter", `${character}`);
            } else {
                li.classList.add("space")
            }
        })
    }

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter) {
        return this.phrase.includes(letter);
    }

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter) {
        const gameLetters = document.getElementsByClassName("letter");
        for (let i = 0; i < gameLetters.length; i++) {
            if (gameLetters[i].classList.contains(letter)) {
                gameLetters[i].classList.add('show')
                gameLetters[i].classList.remove('hide')
            }
        }
        

        //try for loop if this doesn't work
        // gameLetters.forEach((letter) => {
        //     if (gameLetters[i].classList.contains(letter)) {
        //         gameLetters[i].classList.remove("hide");
        //         gameLetters[i].classList.add("show");
        //     }
        // })
    }
};