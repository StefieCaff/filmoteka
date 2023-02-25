//import './js/fetch-trending';
import getTrending from './js/get-trending';
import getById from './js/get-by-id';
import getSearch from './js/get-search';
import './js/genre-names';

const userInput = document.querySelector('input#search-query');
const form = document.querySelector('form');

// on load api call trending movies by day
window.addEventListener("load", getTrending);


const handleSubmit = e => {
    e.preventDefault();
    let input = userInput.value.trim();
    let response = '';
    if (input.value === "") {
        return;
    };
    console.log(input);
    return response = getSearch(input);
};

form.addEventListener('submit', handleSubmit);