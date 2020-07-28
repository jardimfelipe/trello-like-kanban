<script>
import MainLayout from '@/router/layouts/main.vue';
import Board from '@/components/kanban-board/kanban-board.vue';

export default {
  components: {
    MainLayout,
    Board,
  },
  methods: {
    changeColor() {
      document.documentElement.setAttribute('theme', 'grey');
    },
  },
};
</script>

<template>
  <MainLayout>
    <Board />
  </MainLayout>
</template>

<style lang="scss" scoped>
button {
  background: var(--app-danger);
}
</style>
