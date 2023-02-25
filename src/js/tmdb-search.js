/* this does not work yet*/

import axios from "axios";

const form = document.querySelector('.form');
let input = document.querySelector('.form .input');
console.log(input.innerHTML);

export default axios.create({


    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        accept: 'application/json'
    },
    params: {
        api_key: 'cc8aceddc1acb4be5d6024b16563f8b2',
        include_adult: false,
        page: 1,
        language: "en-US",
        query: `${input.innerHTML}`
        
    }
});