import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/vitorcaminha/gorestaurant-web',
});

export default api;
