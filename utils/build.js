const axios = require('axios');
const fs = require('fs-extra');
const json5 = require('json5');
const mapKeys = require('lodash.mapKeys');
const pickBy = require('lodash.pickby');

const COLORS_URL = 'https://raw.githubusercontent.com/wesbos/cobalt2-vscode/master/theme/cobalt2.json';

(async function() {
  try {
    const { data } = await axios(COLORS_URL);
    const { colors } = json5.parse(data);
    
    let terminalColors = pickBy(colors, (colorValue, colorKey) => {
      return colorKey.startsWith('terminal.');
    });
  
    terminalColors = mapKeys(terminalColors, (colorValue, colorKey) => {
      // remove color prefix
      colorKey = colorKey.replace('terminal.ansi', '');
      // de-camelcase first letter
      colorKey = colorKey[0].toLowerCase() + colorKey.substring(1);
      // rename 'bright' to 'light' to match hyper values
      colorKey = colorKey.replace('bright', 'light');
      return colorKey;
    });
  
    await fs.writeJson('./ansi-colors.json', terminalColors);

    console.log('Build success.');
  } catch (error) {
    console.error('Build failed:');
    console.error(error.message);
  }
})();