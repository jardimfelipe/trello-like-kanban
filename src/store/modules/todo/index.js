/* eslint-disable no-param-reassign */
import {
  GetFramesList,
  PostFrame,
  CreateTodo,
  DeleteTodo,
  EditFrame,
  DeleteFrame,
} from '@/services/todo-service';

export const state = {
  frames: [],
};

export const getters = {};

export const mutations = {
  SET_FRAMES_LIST(state, newList) {
    state.frames = newList;
  },
  OPEN_FRAME_INPUT(state, frameId) {
    state.frames.forEach((frame) => {
      if (frame.id === frameId) frame.isCreatingNewTodo = true;
      if (frame.id !== frameId) frame.isCreatingNewTodo = false;
    });
  },
  CLOSE_FRAME_INPUT(state, frameId) {
    state.frames.find(({ id }) => id === frameId).isCreatingNewTodo = false;
  },
};

export const actions = {
  async fetchFramesList({ commit }) {
    const {
      data: { data },
    } = await GetFramesList();
    // eslint-disable-next-line object-curly-newline
    const frames = data
      .map(({ id, order, title, todos }) => ({
        id,
        order,
        title,
        todos,
        isCreatingNewTodo: false,
      }))
      .sort((a, b) => parseInt(a.order) - parseInt(b.order));
    commit('SET_FRAMES_LIST', frames);
  },
  async createNewFrame({ dispatch }, frame) {
    const resp = await PostFrame(frame);
    dispatch('fetchFramesList');
    return resp;
  },
  swapFrames({ dispatch }, frames) {
    frames.forEach((frame) => EditFrame(frame));
    dispatch('fetchFramesList');
  },
  async removeFrame(_, frameId) {
    const resp = await DeleteFrame(frameId);
    return resp;
  },
  openFrameInput({ commit }, frameId) {
    commit('OPEN_FRAME_INPUT', frameId);
  },
  closeFrameInput({ commit }, frameId) {
    commit('CLOSE_FRAME_INPUT', frameId);
  },
  async createNewTodo({ dispatch }, todo) {
    const resp = await CreateTodo(todo);
    dispatch('fetchFramesList');
    return resp;
  },
  async removeTodo(_, todoId) {
    const resp = await DeleteTodo(todoId);
    return resp;
  },
  async swapTodo({ dispatch }, todo) {
    await dispatch('removeTodo', todo.remove.todoId);
    await dispatch('createNewTodo', todo.add);
  },
};

const todo = {
  namespaced: true,
  mutations,
  state,
  actions,
};
export default todo;
