import axios from 'axios';

export function getTodosFromAPI() {
    return axios.get("https://jsonplaceholder.typicode.com/todos");
} 