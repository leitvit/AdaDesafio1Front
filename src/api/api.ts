import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api/feedback'
});

export default api;