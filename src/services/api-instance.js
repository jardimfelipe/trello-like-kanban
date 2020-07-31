import axios from 'axios';

const domain = 'http://api.todo.ootz.com.br';
const axiosInstance = axios.create({
  baseURL: domain,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    apikey: '5E69761E868591E50DFC586C98ED4A0E62C9AB639991B314133C6BD392223CF0',
  },
});

export default axiosInstance;
