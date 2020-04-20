import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-e0209.firebaseio.com/'
});

export default instance;