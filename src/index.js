//import './js/fetch-trending';
import fetchTrending from './js/fetch-trending';
import fetchById from './js/fetch-by-id';
import './js/genre-names';


// on load api call trending movies by day
window.addEventListener("load", fetchTrending);