// standard ANSI Colours
const black = '#000000';
const red = '#ff2600';
const green = '#46dd3c';
const yellow = '#fee553';
const blue = '#1478db';
const magenta = '#ff2c70';
const cyan = '#00c5c7';
const white = '#c7c7c7';
const lightBlack = '#808080';
const lightRed = '#ff0000';
const lightGreen = '#33ff00';
const lightYellow = '#ffff00';
const lightBlue = '#0066ff';
const lightMagenta = '#cc00ff';
const lightCyan = '#00ffff';
const lightWhite = '#ffffff';

// custom colours
const cobalt2blue = '#193549';
const variableBlue = '#0d3a58';
const dustyBlue = '#34424C';
const highlightBlue = '#1F4662';

exports.decorateConfig = (config) => Object.assign({}, config, {
  cursorColor: yellow,
  foregroundColor: white,
  backgroundColor: cobalt2blue,
  borderColor: 'rgba(255,255,255,0.05)',
  css: `
    ${config.css || ''}
    .tab_active {
      background-color: rgba(255, 255, 255, 0.05);
      border-bottom: 1px solid ${yellow} !important;
    }
  `,
  colors: {
    black,
    red,
    green,
    yellow,
    blue,
    magenta,
    cyan,
    white,
    lightBlack,
    lightRed,
    lightGreen,
    lightYellow,
    lightBlue,
    lightMagenta,
    lightCyan,
    lightWhite,
  },
});
