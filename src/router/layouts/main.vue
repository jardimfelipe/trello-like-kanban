<script>
import TopBar from '@/components/top-bar/top-bar.vue';

export default {
  components: {
    TopBar,
  },
};
</script>

<template>
  <div>
    <TopBar />
    <div class="main-container">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './main';
</style>
