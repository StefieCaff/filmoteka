
import getMovies from './js/get-movies';
import getById from './js/get-by-id';
import getMovieDetails from './js/get-movie-details';
import './js/genre-names';

//-------------DOM------------------
const form = document.querySelector('form');
const userInput = document.querySelector('input#search-query');

//--------------API-----------------------
const API_KEY = 'api_key=cc8aceddc1acb4be5d6024b16563f8b2';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_TRENDING = BASE_URL + '/trending/all/day?' + API_KEY;
const API_SEARCH = BASE_URL + '/search/movie/?' + API_KEY;


getMovies(API_TRENDING);

// window.addEventListener("load", getMovies);


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = userInput.value;
    if (input) {
        console.log(input)
        getMovies(API_SEARCH + '&query=' + input);  
    } else {
        getMovies(API_TRENDING);
    }
    
});