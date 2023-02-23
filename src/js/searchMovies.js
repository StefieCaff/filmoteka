per_page = 20

// function that calls on the api to return movie searches 
async function searchMovies(query) {
    const baseURL = `https://api.themoviedb.org/3/search/movie?`;
    const key = ``;
    page = 1; 
                // insert api function here
    const response = await fetchMovies(baseURL, key, query, page, per_page, total_pages) 
    const movies = response.data.results

    if(movies.length !== 0) {
        // render and show the movies
        showMovies(movies)
        const nextPage = page + 1; 
        const previousPage = page -1; 

    }

}


