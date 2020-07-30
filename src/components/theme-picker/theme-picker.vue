<script>
import AppButton from '@/components/app-button/app-button.vue';

// utils
import { saveState } from '@/utils/localStorage';

export default {
  components: {
    AppButton,
  },
  computed: {
    themes() {
      const themes = [
        {
          name: 'main-theme',
          colors: ['#264653', '#2a9d8f'],
        },
        {
          name: 'grey-theme',
          colors: ['#495057', '#6c757d'],
        },
        {
          name: 'funny-theme',
          colors: ['#70d6ff', '#ff70a6'],
        },
      ];
      return themes;
    },
  },
  data() {
    return {
      isPickerOpen: false,
    };
  },
  methods: {
    changeColor({ name }) {
      document.documentElement.setAttribute('theme', name);
      saveState('app.theme', name);
      this.isPickerOpen = false;
    },
  },
};
</script>

<template>
  <div class="theme-picker">
    <AppButton
      @click.prevent="isPickerOpen = !isPickerOpen"
      class="btn__color-picker"
      icon="icn_color-picker"
    />
    <div v-if="isPickerOpen" class="themepicker__options">
      <ul>
        <li
          class="themepicker__options--item"
          v-for="(theme, index) in themes"
          :key="`${theme}-${index}`"
          @click="changeColor(theme)"
        >
          <div
            class="themepicker__options--color"
            :style="{
              background: `linear-gradient(150deg, ${theme.colors[0]} 48%, ${theme.colors[1]} 55%)`,
            }"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './theme-picker';
</style>
