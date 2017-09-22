// custom ANSI colours
const colors = require('./ansi-colors.json');

// custom colours
const cobalt2blue = '#193549';
const variableBlue = '#0d3a58';
const dustyBlue = '#34424C';
const highlightBlue = '#1F4662';

exports.decorateConfig = (config) => Object.assign({}, config, {
  colors,
  cursorColor: colors.yellow,
  foregroundColor: colors.white,
  backgroundColor: cobalt2blue,
  borderColor: 'rgba(255,255,255,0.05)',
  css: `
    ${config.css || ''}
    .tab_tab:before {
      border-left: 1px solid;
    }
    .tab_active {
      background: rgba(255,255,255,0.05);
    }
    .tab_active:before {
      border-color: ${colors.yellow};
    }
  `
});
