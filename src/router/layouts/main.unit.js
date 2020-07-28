import { shallowMount } from '@vue/test-utils';
import Main from './main.vue';

describe('@layouts/main.vue', () => {
  it('should render a content', () => {
    const slotContent = '<p>Hello!</p>';
    const { element } = shallowMount(Main, {
      slots: {
        default: slotContent,
      },
    });
    expect(element.innerHTML).toContain(slotContent);
  });
});
