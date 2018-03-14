const helper = require('helper.js');
const faker = require('faker');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/photos', (err) => {
  if (err) {
    throw err;
  }
  console.log('mongoose good to go');
});


//model schema

// const PhotosSchema = mongoose.Schema({
//   ref: String,
//   url: String,
//   width: Number,
//   height: Number,
// });

// const ReviewSchema = mongoose.Schema({
//   name: String,
//   avatar: String,
// });

// const photoSchema = mongoose.Schema({
//   place_id: {
//     type: String,
//     unique: true,
//   },
//   place_name: String,
//   photos: [PhotosSchema],
//   reviews: [ReviewSchema],
// });
