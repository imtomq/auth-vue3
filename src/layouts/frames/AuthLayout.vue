<template>
  <slot v-if="isLoggedIn() || $route.path !== '/login'" />
</template>
<script>
import { useAuthStore } from "@/stores/auth.js";
import { isLoggedIn } from "@/utils/auth.js";
export default {
  name: "AuthLayout",
  setup() {
    const authStore = useAuthStore();

    return {
      authStore,
      isLoggedIn,
    };
  },
  created() {
    this.authStore.getUserData();
  },
};
</script>
