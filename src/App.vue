<template>
  <auth-layout>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/news">News (requires auth)</router-link>
  </auth-layout>
  <router-view></router-view>
</template>
<script>
import AuthLayout from "@/layouts/frames/AuthLayout.vue";
// import { useHttp } from '@/services/http.js';
export default {
  name: "MyApp",
  setup() {
    // const $http = useHttp();
    async function fetchData() {
      const b = '';
      console.log(b)
      // const response = await $http.get('/posts/');
      // console.log(response);
    }
    return {
      fetchData,
    };
  },
  created() {
    this.fetchData();
  },
  components: { AuthLayout },
};
</script>
