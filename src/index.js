
import getMovies from './js/get-movies';
import getById from './js/get-by-id';
import getMovieDetails from './js/get-movie-details';
import './js/genre-names';
import { showHome, showLibrary } from './js/show-elements';

//-------------DOM------------------
const form = document.querySelector('form#search-form');
const userInput = document.querySelector('input#search-query');
const homeLink = document.querySelector('a#toggleHome');
const libraryLink = document.querySelector('a#toggleLibrary');
const watchedBtn = document.querySelector('.watched-btn');
const queueBtn = document.querySelector('.queue-btn');

//--------------API-----------------------
const API_KEY = 'api_key=cc8aceddc1acb4be5d6024b16563f8b2';
const BASE_URL = 'https://api.themoviedb.org/3';
const apiTrending = BASE_URL + '/trending/all/day?' + API_KEY;
const apiSearch = BASE_URL + '/search/movie?' + API_KEY;
const trendingParams = '&language=en-US&page=1&include_adult=false&total_pages=100'
const searchParams = '&language=en-US&query=';

//-------------fetch trending movies---------------------
getMovies(apiTrending + trendingParams);


//-------------get searched movies----------------------
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = userInput.value.trim();
    if (input) {
        console.log(input)
        getMovies(apiSearch + searchParams +input + '&page=1&include_adult=false');  
    } else {
        getMovies(apiTrending);
    }
    
});

//-------home and library show event listeners----------

homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    showHome();
});

libraryLink.addEventListener('click', (e) => {
    e.preventDefault();
    showLibrary();
});

