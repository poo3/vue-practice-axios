import Vue from "vue";
import App from "./App.vue";
import axios from "axios";

Vue.config.productionTip = false;
axios.defaults.baseURL =
  "https://firestore.googleapis.com/v1/projects/http-vuejs-77e10/databases/(default)/documents";

axios.interceptors.request.use(
  (config) => {
    console.log("interceptors reqest", config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    console.log("interceptors response", response);
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
