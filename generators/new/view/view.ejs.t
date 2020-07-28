---
to: "src/router/views/<%= h.changeCase.kebab(name) %>/<%= h.changeCase.kebab(name) %>.vue"
---
<%
  const fileName = h.changeCase.kebab(name)
  const importName = h.changeCase.pascal(fileName)
  const titleName = h.changeCase.title(name)
%><script>
import Layout from '@layouts/main.vue'

export default {
  components: { Layout },
}
</script>

<template>
  <Layout>
    <%= titleName %>
  </Layout>
</template>
<%

if (useStyles) { %>
<style lang="scss" scoped>
@import '@design';
</style>
<% } %>
