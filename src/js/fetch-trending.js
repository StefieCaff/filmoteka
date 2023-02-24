/* roughdraft api call fetches entire object 
and logs it to console */

export default async function fetchTrending() {
    const URL = "https://api.themoviedb.org/3/trending/all/day?api_key=cc8aceddc1acb4be5d6024b16563f8b2"
    const response = await fetch(URL);
    const movies = await response.json();
    console.log(movies);
    return movies;
};

