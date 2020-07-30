<script>
export default {
  props: {
    icon: {
      type: String,
      default: '',
    },
  },
};
</script>

<template>
  <button class="btn" @click="$emit('click', $event)">
    <div class="btn__wrapper">
      <svgicon v-if="icon" :icon="icon" />
      <span>
        <slot></slot>
      </span>
    </div>
  </button>
</template>

<style lang="scss" scoped>
@import './app-button.scss';
</style>
