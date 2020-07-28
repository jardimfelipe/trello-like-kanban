---
to: "src/components/<%= h.changeCase.kebab(name).toLowerCase().slice(0, 5) === 'base-' ? '_' : '' %><%= h.changeCase.kebab(name) %>/<%= h.changeCase.kebab(name).toLowerCase().slice(0, 5) === 'base-' ? '_' : '' %><%= h.changeCase.kebab(name) %>.vue"
---
<%
if (blocks.indexOf('script') !== -1) {
%><script>
export default {};
</script>
<%
}

if (blocks.indexOf('template') !== -1) {
%>
<template>
  <div />
</template>
<%
}

if (blocks.indexOf('style') !== -1) {
%>
<style lang="scss" scoped>
@import './<%= h.changeCase.kebab(name).toLowerCase().slice(0, 5) === 'base-' ? '_' : '' %><%= h.changeCase.kebab(name) %>';
</style><%
}
%>
