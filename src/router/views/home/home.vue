<script>
// components
import MainLayout from '@/router/layouts/main.vue';
import Board from '@/components/kanban-board/kanban-board.vue';

// utils
import { getSavedState } from '@/utils/localStorage';

export default {
  components: {
    MainLayout,
    Board,
  },
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
  <MainLayout>
    <Board />
  </MainLayout>
</template>
