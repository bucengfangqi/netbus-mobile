import Vue from "vue";

import axios from "axios";
import {
  Notify
} from 'vant';

Vue.prototype.$http = axios;

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers.AccessToken = localStorage.getItem("AccessToken") || "null";
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    console.log(response.data);
    if (response.data.status !== "1") {
      Notify({
        type: "danger",
        message: response.data.message
      });
    }
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);