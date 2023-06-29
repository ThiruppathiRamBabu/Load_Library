const Jimp = require('jimp');

function processImage(imagePath) {
  Jimp.read(imagePath)
    .then(image => {
      const maxWidth = 400;
      const maxHeight = 400;
      image.contain(maxWidth, maxHeight);
      image.sepia();
      image.write('output.jpg');
    })
    .catch(err => {
      console.error(err);
    });
}

module.exports = {processImage};


// function add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }

// module.exports = {
//   add,
//   subtract
// };
