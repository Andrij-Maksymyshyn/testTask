import axios from 'axios';

axios.defaults.baseURL = 'https://api.chucknorris.io';

export async function fetchJoke() {
    return await axios.get(`/jokes/random`);     
};

