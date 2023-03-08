
import axios from 'axios';
import genreList from '../API/genres-list';
import { getGenres } from '../API/get-genres';
import { showError, hideError } from "../show-elements";
import home from '../home'; 


axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const apiSearch = '/search/movie?'
const language = 'en-US';


export default async function getMovies(url) {

    
    try {
        const response = await fetch(url);
        const movies = await response.json();
        console.log(movies.results);
       
    }

    };