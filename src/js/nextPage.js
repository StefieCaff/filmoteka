

// pagination function for next page movie searches
async function nextPage() {
    const baseURL = ``
    const key = ``
            //insert api function here
    const response = await fetchMovies(baseURL, key, query, page, per_page, total_pages)
    const movies = response.data.results
// only go to next page if page is less than total pages
    if(movies && page < total_pages) {
        page += 1
        render(movies)
    }
}