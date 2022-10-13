import { inject } from 'vue';
import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'development' ? process.env.VUE_APP_API : '';
const injectionKey = Symbol('$http');

const instance = axios.create({
  baseURL,
});
instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { instance as $http };
export const useHttp = () => inject(injectionKey);
export const httpPlugin = {
  install(app) {
    app.provide(injectionKey, instance);
    app.config.globalProperties.$http = instance;
  },
};
