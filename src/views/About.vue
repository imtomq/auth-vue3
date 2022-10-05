<script>
import { reactive, nextTick, ref } from 'vue';
export default {
  name: 'MyAbout',
  props: {
    title: {
      type: String,
      default: 'About Page',
      required: true,
    },
    object: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  setup() {
    const state = reactive({ count: 0 });
    const count = ref(0);

    async function increament() {
      state.count++;
      count.value++;
      // To wait for the DOM update,,
      nextTick(() => {
        const el = document.getElementById('title');
        el.style.color = 'red';
      });
    }

    return {
      state,
      increament,
    };
  },
};
</script>

<template>
  <h1 id="title">{{ title }}</h1>
  <h2>state.count: {{ state.count }}</h2>
  <h2>count: {{ count }}</h2>
  <button @click="increament">INCREAMENT</button>
</template>
