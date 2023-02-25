/* roughdraft api call fetches movie object based on search
and logs it to console  */

/* this does not work yet*/

import tmdbSearch from "./tmdb-search";

export default async function getSearch() {
 
  try {
      const { data } = await tmdbSearch.get(`search/movie`);
      const movies = (data.results);
      console.log(movies);
  
        if (movies.length == 0) {
            //gallery.innerHTML = "";
            console.log("Sorry, there are no movies matching your search query. Please try again.");
            return;
        }

        if (!response.ok) {
            if (response.status == 404) {
              //gallery.innerHTML = "";
             // Notify.failure('Oops, no matches, try another search.')
              throw Error(response.statusText);
          }
        }
      
        if (response.status == 200) {
          //renderGallery(images.hits);
          //console.log(images.hits);
        }
     
      return movies;
    }
    
    catch (error) {
      console.log(error.message);
    }
};
