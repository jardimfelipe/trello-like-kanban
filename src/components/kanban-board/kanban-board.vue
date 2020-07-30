<script>
import AppButton from '@/components/app-button/app-button.vue';
import AppScrollbar from '@/components/app-scrollbar/app-scrollbar.vue';
import draggable from 'vuedraggable';
import Sortable, { MultiDrag, Swap } from 'sortablejs';

Sortable.mount(new MultiDrag(), new Swap());

export default {
  components: {
    AppButton,
    AppScrollbar,
    draggable,
  },
  data() {
    return {
      list: [
        {
          name: 'To do',
          items: ['asdd', 'ddddd'],
        },
        {
          name: 'Done',
          items: [
            'xxxxxx',
            'aaaa',
            'dssss',
            'xxxxxx',
            'aaaa',
            'dssss',
            'xxxxxx',
            'aaaa',
            'dssss',
            'xxxxxx',
            'aaaa',
            'dssss',
            'xxxxxx',
            'aaaa',
            'dssss',
            'xxxxxx',
            'aaaa',
            'dssss',
          ],
        },
        {
          name: 'Doing',
          items: ['xxxxxx', 'aaaa', 'dssss'],
        },
      ],
    };
  },
};
</script>

<template>
  <div id="kanban-board" class="board">
    <div v-for="(xList, index) in list" :key="`${list}-${index}`" class="board__list--wrapper">
      <draggable
        :swap="true"
        :options="{ animation: 300, direction: 'horizontal' }"
        handle=".handle-list"
        ghost-class="ghost"
        drag-class="a"
        :model="xList"
        group="x"
      >
        <div class="board__list--container">
          <div class="board__list--title">
            <AppButton class="btn__list btn__drag handle-list" icon="icn_drag" />
            <span>
              {{ xList.name }}
            </span>
            <AppButton class="btn__list" icon="icn_edit" />
          </div>
          <AppScrollbar>
            <div class="board__list--card-container">
              <draggable
                handle=".handle-card"
                ghost-class="ghost"
                drag-class="a"
                :model="list[index]"
                group="a"
              >
                <div
                  v-for="(card, cardIndex) in xList.items"
                  :key="`${card}-${cardIndex}`"
                  class="board__list--card"
                >
                  <span
                    ><AppButton class="btn__card handle-card btn__drag" icon="icn_drag" />{{
                      card
                    }}</span
                  >
                  <AppButton class="btn__card" icon="icn_edit" />
                </div>
              </draggable>
            </div>
          </AppScrollbar>
          <div class="board__list--add-button">
            <AppButton class="btn__dashed">Adicionar card</AppButton>
          </div>
        </div>
      </draggable>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './kanban-board';
</style>
