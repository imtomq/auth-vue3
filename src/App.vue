<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>
<script>
export default {
  name: 'MyName',
  created() {
    console.log(process.env);
  },
};
</script>
