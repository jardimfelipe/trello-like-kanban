import { shallowMount } from '@vue/test-utils';
import Home from './home.vue';

describe('HelloWorld.vue', () => {
  it('should render a content', () => {
    const { element } = shallowMount(Home);
    expect(element.textContent).toContain('Home Page');
  });
});
