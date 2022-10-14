import { ref } from "vue";
import { defineStore } from "pinia";
import { $http } from "@/services/http.js";
import router from "@/router/index.js";
import { expiredToken } from "@/utils/auth.js";

export const useAuthStore = defineStore("authStore", () => {
  const user = ref({});
  const loading = ref(false);

  async function login() {
    loading.value = true;
    // I am using json-server, so everything is more easier = )))), I use GET method, instead POST method for login action.
    // After 1 minutes, the token will expire. This is only use to demo. ^^
    const response = await $http.get("/login");
    if (response && response.data) {
      user.value = response.data.user;
      localStorage.setItem("access-token", response.data["access-token"]);
      router.push({ name: "Home" });
      expiredToken();
    }
    loading.value = false;
  }

  async function getUserData() {
    const response = await $http.get("/user");
    if (response && response.data) {
      user.value = response.data;
    }
    loading.value = false;
  }

  return {
    user,
    loading,
    login,
    getUserData,
  };
});
