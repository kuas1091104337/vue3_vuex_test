<script>
import { inject, toRefs } from "vue";
export default {
  setup() {
    const mapStore = inject('mapStore'),
          { state } = mapStore;
    console.log(123);
    return { ...toRefs(state) };
  },
};
</script>

<template>
  <div class="content">
    <h1>count: {{ count }}</h1>
    <button>add</button>
    <button>remove</button>
  </div>
</template>