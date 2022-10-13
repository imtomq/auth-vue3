import { ref } from 'vue';
import { defineStore } from 'pinia';
import { $http } from '@/services/http.js';
import router from '@/router/index.js';

export const useAuthStore = defineStore('authStore', () => {
  const user = ref({});
  const loading = ref(false);
  const isLoggedIn = ref(false);

  async function login() {
    loading.value = true;
    // I am using json-server, so everything is more easier = )))), I use GET method, instead POST method for login action.
    const response = await $http.get('/login');
    if (response && response.data) {
      isLoggedIn.value = true;
      user.value = response.data.user;
      localStorage.setItem('access-token', response.data['access-token']);
      router.push({ name: 'Home' });
    }
    loading.value = false;
  }

  return {
    user,
    loading,
    login,
    isLoggedIn,
  };
});
