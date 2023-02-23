// buttons & tags
const prev = document.getElementsByClassName('prev');
const current = document.getElementsByClassName('current');
const next = document.getElementsByClassName('next');

const currentPage = 1; 
const nextPage = 2; 
const previousPage = 3; 
let total_pages = 100;
let lastURL = ''

// pagination function for previous page movie searches
async function previousPage() {
    const baseURL = ``
    const key = ``
            //insert api function here
    const response = await fetchMovies(baseURL, key, query, page, per_page)
    const movies = response.data.results

    if(movies && page !== 1) {
        page -= 1
        render(movies)
    }
}