<script>
import { reactive, nextTick, ref } from 'vue';
import { useMouse } from '@/views/mouse.js';
export default {
  name: 'MyAbout',
  props: {
    title: {
      type: String,
      default: 'About Page',
    },
  },
  setup() {
    const state = reactive({ count: 0, show: true });
    const count = ref(0);
    const { x, y } = useMouse();

    async function increament() {
      state.count++;
      count.value++;
      state.show = !state.show;
      nextTick(() => {
        const el = document.getElementById('title');
        el.style.color = 'red';
      });
    }

    return {
      state,
      increament,
      x,
      y,
    };
  },
};
</script>

<template>
  <div class="bg-slate-300">
    <h1 id="title">{{ title }}</h1>
    <slot />
    <Transition :duration="550">
      <div v-if="state.show" class="bg-slate-600">
        <slot name="test" />
      </div>
    </Transition>
    <h2>state.count: {{ state.count }}</h2>
    <div />
    <h2>x: {{ x }}, y: {{ y }}</h2>

    <button class="rounded-sm border-solid border-2 m-2" @click="increament">
      INCREAMENT
    </button>
  </div>
</template>

<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
