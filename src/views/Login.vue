<script>
import { useHttp } from '@/services/http.js';
export default {
  name: 'LoginPage',
  setup() {
    const $http = useHttp();
    async function onClickLogin() {
      const response = await $http.get('/login');
      console.log(response);
    }

    return {
      onClickLogin,
    };
  },
};
</script>

<template>
  <h1>Login Page</h1>
  <button @click="onClickLogin">Login</button>
</template>
