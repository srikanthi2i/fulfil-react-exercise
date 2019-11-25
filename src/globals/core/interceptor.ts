import axios from 'axios';

const { REACT_APP_BASE_URL } = process.env;

export const client = axios.create({
  baseURL: `${REACT_APP_BASE_URL}`
});

/**
* Setup defaults and request response interceptors for axios on load
* @param store
*/
// eslint-disable-next-line no-unused-vars
export const setupInterceptors = (store: any) => {
// Default settings for axios request
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.validateStatus = () => true;
  client.interceptors.request.use(
    config => {
      return config;
    }, error => Promise.reject(error)
  );

  client.interceptors.response.use(response => {
    if (response.status === 200 || response.status === 201 || response.status === 202) {
      return response.data;
    }
  }, error => {
    console.log(error);
  });
};