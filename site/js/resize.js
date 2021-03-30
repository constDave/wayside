const sharp = require('sharp');
const fs = require('fs');
const directory = '../images';

fs.readdirSync(directory).forEach(file => {
  sharp(`${directory}/${file}`)
    .resize(500, 500) // width, height
    .toFile(`${directory}/${file}-small.jpg`);
  });