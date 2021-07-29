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

    //Up to step 6

};