<script>
export default {
  props: {
    buttonClass: {
      type: String,
      default: '',
    },
    variant: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'button',
    },
    icon: {
      type: String,
      default: '',
    },
  },
};
</script>

<template>
  <button :disabled="disabled" :class="buttonClass" @click="$emit('click', $event)">
    <div class="btn">
      <svgicon v-if="icon" :class="`${buttonClass}__icon`" :icon="icon" />
      <span>
        <slot></slot>
      </span>
    </div>
  </button>
</template>

<style lang="scss" scoped>
@import './app-button.scss';
</style>
