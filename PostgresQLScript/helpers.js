const faker = require('faker');
const generate = require('../MongoScript/helpers.js');

let generateRestaurant = (id, size) => {
  let obj = {};

  obj.id = id;
  obj.name = faker.company.companyName();
  return obj;
};

let generatePhotos = (id, size) => {
  let obj = {};

  obj.id = id;
  obj.url1 = generate.URL();
  obj.url2 = generate.URL();
  obj.url3 = generate.URL();
  obj.url4 = generate.URL();
  obj.url5 = generate.URL();
  obj.url6 = generate.URL();
  obj.url7 = generate.URL();
  obj.url8 = generate.URL();
  obj.url9 = generate.URL();
  obj.url10 = generate.URL();
  obj.photo_id = id;
  return obj;
};

let generateDimensions = (id, size) => {
  let obj = {};
  let totalDimensions = generate.dimensions();
  
  obj.id = id;
  obj.width = totalDimensions[0];
  obj.height = totalDimensions[1];
  obj.dimension_id = id;
  return obj;
};

let generateUsers = (id, size) => {
  let obj = {};

  obj.id = id;
  obj.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
  obj.user_id = id;
  return obj;
};

let generateAvatars = (id, size) => {
  let obj = {};

  obj.id = id;
  obj.url1 = generate.avatars();
  obj.url2= generate.avatars();
  obj.url3 = generate.avatars();
  obj.url4 = generate.avatars();
  obj.url5 = generate.avatars();
  obj.avatar_id = id;
  return obj;
}

module.exports.generateRestaurant = generateRestaurant;
module.exports.generatePhotos = generatePhotos;
module.exports.generateDimensions = generateDimensions;
module.exports.generateUsers = generateUsers;
module.exports.generateAvatars = generateAvatars;