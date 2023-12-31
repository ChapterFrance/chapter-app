import axios from 'axios';
const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://api.devchapter.fr' : 'http://127.0.0.1:3500';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});