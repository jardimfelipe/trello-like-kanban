import { shallowMount } from '@vue/test-utils';
import AppButton from './app-button.vue';

describe('@components/app-button', () => {
  it('should renders its content', () => {
    const slotContent = '<span>foo</span>';
    const { element } = shallowMount(AppButton, {
      slots: {
        default: slotContent,
      },
    });
    expect(element.innerHTML).toContain(slotContent);
  });
  it('should $emit event when clicked', async () => {
    const wrapper = shallowMount(AppButton);
    await wrapper.trigger('click');
    expect(wrapper.emitted().click).not.toBe(undefined);
  });
});
