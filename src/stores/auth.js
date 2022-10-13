import { ref } from 'vue';
import { defineStore } from 'pinia';
import { useHttp } from '@/services/http.js';

export const useAuthStore = defineStore('authStore', () => {
  const user = ref({});
  const loading = ref(false);
  const isLoggedIn = ref(false);

  const $http = useHttp();

  async function login() {
    loading.value = true;
    // I am using json-server, so everything is more easier = )))), I use GET method, instead POST method for login action.
    const response = await $http.get('/login');
    if (response && response.data) {
      isLoggedIn.value = true;
      user.value = response.data.user;
      localStorage.setItem('access-token', response.data['access-token']);
    }
    loading.value = false;
  }

  return {
    user,
    loading,
    login,
  };
});
