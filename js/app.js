/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Eric Quattropani
 * app.js */

var game;
const start = document.querySelector("#btn__reset");

start.addEventListener("click", () => {
    game = new Game();
    game.startGame();
})

/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
const keys = document.getElementById("qwerty");

keys.addEventListener("click", (key) => {
    const clicked = key.target;
    if (clicked.tagName === 'BUTTON') {
    game.handleInteraction(key.target)
    console.log(clicked);
    }
})