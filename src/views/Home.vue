<template>
  <about>
    Slot's about page
    <template v-slot:test> slot has name atribute</template>
  </about>
</template>

<script>
import About from "@/views/About.vue";
export default {
  name: "MyHome",
  components: { About },
};
</script>
