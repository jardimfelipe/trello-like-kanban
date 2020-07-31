import { actions, mutations, state } from '@/store/modules/todo';
import flushPromises from 'flush-promises';

jest.mock('@/services/todo-service.js', () => ({
  GetFramesList: jest.fn().mockResolvedValue({
    data: {
      data: [
        {
          title: 'My First Frame',
          order: 0,
          todos: [
            {
              title: 'My First Todo',
              description: 'Todo',
              frame_id: '5eea1b18a8629bc62a6cb381',
              created_at: '2020-06-17 10:49:41.052000',
              open: true,
              order: 0,
              id: '5eea1f75af98bcb0e2762605',
            },
          ],
          id: '5eea1b18a8629bc62a6cb381',
        },
      ],
    },
  }),
  PostFrame: jest.fn().mockResolvedValue({ status: 200 }),
  EditFrame: jest.fn().mockResolvedValue({ status: 200 }),
}));

describe('todo actions', () => {
  it('should fetchFramesList set list of frames calling SET_FRAMES_LIST', async () => {
    const mockedList = [
      {
        title: 'My First Frame',
        order: 0,
        todos: [
          {
            title: 'My First Todo',
            description: 'Todo',
            frame_id: '5eea1b18a8629bc62a6cb381',
            created_at: '2020-06-17 10:49:41.052000',
            open: true,
            order: 0,
            id: '5eea1f75af98bcb0e2762605',
          },
        ],
        id: '5eea1b18a8629bc62a6cb381',
        isCreatingNewTodo: false,
      },
    ];
    const context = {
      commit: jest.fn(),
    };
    actions.fetchFramesList(context);
    await flushPromises();
    expect(context.commit).toHaveBeenCalledWith('SET_FRAMES_LIST', mockedList);
  });
  it('should create a new frame', async () => {
    const frame = [];
    const context = {
      dispatch: jest.fn(),
    };
    actions.createNewFrame(context, frame);
    await flushPromises();
    expect(context.dispatch).toHaveBeenCalledWith('fetchFramesList');
  });
  it('should open frame input calling OPEN_FRAME_INPUT', async () => {
    const frameId = 'mockedId';
    const context = {
      commit: jest.fn(),
    };
    actions.openFrameInput(context, frameId);
    expect(context.commit).toHaveBeenCalledWith('OPEN_FRAME_INPUT', frameId);
  });
  it('should close frame input calling CLOSE_FRAME_INPUT', async () => {
    const frameId = 'mockedId';
    const context = {
      commit: jest.fn(),
    };
    actions.closeFrameInput(context, frameId);
    expect(context.commit).toHaveBeenCalledWith('CLOSE_FRAME_INPUT', frameId);
  });
});

describe('movie mutations', () => {
  it('should set a list of frames', () => {
    const mockedList = ['Frame1', 'Frame2'];
    const state = {
      frames: '',
    };
    mutations.SET_FRAMES_LIST(state, mockedList);
    expect(state.frames).toBe(mockedList);
  });

  it('should open a frame input and close all others', () => {
    const state = {
      frames: [
        {
          title: 'frame1',
          isCreatingNewTodo: false,
          id: '1',
        },
        {
          title: 'frame1',
          isCreatingNewTodo: false,
          id: '2',
        },
      ],
    };
    const frameId = '1';
    mutations.OPEN_FRAME_INPUT(state, frameId);
    expect(state.frames[0].isCreatingNewTodo).toBe(true);
    expect(state.frames[1].isCreatingNewTodo).toBe(false);
  });
  it('should close a frame input with id equal the parameter', () => {
    const state = {
      frames: [
        {
          title: 'frame1',
          isCreatingNewTodo: true,
          id: '1',
        },
        {
          title: 'frame1',
          isCreatingNewTodo: false,
          id: '2',
        },
      ],
    };
    const frameId = '1';
    mutations.CLOSE_FRAME_INPUT(state, frameId);
    expect(state.frames[0].isCreatingNewTodo).toBe(false);
  });
});
