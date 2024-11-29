import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL:
  //   Platform.OS === 'android'
  //     ? 'http://10.0.2.2:3030'
  //     : 'http://localhost:3030',
  baseURL: 'http://10.0.2.2:3030',
  withCredentials: true,
});

export default axiosInstance;
