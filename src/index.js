
// import getMovies from './js/api-s/get-movies';
// import getById from './js/api-s/get-by-id';

import { spinnerPlay, spinnerStop } from './js/spinner';
import { scrollFunction } from './js/button-up';

import { showHome, showLibrary } from './js/show-elements-s';
import { refs } from './js/refs'
import './js/gallery';
//import './js/library';
import './js/local-storage';
import './js/queue-library';
import './js/watched-library';
import './js/button-up';
import './js/open-modal-library';
import './js/pagination';
import './js/paginationLocalStorage';





// import './js/local-storage';

// //-------------DOM------------------
// const form = document.querySelector('form#search-form');
// const userInput = document.querySelector('input#search-query');
//  const homeLink = document.querySelector('a#toggleHome');
//  const libraryLink = document.querySelector('a#toggleLibrary');
// const watchedBtn = document.querySelector('.watched-btn');
// const queueBtn = document.querySelector('.queue-btn');

// //--------------API-----------------------
// const API_KEY = 'api_key=cc8aceddc1acb4be5d6024b16563f8b2';
// const BASE_URL = 'https://api.themoviedb.org/3';
// const IMG_URL = 'https://image.tmdb.org/t/p/w500';

// const apiTrending = BASE_URL + '/trending/all/day?' + API_KEY;
// const apiSearch = BASE_URL + '/search/movie?' + API_KEY;
// const params = '&language=en-US&page=1&include_adult=false&total_pages=100'
// const searchParams = '&language=en-US&query=';


// const movieId = '';
// const apiId = BASE_URL + `movie/${movieId}?` + API_KEY; 


// // movie id for testing 82856
// //-------------fetch trending movies---------------------
// getMovies(apiTrending + params);


// //-------------get searched movies----------------------
// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const input = userInput.value.trim();
//     if (input) {
//         console.log(input)
//         getMovies(apiSearch + searchParams +input + '&page=1&include_adult=false');  
//     } else {
//         getMovies(apiTrending + params);
//     }
    
// });

// launch spinner on boot
spinnerPlay();

/// ending spinner when loading
window.addEventListener('load', function (e) {
  spinnerStop();
});

// trigger up button on scroll
window.addEventListener('scroll', scrollFunction);

// //-------home and library show event listeners----------

refs.homeLink.addEventListener('click', (e) => {
    e.preventDefault();
    showHome();
});

refs.libraryLink.addEventListener('click', (e) => {
    e.preventDefault();
    showLibrary();
});
