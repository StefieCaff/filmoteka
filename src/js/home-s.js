import { refs } from './refs';


import getMovies from './api-s/get-movies';
import getById from './api-s/get-by-id';
import { showHome, showLibrary } from './show-elements-s';

//-------------DOM------------------
const form = document.querySelector('form#search-form');
const userInput = document.querySelector('input#search-query');
const homeLink = document.querySelector('a#toggleHome');
const libraryLink = document.querySelector('a#toggleLibrary');
const watchedBtn = document.querySelector('.watched-btn');
const queueBtn = document.querySelector('.queue-btn');

const apiTrending = BASE_URL + '/trending/all/day?' + API_KEY;
const apiSearch = BASE_URL + '/search/movie?' + API_KEY;
const params = '&language=en-US&page=1&include_adult=false&total_pages=100'
const searchParams = '&language=en-US&query=';


const movieId = '';
const apiId = BASE_URL + `movie/${movieId}?` + API_KEY; 


// movie id for testing 82856
//-------------fetch trending movies---------------------
getMovies(apiTrending + params);


//-------------get searched movies----------------------
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = userInput.value.trim();
    if (input) {
        console.log(input)
        getMovies(apiSearch + searchParams +input + '&page=1&include_adult=false');  
    } else {
        getMovies(apiTrending + params);
    }
    
});

//-------home and library show event listeners----------

homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    showHome();
});

libraryLinkHeader.addEventListener('click', (e) => {
    e.preventDefault();
    showLibrary();
});


