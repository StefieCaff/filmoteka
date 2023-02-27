/* roughdraft api call fetches first page array of 20  movies
and logs it to console */

export default async function getMovies(url) {

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.results);
            // movies markup function(data.results) map and join
            //create template literal and object with needed values
            //start with blank innerHTML
    })
};

