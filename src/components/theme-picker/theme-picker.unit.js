import { shallowMount } from '@vue/test-utils';
import { getSavedState } from '@/utils/localStorage';
import ThemePicker from './theme-picker.vue';

describe('@components/theme-picker', () => {
  it('should changes app theme', async () => {
    const wrapper = shallowMount(ThemePicker);
    wrapper.vm.changeColor({ name: 'new Theme' });
    const expectedTheme = 'new Theme';
    const newTheme = getSavedState('app.theme');
    expect(newTheme).toEqual(expectedTheme);
  });
});
