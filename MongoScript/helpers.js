const faker = require('faker');

//generate random width
let dimensions = () => {
  //coorsponding image sizes will be matched at indexs in both arrays
  let width = [640, 1024, 1280, 1504, 1632, 2000, 2240, 2275, 2272, 2590, 3008, 4256,4536, 5782];
  let height = [480, 768, 960, 1000, 1224, 1312, 1488, 1520, 1704, 1920, 2000, 2848, 3024, 3946];
  let index = Math.floor(Math.random() * 14 + 1);
  let pair = [width[index], height[index]];
  return pair;
}

let URL = () => {
  let urls = ['https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=1260&h=750&dpr=3&auto=compress&cs=tinysrgb', 
    'https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?w=940&h=650&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/710916/pexels-photo-710916.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/76093/pexels-photo-76093.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/162971/potatoes-french-mourning-funny-162971.jpeg?h=350&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/8500/food-dinner-pasta-spaghetti-8500.jpg?w=940&h=650&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/5876/food-salad-healthy-vegetables.jpg?h=350&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?h=350&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?h=350&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/111130/potatoes-ketchup-murder-blood-111130.jpeg?h=350&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/103886/pexels-photo-103886.jpeg?h=350&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/209459/pexels-photo-209459.jpeg?h=350&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/8572/food-chicken-meat-outdoors.jpg?h=350&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/156114/pexels-photo-156114.jpeg?w=940&h=650&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/2238/animal-dog-pet-dangerous.jpg?h=350&auto=compress&cs=tinysrgb'
    ];
  let index = Math.floor(Math.random() * urls.length + 1);
  // let arrayURL = [urls[index], urls[index], urls[index], urls[index],urls[index],
  // urls[index], urls[index], urls[index], urls[index],urls[index]];
  return urls[index];
}

let avatars = () => {
  let urls = ['https://images.pexels.com/photos/8700/wall-animal-dog-pet.jpg?h=350&auto=compress&cs=tinysrgb', 
    'https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?h=350&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/460823/pexels-photo-460823.jpeg?h=350&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/159541/wildlife-photography-pet-photography-dog-animal-159541.jpeg?h=350&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?h=350&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/97082/weimaraner-puppy-dog-snout-97082.jpeg?h=350&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/422220/pexels-photo-422220.jpeg?h=350&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/485294/pexels-photo-485294.jpeg?h=350&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/89775/dog-hovawart-black-pet-89775.jpeg?h=350&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/92380/pexels-photo-92380.jpeg?h=350&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/733416/pexels-photo-733416.jpeg?h=350&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/159692/dog-training-joy-fun-159692.jpeg?h=350&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/374908/pexels-photo-374908.jpeg?h=350&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/7720/night-animal-dog-pet.jpg?h=350&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/59969/papillon-dog-animal-59969.jpeg?h=350&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?h=350&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/54632/cat-animal-eyes-grey-54632.jpeg?h=350&auto=compress&cs=tinysrgb',
    'https://images.pexels.com/photos/137049/pexels-photo-137049.jpeg?h=350&auto=compress&cs=tinysrgb'
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