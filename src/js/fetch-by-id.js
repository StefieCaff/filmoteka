/* roughdraft api call fetches movie object based on id
and logs it to console 
id generated from trending list for testing needs link
li of movie */

import tmdbById from "./tmdb-id";

export default async function fetchById() {
    const id = 1077280;
    const movies = await tmdbById.get(`/movie/${id}`)
    
    console.log(movies);
    return movies;

};