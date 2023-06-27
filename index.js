const Jimp = require('jimp');

function processImage(imagePath) {
  Jimp.read(imagePath)
    .then(image => {
      image.resize(300, 300);
      image.sepia();
      image.write('output.jpg');
    })
    .catch(err => {
      console.error(err);
    });
}

module.exports = {processImage};
