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
export default {
  name: 'MyApp',
};
</script>
