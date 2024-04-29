import axios from 'axios';

const api = axios.create({
  baseURL: 'https://keyclock.cluster-dev.ioasys.com.br/',
});

export default api;
