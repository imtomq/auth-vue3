<script>
import { useAuthStore } from '@/stores/auth.js';
export default {
  name: 'LoginPage',
  setup() {
    const authStore = useAuthStore();

    function onClickLogin() {
      authStore.login();
    }

    return {
      onClickLogin,
      authStore,
    };
  },
};
</script>

<template>
  <div v-if="authStore.loading">LOADING</div>
  <div v-else>
    <h1>Login Page</h1>
    <button @click="onClickLogin">Login</button>
  </div>
</template>
