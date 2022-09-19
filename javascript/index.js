import { changeHiddenAttribute } from './title.js';

/**
 * define all global elements by querySelector
 */
const switcher = document.querySelector('.btn');

/**
 * define all event listeners
 */

switcher.addEventListener('click', () => {
    changeHiddenAttribute(document.querySelector('.title'));
})