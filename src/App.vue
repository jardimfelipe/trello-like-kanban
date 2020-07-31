<script>
import { getSavedState } from '@/utils/localStorage';

export default {
  created() {
    this.getCurrentTheme();
  },
  methods: {
    getCurrentTheme() {
      const currentTheme = getSavedState('app.theme');
      document.documentElement.setAttribute('theme', currentTheme || 'main-theme');
    },
  },
};
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import '@/design';
</style>
