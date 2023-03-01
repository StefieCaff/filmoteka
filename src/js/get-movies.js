import { showError, hideError } from "./show-elements";

/* roughdraft api call fetches first page array of 20  movies
and logs it to console */

export default async function getMovies(url) {

    fetch(url)
        .then(response => response.json())
        .then(data => {

            const movies = data.results;

            if (movies.length == 0) {
                showError();
                return;
            } else {
                console.log(data.results);
                hideError();
            }
            // movies markup function(data.results) map and join
            //create template literal and object with needed values
            //start with blank innerHTML
    })
};

