// standard ANSI Colours
const black = '#000000';
const red = '#ff2600';
const green = '#3AD900';
const yellow = '#ffc600';
const blue = '#1478DB';
const magenta = '#ff2c70';
const cyan = '#00c5c7';
const white = '#c7c7c7';
const lightBlack = '#808080';
const lightRed = '#ff0000';
const lightGreen = '#33ff00';
const lightYellow = '#ffff00';
const lightBlue = '#1478DB';
const lightMagenta = '#cc00ff';
const lightCyan = '#00ffff';
const lightWhite = '#ffffff';

// custom colours
const cobalt2blue = '#193549';
const variableBlue = '#0d3a58';
const dustyBlue = '#34424C';
const highlightBlue = '#1F4662';

exports.decorateConfig = config =>
  Object.assign({}, config, {
    cursorColor: yellow,
    foregroundColor: white,
    backgroundColor: cobalt2blue,
    borderColor: 'rgba(255,255,255,0.1)',
    selectionColor: 'rgba(255,198,0, 0.5)',
    css: `
    ${config.css || ''}
    .tab_active {
      background: rgba(255,255,255,0.05);
      border-bottom: 1px solid ${yellow} !important;
      border-color: ${yellow};
    }
    .hyper_main {
      ${(config.wickedBorder || config.wickedBorder === undefined) &&
        `border: 2px solid ${config.wickedBorderColor || magenta} !important;`}
    }

    .tabs_nav {
      border-bottom: 1px solid rgba(255,255,255,0.1)  !important;
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
