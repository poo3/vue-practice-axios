<template>
  <div id="app">
    <h3>新規登録</h3>
    <label for="name">Email:</label>
    <input type="text" id="email" v-model="email" />
    <br /><br />
    <label for="name">パスワード:</label>
    <input type="password" id="password" v-model="password" />
    <br /><br />
    <button @click="createUser">登録</button>
  </div>
</template>

<script>
import axios from "../axios-auth";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    createUser() {
      axios
        .post(process.env.VUE_APP_FIREBASE_SIGNUP_KEY, {
          email: this.email,
          password: this.password,
          returnSecureToken: true,
        })
        .then((response) => {
          console.log(response);
        });
      this.email = "";
      this.password = "";
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
