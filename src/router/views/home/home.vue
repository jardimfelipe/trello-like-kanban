<script>
// components
import MainLayout from '@/router/layouts/main.vue';
import Board from '@/components/kanban-board/kanban-board.vue';

// module
import { todoMethods, todoComputed } from '@/store/helpers/todo';

export default {
  components: {
    MainLayout,
    Board,
  },
  computed: {
    ...todoComputed,
  },
  created() {
    this.fetchFramesList();
  },
  methods: {
    ...todoMethods,
  },
};
</script>

<template>
  <MainLayout>
    <Board
      @create-frame="createNewFrame($event)"
      @create-todo="createNewTodo($event)"
      @open-frame-input="openFrameInput($event)"
      @close-frame-input="closeFrameInput($event)"
      @remove-todo="removeTodo($event)"
      @swap-todo="swapTodo($event)"
      @swap-frames="swapFrames($event)"
      :board-frames="frames"
    />
  </MainLayout>
</template>
