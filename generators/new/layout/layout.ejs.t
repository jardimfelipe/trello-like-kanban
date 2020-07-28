---
to: "src/router/layouts/<%= h.changeCase.kebab(name) %>.vue"
---
<template>
  <div>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@import '@design';
</style>
