<script>
import AppButton from '@/components/app-button/app-button.vue';
import AppScrollbar from '@/components/app-scrollbar/app-scrollbar.vue';
import AppInput from '@/components/app-input/app-input.vue';
import draggable from 'vuedraggable';

export default {
  components: {
    AppButton,
    AppScrollbar,
    draggable,
    AppInput,
  },
  props: {
    boardFrames: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    setFrameToCreate() {
      const frame = {
        title: this.newFrameTitle,
        order: this.boardFrames.length,
      };
      this.isCreatingNewFrame = false;
      this.$emit('create-frame', frame);
    },
    setNewTodo({ order, frameId }) {
      const todo = {
        order,
        frame_id: frameId,
        title: this.newTodoTitle,
      };
      this.$emit('create-todo', todo);
    },
    swapTodo(event) {
      if (event.todo.added) {
        this.swappedTodo.add = {
          title: event.todo.added.element.title,
          frame_id: event.frame,
          order: event.todo.added.newIndex,
        };
      }
      if (event.todo.removed) {
        this.swappedTodo.remove = {
          todoId: event.todo.removed.element.id,
        };
        this.$emit('swap-todo', this.swappedTodo);
      }
    },
    getNewOrder(order, newIndex, oldIndex) {
      let frameOrder = order;
      const isHighestOrder = newIndex > oldIndex;
      if (isHighestOrder) {
        const currentOrder = order > oldIndex && order <= newIndex ? (frameOrder -= 1) : frameOrder;
        return currentOrder;
      }
      const currentOrder = order < oldIndex && order >= newIndex ? (frameOrder += 1) : frameOrder;
      return currentOrder;
    },
    swapFrames({ moved }) {
      const newFramesOrder = this.boardFrames.map(({ order, title, id }) => ({
        order:
          id === moved.element.id
            ? moved.newIndex
            : this.getNewOrder(order, moved.newIndex, moved.oldIndex),
        title,
        id,
      }));
      this.$emit('swap-frames', newFramesOrder);
    },
  },
  data() {
    return {
      isCreatingNewFrame: false,
      newFrameTitle: '',
      newTodoTitle: '',
      swappedTodo: {},
    };
  },
};
</script>

<template>
  <div id="kanban-board" class="board">
    <draggable
      :options="{ direction: 'horizontal', animation: 300 }"
      handle=".handle-list"
      :list="boardFrames"
      :model="boardFrames"
      group="frames"
      @change="swapFrames"
      tag="span"
      ghost-class="ghost"
    >
      <div
        v-for="(frame, index) in boardFrames"
        :key="`${frame}-${index}`"
        class="board__list--wrapper"
      >
        <div class="board__list--container">
          <div class="board__list--title">
            <AppButton class="btn__list btn__drag handle-list" icon="icn_drag" />
            <span>
              {{ frame.title }}
            </span>
            <AppButton class="btn__list" icon="icn_edit" />
          </div>
          <AppScrollbar>
            <div class="board__list--card-container">
              <draggable
                handle=".handle-card"
                ghost-class="ghost"
                :list="frame.todos"
                group="todos"
                @change="swapTodo({ todo: $event, frame: frame.id })"
              >
                <div
                  v-for="(todo, cardIndex) in frame.todos"
                  :key="`${todo}-${cardIndex}`"
                  class="board__list--card"
                >
                  <span class="drag-todo"
                    ><AppButton class="btn__card handle-card btn__drag" icon="icn_drag" />{{
                      todo.title
                    }}</span
                  >
                  <AppButton class="btn__card" icon="icn_edit" />
                </div>
              </draggable>
            </div>
          </AppScrollbar>
          <div class="board__list--add-button">
            <AppButton
              @click.prevent="$emit('open-frame-input', frame.id)"
              v-if="!frame.isCreatingNewTodo"
              class="btn__dashed"
              >Adicionar card</AppButton
            >
            <div v-else class="board__list--frame-input">
              <form @submit.prevent="setNewTodo({ order: frame.todos.length, frameId: frame.id })">
                <AppInput
                  v-model="newTodoTitle"
                  placeholder="insira o nome do card"
                  type="text"
                  name="add-todo"
                  id="add-todo"
                />
                <div class="board__list--input-buttons">
                  <AppButton type="submit" class="btn__save" icon="icn_save" />
                  <AppButton
                    @click.prevent="$emit('close-frame-input', frame.id)"
                    class="btn__cancel"
                    icon="icn_cancel"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </draggable>
    <div class="board__list--empty">
      <div v-if="!isCreatingNewFrame" class="board__list--add-button">
        <AppButton @click.prevent="isCreatingNewFrame = !isCreatingNewFrame" class="btn__dashed"
          >Adicionar lista</AppButton
        >
      </div>
      <div v-else class="board__list--frame-input">
        <form @submit.prevent="setFrameToCreate">
          <AppInput
            v-model="newFrameTitle"
            placeholder="Insira o nome da lista"
            type="text"
            name="add-frame"
            id="add-frame"
          />
          <div class="board__list--input-buttons">
            <AppButton type="submit" class="btn__save" icon="icn_save" />
            <AppButton
              @click.prevent="isCreatingNewFrame = !isCreatingNewFrame"
              class="btn__cancel"
              icon="icn_cancel"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './kanban-board';
</style>
