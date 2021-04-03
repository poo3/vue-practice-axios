import Vue from "vue";
import Vuex from "vuex";
import axios from "../axios-auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
  },
  mutations: {
    updateIdToken(state, idToken) {
      state.idToken = idToken;
    },
  },
  actions: {
    login({ commit }, authData) {
      axios
        .post(process.env.VUE_APP_FIREBASE_SIGNIN_KEY, {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true,
        })
        .then((response) => {
          commit("updateIdToken", response.data.idToken);
        });
    },
    register({ commit }, authData) {
      axios
        .post(process.env.VUE_APP_FIREBASE_SIGNUP_KEY, {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true,
        })
        .then((response) => {
          commit("updateIdToken", response.data.idToken);
        });
    },
  },
});
