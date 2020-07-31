import { shallowMount } from '@vue/test-utils';
import KanbanBoard from './kanban-board.vue';

describe('@components/kanban-board', () => {
  it('should emit create-frame event with new frame infos', async () => {
    const wrapper = shallowMount(KanbanBoard, {
      stubs: {
        AppScrollbar: true,
      },
      propsData: {
        boardFrames: ['Frame 1', 'Frame 2'],
      },
      data() {
        return {
          newFrameTitle: 'Frame title',
          isCreatingNewFrame: true,
        };
      },
    });
    wrapper.vm.setFrameToCreate();
    await wrapper.vm.$nextTick();
    const frame = {
      title: 'Frame title',
      order: 2,
    };
    expect(wrapper.emitted()['create-frame'][0][0]).toEqual(frame);
    expect(wrapper.vm.isCreatingNewFrame).toBe(false);
  });
  it('should emit create-todo event with new frame infos', async () => {
    const wrapper = shallowMount(KanbanBoard, {
      stubs: {
        AppScrollbar: true,
      },
      data() {
        return {
          newTodoTitle: 'new todo',
        };
      },
    });
    wrapper.vm.setNewTodo({ order: 0, frameId: 1 });
    await wrapper.vm.$nextTick();
    const todo = {
      title: 'new todo',
      order: 0,
      frame_id: 1,
    };
    expect(wrapper.emitted()['create-todo'][0][0]).toEqual(todo);
  });
  it('should return correct order of frame based on new and old indexes', async () => {
    const wrapper = shallowMount(KanbanBoard, {
      stubs: {
        AppScrollbar: true,
      },
    });
    const expectedNewOrder = 2;
    const newOrder = wrapper.vm.getNewOrder(3, 4, 2);
    expect(newOrder).toEqual(expectedNewOrder);
  });
});
