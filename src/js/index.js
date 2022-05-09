import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')

const glassCounter = document.querySelector('.glass__counter--js');
const addButton = document.querySelector('.button-add--js');
const removeButton = document.querySelector('.button-remove--js');

let currentGlassCounter = 0;

addButton.addEventListener('click', () => {
    currentGlassCounter++;
    glassCounter.innerHTML = currentGlassCounter;
});


removeButton.addEventListener('click', () => {

    if (currentGlassCounter > 0) {
        currentGlassCounter--;
    }
    glassCounter.innerHTML = currentGlassCounter;
});
