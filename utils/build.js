const axios = require('axios');
const fs = require('fs-extra');
const json5 = require('json5');
const mapKeys = require('lodash.mapKeys');
const pickBy = require('lodash.pickby');

const COLORS_URL = 'https://raw.githubusercontent.com/wesbos/cobalt2-vscode/master/theme/cobalt2.json';

(async function() {
  try {
    // fetch colors from cobalt2-vscode on GitHub
    let { data } = await axios(COLORS_URL);
    let { colors } = json5.parse(data);
    
    // filter out non-relevant keys
    colors = pickBy(colors, (colorValue, colorKey) => {
      return colorKey.startsWith('terminal.') && colorKey.includes('ansi');
    });
  
    colors = mapKeys(colors, (colorValue, colorKey) => {
      // remove color prefix
      colorKey = colorKey.replace('terminal.ansi', '');
      // de-camelcase first letter
      colorKey = colorKey[0].toLowerCase() + colorKey.substring(1);
      // rename 'bright' to 'light' to match hyper values
      colorKey = colorKey.replace('bright', 'light');
      return colorKey;
    });
  
    // write colors to file as JSON
    await fs.writeJson('./ansi-colors.json', colors, { spaces: 2 });

    console.log('Build success.');
  } catch (error) {
    console.error('Build failed:');
    console.error(error.message);
  }
})();