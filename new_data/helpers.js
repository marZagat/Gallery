const faker = require('faker');

//generate random width
let width = () => {
  //coorsponding image sizes will be matched at indexs in both arrays
  let width = [640, 1024, 1280, 1504, 1632, 2000, 2240, 2275, 2272, 2590, 3008, 4256,4536, 5782];
  let index = Math.floor(Math.random() * 14 + 1);
  return width[index];
}

//generate random height
let height = () => {
  let height = [480, 768, 960, 1000, 1224, 1312, 1488, 1520, 1704, 1920, 2000, 2848, 3024, 3946];
  let index = Math.floor(Math.random() * 14 + 1);
  return height[index];
}

module.exports.width = width;
module.exports.height = height;