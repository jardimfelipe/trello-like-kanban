import { shallowMount } from '@vue/test-utils';
import AppInput from './app-input.vue';

describe('@components/app-input', () => {
  it('should works with v-model', () => {
    const wrapper = shallowMount(AppInput, { propsData: { value: 'aaa' } });
    const inputWrapper = wrapper.find('input');
    const inputEl = inputWrapper.element;
    expect(inputEl.value).toEqual('aaa');
    inputEl.value = 'bbb';
    inputWrapper.trigger('input');
    wrapper.setValue('ccc');
    expect(inputEl.value).toEqual('ccc');
  });
});
