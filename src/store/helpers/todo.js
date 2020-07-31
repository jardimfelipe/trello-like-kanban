import { mapState, mapActions } from 'vuex';

export const todoMethods = mapActions('todo', [
  'fetchFramesList',
  'createNewFrame',
  'removeFrame',
  'openFrameInput',
  'closeFrameInput',
  'createNewTodo',
  'removeTodo',
  'swapTodo',
  'swapFrames',
]);

export const todoComputed = {
  ...mapState('todo', ['frames']),
};
