/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay() {
        const letter = this.phrase.split('');
        const phraseElement = document.querySelector('#phrase ul');
        phrase.forEach(character => {
            let listItems;
            if (character === ' ') {
                listItems = `<li class="space"></li>`
            } else {
                listItems = `<li class="hide letter ${char}" >${char}</li>`
            }
            phraseElement.innerHTML += listItems
        })
       
    }

    //Up to step 6

};