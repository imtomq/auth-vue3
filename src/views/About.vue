<script>
import { reactive, nextTick, ref, watch } from 'vue';
import { useMouse } from '@/views/mouse.js';
import { useRoute } from 'vue-router';
import { useExampleStore } from '@/stores/example.js';

export default {
  name: 'MyAbout',
  props: {
    title: {
      type: String,
      default: 'About Page',
    },
  },
  setup() {
    const state = reactive({ count: 0, show: true, loading: true });
    const count = ref(0);
    const { x, y } = useMouse();

    const counter = useExampleStore();

    watch(
      () => useRoute.params,
      () => {
        fetchData();
      },
      { immediate: true }
    );

    async function fetchData() {
      setTimeout(() => {
        state.loading = false;
      }, 1000);
    }

    async function increament() {
      state.count++;
      count.value++;
      state.show = !state.show;
      // counter.increment();
      counter.$patch({ count: counter.count + 2 });
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
      counter,
    };
  },
};
</script>

<template>
  <div v-if="state.loading">LOADING</div>
  <div v-else class="bg-slate-300">
    <h1 id="title">{{ title }}</h1>
    <h1 id="title">{{ counter.count }}</h1>
    <slot />
    <Transition name="bounce">
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
