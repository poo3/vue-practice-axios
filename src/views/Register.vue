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
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    createUser() {
      this.$store.dispatch("register", {
        email: this.email,
        password: this.password,
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
