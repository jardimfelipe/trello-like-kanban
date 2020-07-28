---
to: src/store/helpers/<%= h.changeCase.kebab(name) %>/<%= h.changeCase.kebab(name) %>.js
---
import { mapState, mapActions } from 'vuex';

export const baseMethods = mapActions(<%= h.changeCase.kebab(name) %>, ['actions']);

export const baseComputed = {
  ...mapState(<%= h.changeCase.kebab(name) %>, ['state']),
};
