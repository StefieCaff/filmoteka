/* roughdraft api call uses axios instance to fetch
trending movies array of 20 
and logs it to console */

import tmdbTrending from "./tmdb-trending";



export default async function getTrending() {

    const {data} = await tmdbTrending.get('trending/all/day')
    const movies = (data.results)
    console.log(movies);
    return movies;
};

