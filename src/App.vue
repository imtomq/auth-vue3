<template>
  <div id="nav">
    <router-link to="/login">Login</router-link> |
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/news">News (requires auth)</router-link>
  </div>
  <router-view></router-view>
</template>
<script>
// import { useHttp } from '@/services/http.js';
export default {
  name: 'MyApp',
  setup() {
    // const http = useHttp();

    async function fetchData() {
      // const response = await http.get('/posts/');
      // console.log(response);
    }
    return {
      fetchData,
    };
  },
  created() {
    this.fetchData();
  },
};
</script>
