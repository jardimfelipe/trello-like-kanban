---
to: "src/router/layouts/<%= h.changeCase.kebab(name) %>.unit.js"
---
<%
  const fileName = h.changeCase.kebab(name)
  const importName = h.changeCase.pascal(fileName) + 'Layout'
%>import <%= importName %> from './<%= fileName %>.vue';
