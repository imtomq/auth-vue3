<template>
  <h1>{{ title }}</h1>
  <h2>{{ state.count }}</h2>
  <button @click="increament">INCREAMENT</button>
</template>
<script>
import { reactive } from 'vue';
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
  setup(props, context) {
    console.log('props: ', props.title, 'context: ', context);
    const state = reactive({ count: 0 });

    function increament() {
      state.count++;
    }

    return {
      state,
      increament,
    };
  },
};
</script>
