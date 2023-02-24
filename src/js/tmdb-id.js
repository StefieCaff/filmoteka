import axios from "axios";

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        accept: 'application/json'
    },
    params: {
        api_key: 'cc8aceddc1acb4be5d6024b16563f8b2',
        language: "en-US"
    }

})