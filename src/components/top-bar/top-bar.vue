<script>
import ThemePicker from '@/components/theme-picker/theme-picker.vue';

export default {
  components: {
    ThemePicker,
  },
};
</script>

<template>
  <div class="topbar">
    <div class="topbar__logo">
      <svgicon width="45" height="45" icon="icn_kanban" />
      <span>KANBAN</span>
      <ThemePicker class="topbar__logo--themepicker" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './top-bar';
</style>
