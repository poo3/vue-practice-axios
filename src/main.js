import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import router from "./router";
import store from "./store/index";

Vue.config.productionTip = false;
axios.defaults.baseURL = process.env.VUE_APP_FIRESTORE_URL;

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
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
