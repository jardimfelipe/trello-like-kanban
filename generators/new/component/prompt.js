const toKebabCase = (string) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();

module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Name:',
    validate(value) {
      if (!value.length) {
        return 'Components must have a name.';
      }
      const fileName = toKebabCase(value);
      if (fileName.indexOf('-') === -1) {
        return 'Component names should contain at least two words to avoid conflicts with existing and future HTML elements.';
      }
      return true;
    },
  },
  {
    type: 'multiselect',
    name: 'blocks',
    message: 'Blocks:',
    initial: ['script', 'template', 'style'],
    choices: [
      {
        name: 'script',
        message: '<script>',
      },
      {
        name: 'template',
        message: '<template>',
      },
      {
        name: 'style',
        message: '<style>',
      },
    ],
    validate(value) {
      if (value.indexOf('script') === -1 && value.indexOf('template') === -1) {
        return 'Components require at least a <script> or <template> tag.';
      }
      return true;
    },
  },
];
