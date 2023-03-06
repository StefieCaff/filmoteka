import { showError, hideError } from "../show-elements";
import '../genre-names'
/* roughdraft api call fetches first page array of 20  movies
and logs it to console */

export default async function getMovies(url) {
    //lastUrl = url;
    try {
        const response = await fetch(url);
        const movies = await response.json();
        console.log(movies.results);
        if (movies.results.length !== 0) {
            // const {
            //   currentPage = movies.page,
            //   nextPage = movies.page + 1,
            //   prevPage = movies.page - 1,
            //   totalPages = movies.total_pages,
            //   title = movies.results.title,
            //   date = movies.results.release_date
            // } = movies
             //insert markup function
            
            hideError(); //adds hidden class
        } else {
            showError(); //removes hidden class
        }
    } catch (error) {
        console.log(error.message);
    }
};

