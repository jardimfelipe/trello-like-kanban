<script>
import { PerfectScrollbar } from 'vue2-perfect-scrollbar';
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css';

export default {
  data() {
    return {
      scrollbarOptions: {
        swipeEasing: true,
      },
    };
  },
  components: {
    PerfectScrollbar,
  },
};
</script>

<template>
  <perfect-scrollbar class="app-scrollbar" :options="scrollbarOptions">
    <slot />
  </perfect-scrollbar>
</template>

<style lang="scss" scoped>
@import './app-scrollbar';
</style>
