const helper = require('./helpers.js');
const faker = require('faker');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/photos');

//model schemas
const PhotosSchema = mongoose.Schema({
  url: String,
  width: Number,
  height: Number,
});

const ReviewSchema = mongoose.Schema({
  name: String,
  avatar: String,
});

const photoSchema = mongoose.Schema({
  place_id: Number,
  place_name: String,
  photos: [PhotosSchema],
  reviews: [ReviewSchema],
});

const Photos = mongoose.model('Photos', photoSchema);

module.exports.PhotosSchema = PhotosSchema;
module.exports.ReviewSchema = ReviewSchema;
module.exports.photoSchema = photoSchema;
module.exports.Photos = Photos;