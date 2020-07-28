---
to: src/store/modules/<%= h.changeCase.kebab(name) %>/<%= h.changeCase.kebab(name) %>.unit.js
---
<%
  const fileName = h.changeCase.kebab(name)
  const importName = h.changeCase.camel(fileName) + 'Module'
%>import * as <%= importName %> from './<%= fileName %>'

