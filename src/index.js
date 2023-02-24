import './js/fetch-trending';
import fetchTrending from './js/fetch-trending';
import './js/genre-names';


// API Key (v3 auth)
const API_KEY = "cc8aceddc1acb4be5d6024b16563f8b2"

//API Read Access Token (v4 auth)
const READ_ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYzhhY2VkZGMxYWNiNGJlNWQ2MDI0YjE2NTYzZjhiMiIsInN1YiI6IjYzZjdmMDcxNjljNzBmMDA4NmZmOGFmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UmaczOqz8rSwbuSqKqU5b73ssBIs_qIfMYg9CS5XDaQ"



// on load api call trending movies by day
window.addEventListener("load", fetchTrending);