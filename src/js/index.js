import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO Damian🚀')

const glassCounter = document.querySelector('.glass__counter--js');
const addButton = document.querySelector('.button-add--js');
const removeButton = document.querySelector('.button-remove--js');
const key = new Date().toLocaleString().slice(0, 10);

let currentGlassCounter = 0;

const localStorageValue = localStorage.getItem(key);

if (localStorageValue) {
    currentGlassCounter = localStorageValue;
} else {
    localStorage.setItem(key, currentGlassCounter);
}

glassCounter.innerHTML = currentGlassCounter;

addButton.addEventListener('click', () => {
    currentGlassCounter++;
    glassCounter.innerHTML = currentGlassCounter;
    localStorage.setItem(key, currentGlassCounter);
});

removeButton.addEventListener('click', () => {
    if (currentGlassCounter > 0) {
        currentGlassCounter--;
    }
    glassCounter.innerHTML = currentGlassCounter;
    localStorage.setItem(key, currentGlassCounter);
});
