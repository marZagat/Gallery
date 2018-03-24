const faker = require('faker');
const MongoClient = require('mongodb').MongoClient;

//generate random width
let dimensions = () => {
  //coorsponding image sizes will be matched at indexs in both arrays
  let width = [640, 1024, 1280, 1504, 1632];
  let height = [480, 768, 960, 1000, 1224];
  let index = Math.floor(Math.random() * 5 + 1);
  let pair = [width[index], height[index]];
  return pair;
}

let URL = () => {
  let urls = ['https://bit.ly/2HZKiiO', 
              'https://bit.ly/2oda5i0',
              'https://bit.ly/2FWTqbk',
              'https://bit.ly/2I0nM9E',
              'https://bit.ly/2DQ8qBY',
              'https://bit.ly/2G1IPw0',
              'https://bit.ly/2ILNxM4',
              'https://bit.ly/2ufoygX',
              'https://bit.ly/2pzRZFt',
              'https://bit.ly/2HZKzCm',
              'https://bit.ly/2G94nCY',
              'https://bit.ly/2G6VhX0',
              'https://bit.ly/2pzUnMJ',
              'https://bit.ly/2pAc5ia',
              'https://bit.ly/2pyxpp8',
              'https://bit.ly/2GgSFcC',
              'https://bit.ly/2FYXuYI',
              'https://bit.ly/2IK3SRk'
              ];
  let index = Math.floor(Math.random() * urls.length + 1);
  return urls[index];
}

let avatars = () => {
  let urls = ['https://bit.ly/2DPUTdO', 
              'https://bit.ly/2B9o9hL',
              'https://bit.ly/2z3UogX',
              'https://bit.ly/2IMUgFx',
              'https://bit.ly/2msIgiK',
              'https://bit.ly/2HVSpwP',
              'https://bit.ly/2pCjy0p',
              'https://bit.ly/2ugdqQL',
              'https://bit.ly/2pzTBP1',
              'https://bit.ly/2pzJslX',
              'https://bit.ly/2DNCaPP',
              'https://bit.ly/2ukC6YA',
              'https://bit.ly/2I1QPcD',
              'https://bit.ly/2pxifk8',
              'https://bit.ly/2pATW3H',
              'https://bit.ly/2IP3S2i',
              'https://bit.ly/2FWUR9I',
              'https://bit.ly/2I21VP9'
              ];
  let index = Math.floor(Math.random() * urls.length + 1);
  // let arrayURL = [urls[index], urls[index], urls[index], urls[index],urls[index]];
  return urls[index];
}

let id_gen = 0;

let generatedData = [];

let generate = (id) => {
  let datum = [];
  //this for loop will run for 100 iterations of seeding 100000 pieces of data
  for (let i = 0; i < 1; i++) {
    //will need to kill db and make the seeding process async 
    for (let k = 0; k < 10000; k++) {
      let item = {
        place_id: id,
        place_name: faker.company.companyName(),
        photos: [],
        reviews: []
      };

      //increment id
      id ++;
      
      for (let p = 0; p < 10; p++) {
        let url = URL();
        let size = dimensions();
        let width = size[0];
        let height = size[1];
        let photo = {
          url: url,
          width: width,
          height: height
        }
        item.photos.push(photo);
      }

      for (let j = 0; j < 10; j++) {
        let url = avatars();
        let name = `${faker.name.firstName()} ${faker.name.lastName()}`
        let review = {
          name: name,
          avatar: url
        }
        item.reviews.push(review);
      }
      datum.push(item);
    }
    // generateData = []; // reverts data array back to empty for the next batch
  }
  console.log('successfully generated data');
  return datum;
}

let generate2 = (id) => {
  let datum = [];
  //this for loop will run for 100 iterations of seeding 100000 pieces of data
  for (let i = 0; i < 1; i++) {
    //will need to kill db and make the seeding process async 
    for (let k = 0; k < 10000; k++) {
      let item = {
        place_id: id,
        place_name: faker.company.companyName(),
        photos: [],
        reviews: []
      };

      //increment id
      id ++;
      
      for (let p = 0; p < 10; p++) {
        let url = URL();
        let size = dimensions();
        let width = size[0];
        let height = size[1];
        let photo = {
          url: url,
          width: width,
          height: height
        }
        item.photos.push(photo);
      }

      for (let j = 0; j < 10; j++) {
        let url = avatars();
        let name = `${faker.name.firstName()} ${faker.name.lastName()}`
        let review = {
          name: name,
          avatar: url
        }
        item.reviews.push(review);
      }
      datum.push(item);
    }
    // generateData = []; // reverts data array back to empty for the next batch
  }
  console.log('successfully generated data');
  return datum;
}

let generate3 = (id) => {
  let datum = [];
  //this for loop will run for 100 iterations of seeding 100000 pieces of data
  for (let i = 0; i < 1; i++) {
    //will need to kill db and make the seeding process async 
    for (let k = 0; k < 10000; k++) {
      let item = {
        place_id: id,
        place_name: faker.company.companyName(),
        photos: [],
        reviews: []
      };

      //increment id
      id ++;
      
      for (let p = 0; p < 10; p++) {
        let url = URL();
        let size = dimensions();
        let width = size[0];
        let height = size[1];
        let photo = {
          url: url,
          width: width,
          height: height
        }
        item.photos.push(photo);
      }

      for (let j = 0; j < 10; j++) {
        let url = avatars();
        let name = `${faker.name.firstName()} ${faker.name.lastName()}`
        let review = {
          name: name,
          avatar: url
        }
        item.reviews.push(review);
      }
      datum.push(item);
    }
    // generateData = []; // reverts data array back to empty for the next batch
  }
  console.log('successfully generated data');
  return datum;
}


module.exports.dimensions = dimensions;
module.exports.URL = URL;
module.exports.avatars = avatars;
module.exports.generate = generate;
module.exports.generatedData = generatedData;
module.exports.generate2 = generate2;
module.exports.generate3 = generate3;