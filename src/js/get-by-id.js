/* roughdraft api call fetches movie object based on id
and logs it to console 
id generated from trending list for testing needs link
li of movie */



export default async function getById(url) {
    apiId = url; 
   try {
        const response = await fetch(url);
        const movies = await response.json();
        console.log(movies.results);
   } catch (error) {
        console.log(error.message);
    }

};