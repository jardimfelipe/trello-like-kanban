<script>
export default {
  props: {
    placeholder: {
      type: [String, Number],
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      default: '',
    },
  },
  methods: {},
};
</script>

<template>
  <input
    :id="id"
    :type="type"
    :placeholder="placeholder"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<style lang="scss" scoped>
@import './app-input';
</style>
