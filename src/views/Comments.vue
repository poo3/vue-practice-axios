<template>
  <div id="app">
    <h3>掲示板に投稿する</h3>
    <label for="name">ニックネーム：</label>
    <input type="text" id="name" v-model="name" />
    <br /><br />
    <label for="comment">コメント：</label>
    <textarea id="comment" v-model="comment" cols="30" rows="10"></textarea>
    <br /><br />
    <button @click="createComent">コメントを送信</button>
    <h2>掲示板</h2>
    <div v-for="post in posts" :key="post.name">
      <div>name:{{ post.fields.name.stringValue }}</div>
      <div>コメント:{{ post.fields.comment.stringValue }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      comment: "",
      posts: [],
    };
  },
  methods: {},
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
