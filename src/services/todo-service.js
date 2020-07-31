// import qs from 'qs';
import apiInstance from './api-instance';

const baseUrl = 'http://api.todo.ootz.com.br';

export const GetFramesList = async () => {
  try {
    return await apiInstance({
      method: 'get',
      url: `${baseUrl}/frames`,
    });
  } catch (e) {
    console.error(e);
    return e.response.data;
  }
};

export const PostFrame = async (frame) => {
  try {
    return await apiInstance({
      method: 'post',
      url: `${baseUrl}/frame`,
      data: frame,
    });
  } catch (e) {
    console.error(e);
    return e.response.data;
  }
};

export const EditFrame = async (frame) => {
  try {
    const { id } = frame;
    return await apiInstance({
      method: 'put',
      url: `${baseUrl}/frame`,
      data: frame,
    });
  } catch (e) {
    console.error(e);
    return e.response.data;
  }
};

export const DeleteFrame = async (frameId) => {
  try {
    return await apiInstance({
      method: 'delete',
      url: `${baseUrl}/frame/${frameId}`,
    });
  } catch (e) {
    console.error(e);
    return e.response.data;
  }
};

export const CreateTodo = async (todo) => {
  try {
    return await apiInstance({
      method: 'post',
      url: `${baseUrl}/todo`,
      data: todo,
    });
  } catch (e) {
    console.error(e);
    return e.response.data;
  }
};

export const DeleteTodo = async (todoId) => {
  try {
    return await apiInstance({
      method: 'delete',
      url: `${baseUrl}/todo/${todoId}`,
    });
  } catch (e) {
    console.error(e);
    return e.response.data;
  }
};
