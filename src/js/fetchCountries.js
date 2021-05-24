import { BASE_URL } from './constants';
import axios from 'axios';

axios.defaults.baseURL = BASE_URL;

export default function fetchCountries(searchQuery) {
    return axios(`/${searchQuery}`).then(response => response.data);
}