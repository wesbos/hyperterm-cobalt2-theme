const { xterm, bgXterm } = require('cli-color');

const colors = require('../ansi-colors.json');

console.log('');

Array(16).fill().forEach((x, i) => {
  const hex = Object.keys(colors)[i].padStart(12);
  const code = `${i}`.padStart(2);
  console.log(`${code}  ${xterm(i)(hex)}  ${bgXterm(i)('       ')}`);
});

console.log('');