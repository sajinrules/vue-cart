import axios from "axios";
import Auth from '@/services/authService';
// https://medium.com/canariasjs/vue-api-calls-in-a-smart-way-8d521812c322
// You can use your own logic to set your local or production domain
let config = {
  baseURL: 'http://localhost:3000/'
};
const httpClient = axios.create(config);

/** Auth token interceptors */
const authInterceptor = config => {
  console.log('authInterceptor:', config);
  /** TODO: Add auth token */
  if(config.url.includes('login')){
    return config;
  } else {
    let token = Auth.getToken()
    config.baseURL = `${config.baseURL}api/`
    config.headers.Authorization =  `Bearer ${token}`;
    return config;
  }
  
};

httpClient.interceptors.request.use(authInterceptor);
httpClient.interceptors.response.use(
  response => {
    console.log('response interceptors', response)
    /** TODO: Add any response interceptors */
    return response;
  },
  error => {
    console.log('response interceptors', error)
    /** TODO: Do something with response error */
    return Promise.reject(error);
  }
);

export default httpClient;